import * as $ from "jquery";
import { coreLib } from "./coreLib.js";
import { Q }  from './lib.js';

export class app extends coreLib {
    constructor() {
        super();
        console.log('app initialize12345')
    }   

    getUser = () => {
        let qs = Q.getQueryString();
        console.log(qs);
        console.log('hit getUser');
    }
}