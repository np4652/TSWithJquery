import { app } from "./app.js";
export class userModule extends app {
    constructor() {
        super()
    }
    setUser = () => {
        console.log('setUser')
    }
} 