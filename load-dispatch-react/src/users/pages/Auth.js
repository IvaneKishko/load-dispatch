import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth.context";

import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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
        image: undefined,
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
        image: {
          value: null,
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

  const imageInputHandler = (name, value, isValid) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/login",
          "POST",
          JSON.stringify({
            email: formState.email.value,
            password: formState.password.value,
          }),
          {
            "Content-Type": "application/json", // Correct way to set headers
          }
        );
        auth.login(responseData.userId, responseData.token, responseData.companyName, responseData.role);
      } catch (err) {
        // we are handling this in http hook
      }
    } else {
      try {
        const formData = new FormData();
        formData.append("companyName", formState.companyName.value);
        formData.append("email", formState.email.value);
        formData.append("password", formState.password.value);
        formData.append("role", formState.role.value);
        formData.append("phoneNumber", formState.phoneNumber.value);
        formData.append("image", formState.image.value);
        for (var pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/signup",
          "POST",
          // fetch api that we use under the hood automatically sets right headers for formdata
          formData
        );

        auth.login(responseData.userId, responseData.token, responseData.companyName, responseData.role);
      } catch (err) {
        // we are handling this in http hook
      }
    }
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
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

          {!isLoginMode && (
            <ImageUpload
              id="image"
              center
              onInput={imageInputHandler}
              errorText="Please provide an image"
              required
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
