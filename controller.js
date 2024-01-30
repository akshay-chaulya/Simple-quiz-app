import quizInfoView from "./view/quizInfoView";
import * as model from "./model";
import questionView from "./view/questionView";
import paginationView from "./view/paginationView";

const controlQuizInfo = async function (formData) {
    try {
        // set the formData in modal 
        await model.setQuestions(formData)

        // toggle the quiz info and quiz question 
        quizInfoView.toggleQuizInfoAndQues();

        // render question
        questionView.render(model.getQuestionPerPage());

    } catch (err) {
        console.error('🔥🔥🔥' + err);
    }
}

const controlQuestion = function () {
    // rendering right answer or wrong answer 
    questionView.renderRightAns();

    // render pagitination 
    paginationView.render(model.state);
}

const controlPagination = function (page) {
    // render question
    questionView.render(model.getQuestionPerPage(page));
}

// all handler here 
const init = function () {
    quizInfoView.addHandlerSubmit(controlQuizInfo);
    questionView.addHandlerSubmit(controlQuestion);
    paginationView.addHandler(controlPagination);
}
init();