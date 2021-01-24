import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    //Destruct details from the state
    const { displayName, email, password, confirmPassword } = this.state;

    // If passwords don't match, alert then return
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // We now use a new method/function from auth lib to create user

    try {
      // Below will return a userAuth object
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // await the below to finish, displayName goes as an object
      await createUserProfileDocument(user, { displayName });
      // Clear our form
      this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
      // If it cant create a user, throw an error
    } catch (error) {
      console.error(error);
    }
  };

  // This is identical to the sign-in handleChange method
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account</h2>
        <span> Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
