import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup"; 
import "./style.scss";

export const LogIn = () => {
  const [value, setValue] = useState("")
  const handleChange = (event) => {
      setValue(event.target.value)
  }
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("The email or mobile number you entered isn’t connected to an account"),
        password: Yup.string()
          .required("Required"),
      })}
    >
      <Form className="login-form">
        <h3 className="login-form__head">Log Into Facebook</h3>
        <div className="login-form__section">
          <Field
            name="email"
            type="email"
            placeholder="Email or phone number"
            className="login-form__section__input error-input"
          />
          <p className="login-form__section__error">
            <ErrorMessage name="email" />
          </p>
        </div>
        <div className="login-form__section">
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="login-form__section__input"
            value={value}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button className="login-form__button" type="submit" >Log In</button>
        <a className="login-form__forgot" href="#">Forgot password?</a>
      </Form>
    </Formik>
  );
};
