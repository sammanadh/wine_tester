<?php

class Users extends Controller{

    public function __construct(){
        $this->users = $this->model("User");
    }
    
    // Returns all the users
    public function index(){
    }
  
    public function byRole($role){
        if(protect(["admin"])){
            $rows = $this->users->findByRole($role);
            handleResponse(200, $rows);
        }
    }

}

?>