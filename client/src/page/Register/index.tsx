/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconButton, Paper } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InputBase from "@mui/material/InputBase";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IMAGE_PATH } from "../../constants/images";
import { validationSchemaRegister } from "../../configs/validate";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { RRError } from "../../types/Api";
import { message } from "antd";
import apiCaller from "../../api/apiCaller";
import { authAPi } from "../../api/authApi";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [click, setClick] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const errorHandler = (error: RRError) => {
    console.log("Fail: ", error);
  };

  const handleRegister = async (data: any) => {
    console.log(1)
    const response = await apiCaller({
      request: authAPi.register(data),
      errorHandler,
    });
    console.log(response)
    if (response) {
      navigate('/')
      message.success(
        "Register Successfully! Please check your email to activate your account"
      );
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center"
      style={{
        backgroundImage: "url('/images/register/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="px-10 py-5 w-[480px] rounded-xl border"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div className="flex justify-between text-red-600 mb-10 items-center">
          <p className="text-4xl font-bold my-3">Đăng ký</p>
          <Link to={"/"}>
            <img src={IMAGE_PATH.DWATCH} className="w-40" />
          </Link>
        </div>
        <div className="text-white">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              confirmPassword: "",
              phone: "",
              address: "",
            }}
            validationSchema={validationSchemaRegister}
            onSubmit={(values, { setSubmitting }) => {
              handleRegister(values)
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                {/* name */}
                <Paper component="div" className="flex items-center">
                  <IconButton type="button">
                    <PersonOutlineOutlinedIcon />
                  </IconButton>
                  <Field
                    as={InputBase}
                    name="fullName"
                    className="flex-1"
                    placeholder="Họ tên"
                  />
                </Paper>
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 mt-2 ml-5"
                />

                {/* email */}
                <Paper component="div" className="flex items-center mt-5">
                  <IconButton type="button">
                    <MailOutlineIcon />
                  </IconButton>
                  <Field
                    as={InputBase}
                    name="email"
                    className="flex-1"
                    placeholder="Email"
                  />
                </Paper>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-2 ml-5"
                />

                {/* password */}
                <Paper component="div" className="flex items-center mt-5">
                  <IconButton type="button">
                    <LockOutlinedIcon />
                  </IconButton>
                  <Field
                    as={InputBase}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="flex-1"
                    placeholder="Mật khẩu"
                  />
                  <IconButton
                    onClick={handleShowPassword}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </Paper>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-2 ml-5"
                />

                {/* confirm password */}
                <Paper component="div" className="flex items-center mt-5">
                  <IconButton type="button">
                    <LockOutlinedIcon />
                  </IconButton>
                  <Field
                    as={InputBase}
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="flex-1"
                    placeholder="Xác nhận mật khẩu"
                  />
                  <IconButton
                    onClick={handleShowConfirmPassword}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </Paper>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 mt-2 ml-5"
                />

                {/* phone */}
                <Paper component="div" className="flex items-center mt-5">
                  <IconButton type="button">
                    <LocalPhoneOutlinedIcon />
                  </IconButton>
                  <Field
                    as={InputBase}
                    name="phone"
                    className="flex-1"
                    placeholder="Số điện thoại"
                  />
                </Paper>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 mt-2 ml-5"
                />

                {/* address */}
                <Paper component="div" className="flex items-center mt-5">
                  <IconButton type="button">
                    <PlaceOutlinedIcon />
                  </IconButton>
                  <Field
                    as={InputBase}
                    name="address"
                    className="flex-1"
                    placeholder="Địa chỉ"
                  />
                </Paper>
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 mt-2 ml-5"
                />

                <div className="flex gap-x-5 mt-5 items-center">
                  {click ? (
                    <img
                      src={IMAGE_PATH.CHECK}
                      className="w-6 h-6"
                      onClick={() => setClick(false)}
                    />
                  ) : (
                    <div
                      className="w-9 h-6 bg-white rounded-full"
                      onClick={() => setClick(true)}
                    ></div>
                  )}
                  <p className="text-xs">
                    Bằng việc Đăng ký, bạn đã đọc và đồng ý với{" "}
                    <span className="text-blue-400">Điều khoản sử dụng </span>
                    và <span className="text-blue-400">
                      Chính sách bảo mật
                    </span>{" "}
                    của DWATCH
                  </p>
                </div>

                <button
                  type="submit"
                  className="bg-red-600 text-white mt-5 w-full cursor-pointer p-2 rounded-md active:bg-red-500"
                  disabled={isSubmitting || !isValid}
                >
                  Đăng ký
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-5 text-center">
            Đã có tài khoản?{" "}
            <Link to="/login" className="text-blue-500">
              Đăng nhập ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
