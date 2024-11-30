import * as Yup from "yup";

export const validationSchemaRegister = Yup.object({
    fullName: Yup.string().required("Họ tên là bắt buộc"),
  
    email: Yup.string()
      .email("Địa chỉ email không hợp lệ")
      .required("Email là bắt buộc"),
  
    password: Yup.string()
      .required("Mật khẩu là bắt buộc")
      .min(8, "Mật khẩu phải chứa ít nhất 8 ký tự")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
        "Mật khẩu phải chứa ít nhất 1 chữ thường, 1 chữ hoa, 1 số và 1 ký tự đặc biệt"
      ),
  
    confirmPassword: Yup.string()
      .required("Xác nhận mật khẩu là bắt buộc")
      .oneOf([Yup.ref("password")], "Mật khẩu không khớp"),
  
    phone: Yup.string()
      .required("Số điện thoại là bắt buộc")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải là 10 chữ số"),
  
    address: Yup.string().required("Địa chỉ là bắt buộc"),
  });