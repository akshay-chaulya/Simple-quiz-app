import View from "./view";
class QuestionView extends View {
    _parentEl = document.querySelector(".question_cont");
    _question = document.querySelector(".quiz_question");
    _errorMessage = "Please enter an option first :)";
    _allOptionBtn;

    constructor() {
        super();
        this._selectUserAnser();
    }

    addHandlerSubmit(handler) {
        this._question.addEventListener("submit", function (e) {
            e.preventDefault();
            const btn = e.target.closest(".submit-quiz_question");
            // if (!btn) return;
            if (this.dataset.userAns)
                handler();
        })
    }

    _generateMarkup() {
        // console.log(this._data)
        return this._data.map(this._generateMarkupPrivew).join();
    }

    _generateMarkupPrivew(ques) {
        return `
        <label class="quiz_question">${ques.questionId}. ${ques.question}</label>
        ${ques.option.map(op => `<button value="${op}" class="btn_hover form-control">${op}</button>`).join('')}`;
    }

    _selectUserAnser() {
        this._parentEl.addEventListener("click", this._selectUserAnserPreview.bind(this));
    }

    _selectUserAnserPreview(e) {
        e.preventDefault();
        const btn = e.target.closest(".form-control");
        if (!btn) return;
        this._question.dataset.userAns = true;
        // will some chang
        this._allOptionBtn = this._parentEl.querySelectorAll(".form-control");
        this._allOptionBtn.forEach(op => op.classList.remove("user_click"));
        btn.classList.add("user_click");
    }

    renderRightAns() {
        this._allOptionBtn.forEach(btn => {

            if (btn.classList.contains("user_click")) {
                if (this._data[0].correctAnswer !== btn.value)
                    btn.classList.add("wrong_ans");
            }
            if (btn.value === this._data[0].correctAnswer) {
                btn.classList.add("right_ans");
            }
            btn.setAttribute("disabled", true);
            btn.classList.remove("btn_hover");
        })
    }

}

export default new QuestionView();