import config from "../config.js";

async function login(user_id, password){
    fetch(`${config.BASEURL}auth/login`, {
        method: "POST",
        body:JSON.stringify({
            user_id,
            password
        })
    }).then(res => {
        if(res.ok){
            return res.json();
        }else if(res.status === 404){
            throw new Error("Incorrect username or password");
        }else{
            throw new Error("Something went wrong");
        }
    }).then(jsonRes => {
        localStorage.setItem('token', jsonRes.data.token)
    }).catch(err => 
        console.log(err.message)
    );
}

function register(){

    fetch(`${config.BASEURL}auth/register`).then(res=>{
        return res.json();
    }).then(data => console.log(data)).catch(err => console.log(err));

}

export { login, register }