import Page from "../Page.js";
import template from "../../api/template.js";

export default class Questionnaire extends Page{

    constructor(params){
        super();
        this.setTitle("Questionnaire");
        
        // Initialize the properties
        // this.data = {
        //     user_id : "",
        //     password : ""
        // }

    }

    async getHtml(){
        // eval converts the string into template String so that string interpolation can be used
        return eval('`'+await template("/template/questionnaire/Questionnaire.html")+'`');
    }

    onload(){
        // document.querySelector("form").addEventListener("submit", async(evt)=>{
        //     evt.preventDefault();

        //     try{

        //         let res = await login(this.data.user_id, this.data.password);

        //         // Proper error handeling
        //         if(res.status == 404){
        //             throw new Error("Incorrect user id or password");
        //         }else if( Math.floor(res.status/100) === 4 && res.status.toString().startsWith("4") ){
        //             throw new Error("Something went wrong")
        //         }else if( Math.floor(res.status/100) === 4 && res.status.toString().startsWith("5") ){
        //             throw new Error("Internal server error. Server failed to respond")
        //         }

        //         res = await res.json();

        //         // Storing the token in local storage
        //         localStorage.setItem('token', res.data.token);

        //         // Redirecting to dashboard
        //         location.href = '/dashboard';

        //     }catch(err){
        //         const errorMsg = err.message;
        //         const alert = document.getElementById("error-alert");
        //         alert.innerHTML = errorMsg;
        //         alert.removeAttribute("hidden");
        //     }
        // })

        // document.querySelectorAll("input").forEach(e => e.addEventListener("input", (evt)=>{
        //     if(evt.target.name in this.data){
        //         this.data[evt.target.name] = evt.target.value
        //     }
        //     })
        // )
    }

}