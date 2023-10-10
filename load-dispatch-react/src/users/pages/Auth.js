import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth.context";

import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
    isValid: true,
  });

  function switchModeHandler () {
    if(!isLoginMode){
      setFormState({
        ...formState,
        company: undefined,
        passwordConfirm: undefined,
        role: undefined,
      })
    } else {
      setFormState(prevState => ({
        ...prevState,
        company: {
          value: "",
          isValid: true,
        },
        passwordConfirm: {
          value: "",
          isValid: true,
        },
        role: {
          value: "",
          isValid: true,
        },
      }));
    }

    setIsLoginMode(prevState => !prevState)
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
    auth.login();
  }
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <form onSubmit={handleSubmit}>
        {!isLoginMode && (
          <Input
            id="company"
            element="input"
            type="text"
            label="Company Name"
            name="company"
            onChange={handleChange}
            value={formState.company.value}
          />
        )}

        <Input
          id="email"
          element="email"
          type="email"
          label="Email address"
          name="email"
          onChange={handleChange}
          value={formState.email.value}
        />

        <Input
          id="password"
          element="password"
          type="password"
          label="Password"
          name="password"
          onChange={handleChange}
          value={formState.password.value}
        />
        {!isLoginMode && (
          <Input
            id="passwordConfirm"
            element="password"
            type="password"
            label="Confirm password"
            name="passwordConfirm"
            onChange={handleChange}
            value={formState.passwordConfirm.value}
          />
        )}
        {!isLoginMode && (
          <fieldset className="radio-buttons">
            <legend>Role</legend>
            <Input
              id="client"
              element="radio"
              label="Client"
              type="radio"
              name="role"
              value="client"
              checked={formState.role === "client"}
              onChange={handleChange}
              required
            />
            {/* <label htmlFor="Client">Client</label> */}

            <Input
              element="radio"
              type="radio"
              id="transporter"
              label="Transporter"
              name="role"
              value="transporter"
              checked={formState.role === "transporter"}
              onChange={handleChange}
            />
            {/* <label htmlFor="transporter">Transporter</label> */}
          </fieldset>
        )}

        <Button type="submit">{isLoginMode ? 'LOGIN' : 'SIGNUP'}</Button>
      </form>
      <Button type="submit" onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button>
    </Card>
  );
};

export default Auth;
