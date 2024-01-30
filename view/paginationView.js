import View from "./view";
class PaginationView extends View {
    _parentEl = document.querySelector(".question_cont");

    _generateMarkup() {
        return this._data.map(this._generateMarkupPrivew).join();
    }

    _generateMarkupPrivew(ques) {
        return `
        <label class="quiz_question">${ques.questionId}. ${ques.question}</label>
        ${ques.option.map(op => `<button class="form-control">${op}</button>`).join('')}`;
    }
}

export default new PaginationView();