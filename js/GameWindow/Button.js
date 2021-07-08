class Button {
    constructor(element, action) {
        this.htmlElement = element;
        this.htmlElement.addEventListener('click', () => {
            action();
        });
    }
}
export default Button;
