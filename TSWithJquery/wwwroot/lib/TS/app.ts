import * as $ from "jquery";
import { coreLib } from "./coreLib.js";
import * as lib from './lib.js';

export class app extends coreLib {
    constructor() {
        super();
        console.log('app initialize12345')
    }   

    getUser = () => {
        lib.Q.getQueryString();
        console.log('hit getUser 4321');
    }
}