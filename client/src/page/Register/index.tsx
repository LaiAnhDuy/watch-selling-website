/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IMAGE_PATH } from "../../constants/images";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { RRError } from "../../types/Api";
import { Form, Input, message } from "antd";
import apiCaller from "../../api/apiCaller";
import { userApi } from "../../api/UserApi";
import useYupValidation from "../../hooks/useYupValidation";
import { validationSchemaRegister } from "./Register.validation";

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const registerRules = useYupValidation(validationSchemaRegister);

  const errorHandler = (error: RRError) => {
    console.log("Fail: ", error);
  };

  const handleRegister = async (data: any) => {
    const response = await apiCaller({
      request: userApi.register(data),
      errorHandler,
    });
    console.log(response);
    if (response) {
      navigate("/login");
      message.success(response.message);
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
          <p className="text-4xl font-bold my-3">Đăng ký</p>
          <Link to={"/"}>
            <img src={IMAGE_PATH.DWATCH} className="w-40" />
          </Link>
        </div>
        <div className="text-white">
          <Form
            form={form}
            onFinish={(values) => {
              handleRegister(values);
            }}
          >
            {/* name */}
            <Form.Item name="fullName" rules={[]}>
              <Input
                prefix={<PersonOutlineOutlinedIcon className="mr-2" />}
                placeholder="Họ tên"
              />
            </Form.Item>

            {/* email */}
            <Form.Item name="email" rules={[registerRules]} className="!pt-2">
              <Input
                prefix={<MailOutlineIcon className="mr-2" />}
                placeholder="Email"
              />
            </Form.Item>

            {/* password */}
            <Form.Item
              name="password"
              rules={[registerRules]}
              className="!pt-2"
            >
              <Input.Password
                prefix={<LockOutlinedIcon className="mr-2" />}
                placeholder="Mật khẩu"
              />
            </Form.Item>

            {/* comfirm password */}
            <Form.Item
              name="confirmPassword"
              rules={[registerRules]}
              className="!pt-2"
            >
              <Input.Password
                prefix={<PersonOutlineOutlinedIcon className="mr-2" />}
                placeholder="Xác nhận mật khẩu"
              />
            </Form.Item>

            {/* phone */}
            <Form.Item name="phone" rules={[registerRules]} className="!pt-2">
              <Input
                prefix={<LocalPhoneOutlinedIcon className="mr-2" />}
                placeholder="Số điện thoại"
              />
            </Form.Item>

            {/* address */}
            <Form.Item name="address" rules={[registerRules]} className="!pt-2">
              <Input
                prefix={<PlaceOutlinedIcon className="mr-2" />}
                placeholder="Địa chỉ"
              />
            </Form.Item>

            <button className="text-blue-500 mt-2">Quên mật khẩu?</button>

            <button
              type="submit"
              className="bg-red-500 text-white px-5 py-1 rounded-md w-full mt-5"
            >
              Đăng ký
            </button>
          </Form>

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
