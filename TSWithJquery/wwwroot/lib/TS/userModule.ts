import { app } from "./app";

export class userModule extends app {
    constructor() {
        super();
    }

    setUser = () => {
        console.log('setUser')
    }
} 