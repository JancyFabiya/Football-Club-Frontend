import React, { Fragment, useEffect, useRef, useState } from "react";
import "./LoginSignUp.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FaceIcon from "@mui/icons-material/Face";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Loader from "../../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import { loginAction, registerAction } from "../../../redux/slices/adminSlices";

//Form schema
const formSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string().required("Password is required")
});

const loginFormSchema = Yup.object({
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string().required("Password is required")
});

function LoginSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const { loading, appErr, serverErr, registered, logged } = useSelector(
    (store) => store?.admin
  );
  console.log(registered, '111');

  //formik
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: ""
    },
    onSubmit: (values) => {
      //dispath the action

      dispatch(registerAction(values));
    },
    validationSchema: formSchema,
  });


  const loginFormik = useFormik({
    initialValues: {
      phone: "",
      password: ""
    },
    onSubmit: (values) => {
      //dispath the action

      dispatch(loginAction(values));
    },
    validationSchema: loginFormSchema,
  });



  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);



  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }

    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };



  useEffect(() => {
    if (appErr) {
      toast.error(appErr);
    }
    if (registered?.success == true) {
      toast.success(registered.message)
      navigate('/user/verify/phone')
    };
    if (logged?.success == true) {
      toast.success(logged.message)

      navigate('/admin/clubs')
    }
  }, [registered, logged, appErr]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <div className="LoginSignUpContainer">

            <div className="LoginSignUpBox">
              <div>
                <div className="Login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form
                action=""
                className="loginForm"
                ref={loginTab}
                onSubmit={loginFormik.handleSubmit}
              >
                <div className="loginEmail">
                  <PhoneIphoneIcon />
                  <input
                    type="number"
                    placeholder="Mobile Number"

                    name="phone"
                    value={loginFormik.values.phone}
                    onChange={loginFormik.handleChange("phone")}
                    onBlur={loginFormik.handleBlur("phone")}
                  />
                </div>
                {/* Err message */}
                <div className="text-red-400 mb-2">
                  {loginFormik.touched.phone && loginFormik.errors.phone}
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"

                    name="password"
                    value={loginFormik.values.password}
                    onChange={loginFormik.handleChange("password")}
                    onBlur={loginFormik.handleBlur("password")}
                  />
                </div>
                {/* Err message */}
                <div className="text-red-400 mb-2">
                  {loginFormik.touched.password && loginFormik.errors.password}
                </div>

                <input type="submit" value="Login" className="loginBtn" />
                {/* </Link> */}
              </form>
              <form
                action=""
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={formik.handleSubmit}
              >
                <div className="singUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"

                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange("name")}
                    onBlur={formik.handleBlur("name")}
                  />
                </div>
                {/* Err message */}
                <div className="text-red-400 mb-2">
                  {formik.touched.name && formik.errors.name}
                </div>

                <div className="signUpPhone">
                  <PhoneIphoneIcon />
                  <input
                    type="number"
                    placeholder="Mobile Number"

                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange("phone")}
                    onBlur={formik.handleBlur("phone")}
                  />
                </div>
                {/* Err message */}
                <div className="text-red-400 mb-2">
                  {formik.touched.phone && formik.errors.phone}
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"

                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                </div>
                {/* Err message */}
                <div className="text-red-400 mb-2">
                  {formik.touched.password && formik.errors.password}
                </div>

                <input type="submit" value="Register" className="signUpBtn"
                />
              </form>

            </div>

          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default LoginSignUp;
