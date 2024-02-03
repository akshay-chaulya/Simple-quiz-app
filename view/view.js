export default class View {
    _data;

    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return "error in render";
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);;
    }

    toggleQuizInfoAndQues() {
        this._parentEl.classList.toggle("hidden");
        this._otherEl.classList.toggle("hidden");
    }

    // renderError(message = this._errorMessage) {
    //     console.log(this._overlay)
    //     document.querySelector(".erro_msg").innerHTML = message;
    //     this._overlay.classList.toggle("hidden");
    // }

    _clear() {
        this._parentEl.innerHTML = '';
    }
}
