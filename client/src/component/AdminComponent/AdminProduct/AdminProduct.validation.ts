import * as Yup from "yup";

export const validationSchemaProduct = Yup.object().shape({
  name: Yup.string().required("Vui lòng nhập tên của đồng hồ !"),
  type: Yup.string().required("Vui lòng nhập loại dây của đồng hồ !"),
  quantity: Yup.string().required("Vui lòng nhập số lượng đồng hồ !"),
  price: Yup.string().required("Vui lòng nhập giá bán của đồng hồ !"),
  category: Yup.string().required("Vui lòng nhập danh mục của đồng hồ!"),
  description: Yup.string().required("Vui lòng nhập mô tả của đồng hồ !"),
  caliber: Yup.string().required("Vui lòng nhập bộ máy của đồng hồ !"),
  supplier: Yup.string().required("Vui lòng nhập nhà cung cấp của đồng hồ !"),
  brand: Yup.string().required("Vui lòng nhập thương hiệu của đồng hồ !"),
  waterResistant: Yup.string().required(
    "Vui lòng nhập độ Chịu nước của đồng hồ !"
  ),
  size: Yup.string().required("Vui lòng nhập kích cỡ của đồng hồ !"),
  glass: Yup.string().required("Vui lòng nhập mặt kính của đồng hồ !"),
  image: Yup.array().required("Vui lòng thêm ảnh của đồng hồ !"),
});


