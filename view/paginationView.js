import View from "./view";

class PaginationView extends View {
    _parentEl = document.querySelector(".quiz_question-btns");

    addHandler(handler) {
        this._parentEl.addEventListener("click", function (e) {
            const btn = e.target.closest(".page_btn");
            if (!btn) return;
            const goTo = btn.dataset.goto;
            handler(goTo);
        })
    }

    _generateMarkup() {
        const curPage = this._data.curPage;
        const numPage = Math.ceil(this._data.questions.length / this._data.questionPerPage);

        if (curPage === 1 && numPage > 1) return this._generateMarkupNextBtn();
        if (curPage > 1 && numPage > curPage) return this._generateMarkupPreBtn() + this._generateMarkupNextBtn();
        if (curPage === numPage && curPage > 1) return this._generateMarkupPreBtn();
    }

    _generateMarkupPreBtn() {
        return `<button data-goto="${this._data.curPage - 1}" class="btn btn_hover page_btn submit-quiz_question">Pre</button>`;
    }

    _generateMarkupNextBtn() {
        return `<button data-goto="${this._data.curPage + 1}" class="btn btn_hover page_btn submit-quiz_question">Next</button>`;
    }
}

export default new PaginationView();