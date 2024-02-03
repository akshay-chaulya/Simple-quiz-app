import View from "./view";

class PaginationView extends View {
    _parentEl = document.querySelector(".quiz_question-btns");

    addHandler(handler) {
        this._parentEl.addEventListener("click", function (e) {
            const btn = e.target.closest(".page_btn");
            if (!btn) return;
            const goTo = btn.dataset.goto;
            handler(+goTo);
            this.innerHTML = `<button class="btn btn_hover submit-quiz_question">Submit</button>`;
        })
    }

    _generateMarkup() {
        if (this._data.curPage < this._data.questions.length)
            return `<button data-goto="${this._data.curPage + 1}" class="btn btn_hover page_btn">Next</button>`;
        else return '<button class="btn btn_hover submit-quiz_question">Submit</button>';
    }

}

export default new PaginationView();