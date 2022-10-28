import { app } from "./app.js";
let element: HTMLElement;
export class userModule extends app {
    constructor() {
        super()
    }
    setUser = () => {
        element = document.getElementById("");
        console.log('setUser')
    }
} 