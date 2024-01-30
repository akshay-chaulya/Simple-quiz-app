import View from "./view";

class QuizInfoView extends View {

    _parentEl = document.querySelector(".quiz_info");
    _otherEl = document.querySelector(".quiz_question");
    _quesAmount = document.querySelector(".question_amount");

    addHandlerSubmit(handler) {
        this._parentEl.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            const value = [...formData.entries()];
            handler(value);
        })
    }
}

export default new QuizInfoView();