import { app } from "./app.js";
let element: HTMLElement;
let jQueryElement: JQuery<HTMLElement>;
export class userModule extends app {
    constructor() {
        super()
    }
    setUser = () => {
        element = document.getElementById("");
    }
    changeText = () => {
        jQueryElement = $('#btnChangeText');
        jQueryElement.click(e => {
            e.preventDefault();
            jQueryElement.text("Text Chnaged successfully!!!");
        })
    }
} 