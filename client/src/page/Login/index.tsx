import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InputBase from "@mui/material/InputBase";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IMAGE_PATH } from "../../constants/images";
import { validationSchemaLogin } from "../../configs/validate";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const users = [
  { email: "duy@gmail.com", password: "123456aA@" },
  { email: "test@gmail.com", password: "123456aA@" },
];

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (values: { email: string; password: string }) => {
    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (user) {
      dispatch(login({ email: user.email }));
      const from = location.state?.from || "/";
      navigate(from);
    } else {
      setLoginError("Email hoặc mật khẩu không đúng");
    }
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
          <p className="text-4xl font-bold my-3">Đăng nhập</p>
          <Link to={"/"}>
            <img src={IMAGE_PATH.DWATCH} className="w-40" />
          </Link>
        </div>
        <div className="text-white">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchemaLogin}
            onSubmit={(values, { setSubmitting }) => {
              handleLogin(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                {/* email */}
                <Paper component="div" className="flex items-center">
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

                {loginError && (
                  <div className="text-red-500 mt-5 text-center">
                    {loginError}
                  </div>
                )}

                <p className="text-blue-500 mt-5">Quên mật khẩu?</p>

                <button
                  type="submit"
                  className="bg-red-600 text-white mt-5 w-full cursor-pointer p-2 rounded-md active:bg-red-500"
                  disabled={isSubmitting || !isValid}
                >
                  Đăng nhập
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-5 text-center">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="text-blue-500">
              Đăng ký tài khoản mới
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
