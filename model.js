import { API_URL, QUES_PER_PAGE } from "./config.js";
import { getJSON, getRandomIndex } from "./helpers.js";

export const state = {
    quizInfo: {},
    questions: [],
    curPage: 1,
    questionPerPage: QUES_PER_PAGE,
}

export const setQuestions = async function (formData) {
    try {
        const [amount, category, difficulty, type] = formData.map(data => data[1] !== 'any' ? data[1] : '');
        state.quizInfo = { amount, category, difficulty, type };

        const infoData = state.quizInfo;
        const urlLastPart = `${infoData.category ? `&category=${infoData.category}` : ''}${infoData.difficulty ? `&difficulty=${infoData.difficulty}` : ''}${infoData.type ? `&type=${data.type}` : ''}`;

        const data = await getJSON(`${API_URL}amount=${infoData.amount}${urlLastPart}`);

        state.questions = data.results.map((ques, i) => {
            ques.incorrect_answers.splice(getRandomIndex(), 0, ques.correct_answer);
            return {
                questionId: i + 1,
                question: ques.question,
                correctAnswer: ques.correct_answer,
                option: ques.incorrect_answers,
                category: ques.category,
                difficulty: ques.difficulty,
                type: ques.type,
            }
        });
    } catch (err) {
        throw err;
    }
}

export const getQuestionPerPage = function (page = state.curPage) {
    state.curPage = page;

    const start = (page - 1) * state.questionPerPage;
    const end = page * state.questionPerPage;
    return state.questions.slice(start, end);
}
