import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";

export const SignUp = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        firstname: Yup.string().required("First name is required"),
        lastname: Yup.string()
          .required("Last name is required")
          .min(6, "Last name must be at least 6 characters")
          .max(20, "Last name must not exceed 20 characters"),
        email: Yup.string()
          .required("Email is required")
          .email("Email is invalid"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters")
          .max(40, "Password must not exceed 40 characters"),

        acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
      })}
    >
      {({ errors, touched, resetForm }) => (
        <Form className="signup">
          <div className="signup__head">
            <h3>Sign Up</h3>
            <p>It’s quick and easy.</p>
          </div>

          <div className="row">
            <div className="form-group col-6">
              <Field
                name="firstname"
                type="text"
                placeholder="First Name"
                className={
                  "form-control" +
                  (errors.firstname && touched.firstname ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="firstname"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group col-6">
              <Field
                name="lastname"
                type="text"
                placeholder="Last Name"
                className={
                  "form-control" +
                  (errors.lastname && touched.lastname ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>

          <div className="form-group">
            <Field
              name="email"
              type="email"
              placeholder="Mobile number or email"
              className={
                "form-control" +
                (errors.email && touched.email ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="form-group">
            <Field
              name="password"
              type="password"
              placeholder="New password"
              className={
                "form-control" +
                (errors.password && touched.password ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="form-group form-check">
            <Field
              name="acceptTerms"
              type="checkbox"
              className={
                "form-check-input" +
                (errors.acceptTerms && touched.acceptTerms ? " is-invalid" : "")
              }
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              I have read and agree to the Terms
            </label>
            <ErrorMessage
              name="acceptTerms"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="form-group row justify-content-around">
            <select class="custom-select col-3">
              <option selected>September</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
            </select>
            <select class="custom-select col-3">
              <option selected>7</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <select class="custom-select col-3">
              <option selected>2003</option>
              <option value="1">2023</option>
              <option value="2">2022</option>
              <option value="3">2021</option>
            </select>
          </div>

          <div class="form-group row">
            <div className="col-4">
            <div class="input-group-prepend w-100">
              <div class="input-group-text">
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                  name="gender"
                  
                />
                
              </div>
            </div>
            <label htmlFor="">Female</label>
            </div>
            <div className="col-4">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                  name="gender"
                  
                />
                
              </div>
            </div>
            <label htmlFor="">Male</label>
            </div>
            <div className="col-4">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="radio"
                  aria-label="Radio button for following text input"
                  name="gender"
                  
                />
                
              </div>
            </div>
            <label htmlFor="">Custom</label>
            </div>
          </div>

          <p className="terms">
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
            <br />
            <br />
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS Notifications from us and can
            opt out any time
          </p>
          <br />
          <div className="form-group ">
            <button type="submit" className="btn btn-success ">
              Sign up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
