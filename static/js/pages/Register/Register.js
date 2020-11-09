import Page from "../Page.js";

export default class Register extends Page{

    constructor(){
        super();

        // Initialize the 
        this.title = "Register"
        this.username = "";
        this.password = "";
        this.email = "";
        this.first_name = "";
        this.last_name = "";
        this.contact_no = "";

        this.setTitle(this.title);
    }

    getHtml(){
        return `
        <div class="card" style="background-image: linear-gradient(to bottom, #B8BDD9, #F28B7C); box-shadow: 5px 5px; width: 60%; margin: 5% auto; padding: 5%">
            <h2 class="card-title mb-4 mx-auto">${this.title}</h2>
            <form>
                <div class="form-group">
                    <label for="first-name">First Name</label>
                    <input type="text" class="form-control" id="first-name" placeholder="Enter first name" required>
                </div>
                <div class="form-group">
                    <label for="first-name">Last Name</label>
                    <input type="text" class="form-control" id="last-name" placeholder="Enter last name" required>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter username" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" required>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter address" required>
                </div>
                <div class="form-group">
                    <label for="contact-number">Contact Number</label>
                    <input type="text" class="form-control" id="contact-number" placeholder="Enter contact number" required>
                </div>
                <div class="form-group">
                    <label for="dob">Date of Birth</label>
                    <input type="date" class="form-control" id="dob" placeholder="Enter data of birth" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" required>
                </div>
                <button type="submit" class="btn btn-primary w-100 mt-4" click="()=>console.log("done")">Register</button>
            </form>
        </div>
        `
    }

    loadEventListeners(){
        document.querySelector("form").addEventListener("submit", (evt)=>{
            
        })
    }

}