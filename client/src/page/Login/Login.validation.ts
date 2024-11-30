import * as Yup from "yup";

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Địa chỉ email không hợp lệ")
    .required("Email là bắt buộc"),

  password: Yup.string().required("Mật khẩu là bắt buộc"),
});