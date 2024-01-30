import quizInfoView from "./view/quizInfoView";
import * as model from "./model";
import paginationView from "./view/paginationView";

const getdata = async function () {
    const res = await fetch(`https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`);
    const data = await res.json();
    console.log(data);
};
// getdata();

const controlQuizInfo = async function (formData) {
    try {
        // set the formData in modal 
        await model.setQuestions(formData)

        // toggle the quiz info and quiz question 
        quizInfoView.toggleQuizInfoAndQues();

        // render question
        paginationView.render(model.getQuestionPerPage());

    } catch (err) {
        console.error('🔥🔥🔥' + err);
    }
}

// all handler here 
const init = function () {
    quizInfoView.addHandlerSubmit(controlQuizInfo);
}
init();