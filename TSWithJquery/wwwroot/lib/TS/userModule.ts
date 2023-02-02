import { app } from "./app.js";
let element: HTMLElement;
let jQueryElement: JQuery<HTMLElement>;
let _ajax: JQuery<JQueryAjaxSettings>;
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
    _ajax = (option: JQueryAjaxSettings): any => {
        console.log('Hit ajax');
        let res = $.ajax(option);
        return res;
    }
} 