import React, { Fragment, useEffect, useState } from "react";
import "./VerifyPhone.css";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import Loader from "../../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { OTPAction } from "../../../redux/slices/adminSlices";
import { toast } from "react-toastify";



//Form schema
const formSchema = Yup.object({
  otp: Yup.string().required("OTP is required"),
});

function VerifyPhoneNumber() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, appErr, serverErr, verify, login } = useSelector(
    (store) => store?.admin
  );
  const [otp, setOtp] = useState("");


  //formik
  const formik = useFormik({
    initialValues: {

      otp: "",
    },
    onSubmit: (values) => {
      //dispath the action

      dispatch(OTPAction(values));
    },
    validationSchema: formSchema,
  });

  useEffect(() => {
    if (appErr) {
      toast.error(appErr);
    }
    if (verify?.success == true) {
      toast.success(verify.message)
      navigate('/user/login')
    };
  }, [verify, appErr]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="VerifyPhoneContainer">
            <div className="VerifyPhoneBox">
              <h2 className="VerifyPhoneHeading">Verify Phone Number</h2>
              <form
                action=""
                className="VerifyPhoneForm"
                onSubmit={formik.handleSubmit}
              >
                <span className="VerifyPhoneSecondHeading">Please Enter the OPT "111"</span>

                <div className="VerifyPhoneEmail">
                  <PhonelinkLockIcon />

                  <input
                    type="text"
                    placeholder="Enter OTP"
                    name="otp"
                    value={formik.values.otp}
                    onChange={formik.handleChange("otp")}
                    onBlur={formik.handleBlur("otp")} />
                </div>
                {/* Err message */}
                <div className="text-red-400 mb-2">
                  {formik.touched.otp && formik.errors.otp}
                </div>

                <input
                  type="submit"
                  value="Verify OTP"
                  className="VerifyPhoneBtn"
                />


              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default VerifyPhoneNumber;
