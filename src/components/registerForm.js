import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Passwort"),
    name: Joi.string()
      .required()
      .label("Username")
  };
  //username = React.createRef();

  doSubmit = () => {
    //call server 

    console.log("submit");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username oder EMail", "text")}
          {this.renderInput("password", "Paswort", "password")}
          {this.renderInput("username", "Name", "text")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}
export default RegisterForm;
