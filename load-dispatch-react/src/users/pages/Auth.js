import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth.context";

import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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

  function switchModeHandler() {
    if (!isLoginMode) {
      setFormState({
        ...formState,
        companyName: undefined,
        passwordConfirm: undefined,
        role: undefined,
      });
    } else {
      setFormState((prevState) => ({
        ...prevState,
        companyName: {
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
        phoneNumber: {
          value: "",
          isValid: true,
        },
      }));
    }

    setIsLoginMode((prevState) => !prevState);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (isLoginMode) {
      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Correct way to set headers
          },
          body: JSON.stringify({
            email: formState.email.value,
            password: formState.password.value
          }),
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        auth.login();
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Something went wrong, please try again");
      }
    } else {
      try {
        const response = await fetch("http://localhost:5000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Correct way to set headers
          },
          body: JSON.stringify({
            companyName: formState.companyName.value,
            email: formState.email.value,
            password: formState.password.value,
            role: formState.role.value,
            phoneNumber: formState.phoneNumber.value,
          }),
        });

        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        auth.login();
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Something went wrong, please try again");
      }
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Login Required</h2>
        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <Input
              id="companyName"
              element="input"
              type="text"
              label="Company Name"
              name="companyName"
              onChange={handleChange}
              value={formState.companyName.value}
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
            <Input
              id="phoneNumber"
              element="input"
              type="tel"
              label="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
              value={formState.phoneNumber.value}
              required
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
                checked={formState.role.value === "client"}
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
                checked={formState.role.value === "transporter"}
                onChange={handleChange}
              />
              {/* <label htmlFor="transporter">Transporter</label> */}
            </fieldset>
          )}

          <Button type="submit">{isLoginMode ? "LOGIN" : "SIGNUP"}</Button>
        </form>
        <Button type="submit" onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
        </Button>
      </Card>
    </>
  );
};

export default Auth;
