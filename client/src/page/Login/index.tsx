import { Link, useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IMAGE_PATH } from "../../constants/images";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { userApi } from "../../api/UserApi";
import apiCaller from "../../api/apiCaller";
import { RRError } from "../../types/Api";
import { Form, Input, message } from "antd";
import useYupValidation from "../../hooks/useYupValidation";
import { validationSchemaLogin } from "./Login.validation";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const loginRules = useYupValidation(validationSchemaLogin);

  const errorHandler = (error: RRError) => {
    console.log("Fail: ", error);
  };

  const handleLogin = async (values: { email: string; password: string }) => {
      const response = await apiCaller({
        request: userApi.login(values),
        errorHandler,
      });
      if (response) {
        message.success(response.message);
        localStorage.setItem('access_token', response.access_token);
        dispatch(
          login({ email: response.data.email, fullName: response.data.fullName })
        );
        navigate("/");
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
          <Form
            form={form}
            onFinish={(values) => {
              handleLogin(values);
            }}
          >
            {/* email */}
            <Form.Item
              name="email"
              rules={[loginRules]}
              style={{ marginBottom: "24px" }}
            >
              <Input
                prefix={<MailOutlineIcon className="mr-2" />}
                placeholder="Email"
              />
            </Form.Item>

            {/* password */}
            <Form.Item name="password" rules={[loginRules]} className="!pt-2">
              <Input.Password
                prefix={<LockOutlinedIcon className="mr-2" />}
                placeholder="Password"
              />
            </Form.Item>
            <button className="text-blue-500 mt-2">Quên mật khẩu?</button>

            <button
              type="submit"
              className="bg-red-500 text-white px-5 py-1 rounded-md w-full mt-5"
            >
              Đăng nhập
            </button>
          </Form>

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
