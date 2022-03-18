import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { API_USER_REGISTER } from "../utils/const";
import "./css/register.css";

function Register() {
  const [data, setData] = useState({
    username: "",
    name: "",
    role :"user",
    password: "",
    email: ''
  });

  const onRegister = async (e) => {
    const reponse = await axios.post(API_USER_REGISTER, data);
    if (reponse && reponse.status == 200) {
      console.log("Register sucsess");
      alert("Dang ky thanh cong");
    }
  };
  return (
    <div class="modal-dialog modal-login">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Member Register</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            &times;
          </button>
        </div>
        <div class="modal-body">
          <form >

          <div class="form-group">
          <i class="fa fa-user"></i> 
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                required="required"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div class="form-group">
           <i class="fa-solid fa-envelope"></i>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                required="required"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            
            <div class="form-group">
            <i class="fa fa-user"></i> 
              <input
                type="text"
                class="form-control"
                placeholder="UserName"
                required="required"
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
            </div>

            <div class="form-group">
              <i class="fa fa-lock"></i>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required="required"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>

            <div class="form-group">
              <input
                type="submit"
                class="btn btn-primary btn-block btn-lg"
                value="Register"
                onClick={(e) => {
                  onRegister(e);
                }}
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
