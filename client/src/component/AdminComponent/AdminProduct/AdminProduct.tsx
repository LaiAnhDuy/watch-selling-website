/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Radio, Select, Table } from "antd";
import { userDataType } from "../type";
import ModalComponent from "../../ModalComponent/ModalComponent";
import { useState } from "react";
import useYupValidation from "../../../hooks/useYupValidation";
import {
  validationSchemaProduct,
} from "./AdminProduct.validation";
import { productApi } from "../../../api/ProductApi";
import apiCaller from "../../../api/apiCaller";
import { RRError } from "../../../types/Api";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import DrawerComponent from "../../DrawerComponent/DrawerComponent";

const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const ProductRules = useYupValidation(validationSchemaProduct);
  const accessToken = useSelector(
    (state: RootState) => state.auth.user?.access_token
  );
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const errorHandler = (error: RRError) => {
    console.log("Fail: ", error);
  };

  const handleAddProduct = async (values: any) => {
    const response = await apiCaller({
      request: productApi.createProduct(values, accessToken),
      errorHandler,
    });
    if (response) {
      console.log(response);
    }
  };

  return (
    <div>
      <p className="text-3xl mb-5">Quản lý sản phẩm</p>
      <div className="flex justify-between mb-5 mt-10">
        <button className="border border-black px-5 py-1 rounded-lg bg-white hover:bg-stone-100">
          Export Excel
        </button>
        <button
          className="border border-black px-5 py-1 rounded-lg bg-white hover:bg-stone-100"
          onClick={() => setIsModalOpen(true)}
        >
          Thêm sản phẩm
        </button>
      </div>
      <div className="flex gap-x-5 text-lg">
        <p>Tìm kiếm sản phẩm: </p>
        <Input
          placeholder="Nhập tên, email, địa chỉ, số điện thoại,..."
          // value={searchText}
          // onChange={handleSearch}
          style={{ marginBottom: "20px", width: "300px" }}
        />
      </div>
      <Table<userDataType>
        // columns={userColumns}
        // dataSource={filteredData}
        pagination={{ pageSize: 7 }}
      />
      {/*Modal Thêm sản phẩm */}
      <ModalComponent
        forceRender
        title="Tạo sản phẩm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="!w-[50vw]"
      >
        <Form
          name="basic"
          onFinish={(value) => handleAddProduct(value)}
          autoComplete="on"
          form={form}
          className="m-10"
          layout="vertical"
        >
          <div className="grid grid-cols-2 gap-x-10">
            {/* form-1 */}
            <div>
              <Form.Item
                label="Tên sản phẩm"
                name="name"
                rules={[ProductRules]}
              >
                <Input placeholder="Product Name" />
              </Form.Item>

              <Form.Item label="Loại dây" name="type" rules={[ProductRules]}>
                <Select
                  // name="type"
                  // value={stateProduct.type}
                  // onChange={handleChangeSelect2}
                  // options={renderOptions(types?.types)}
                  placeholder="Select type"
                />
              </Form.Item>
              {/* {stateProduct.type === "add_type" && (
                <Form.Item
                  label="Loại dây mới"
                  name="newType"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập loại dây mới của đồng hồ !",
                    },
                  ]}
                >
                  <Input
                    value={stateProduct.newType}
                    onChange={handleOnchange}
                    name="newType"
                    // placeholder={"New type"}
                  />
                </Form.Item>
              )} */}
              <Form.Item
                label="Số lượng"
                name="quantity"
                rules={[ProductRules]}
              >
                <Input
                  placeholder="Quantity"
                  // value={stateProduct.quantity}
                  // onChange={handleOnchange}
                />
              </Form.Item>
              <Form.Item label="Giá bán" name="price" rules={[ProductRules]}>
                <Input
                  // value={stateProduct.price}
                  // onChange={handleOnchange}
                  placeholder="Price"
                  name="price"
                />
              </Form.Item>

              <Form.Item
                label="Danh mục"
                name="category"
                rules={[ProductRules]}
              >
                <Radio.Group
                  name="category"
                  // onChange={handleOnchange}
                >
                  <Radio value={"Nam"}> Đồng hồ nam</Radio>
                  <Radio value={"Nữ"}>Đồng hồ nữ</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Mô tả"
                name="description"
                rules={[ProductRules]}
              >
                <Input
                  // value={stateProduct.description}
                  // onChange={handleOnchange}
                  placeholder="Description"
                  name="description"
                />
              </Form.Item>
            </div>
            {/* form-2 */}
            <div className="form1-2">
              <Form.Item
                label="Bộ máy"
                name="caliber"
                rules={[ProductRules]}
              >
                <Select
                  // name="caliber"
                  // value={stateProduct.caliber}
                  // onChange={handleChangeSelectCaliber}
                  // options={renderOptions3(calibers?.calibers)}
                  placeholder="Caliber"
                />
              </Form.Item>
              {/* {stateProduct.caliber === "add_caliber" && (
                <Form.Item
                  label="Bộ máy mới"
                  name="newCaliber"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập bộ máy mới của đồng hồ !",
                    },
                  ]}
                >
                  <Input
                    value={stateProduct.newCaliber}
                    onChange={handleOnchange}
                    name="newCaliber"
                  />
                </Form.Item>
              )} */}
              <Form.Item
                label="Nhà cung cấp"
                name="supplier"
                rules={[ProductRules]}
              >
                <Select
                  // name="supplier"
                  // value={stateProduct.supplier}
                  // onChange={handleChangeSelectSupplier}
                  // options={supplierSelect}
                  placeholder="Supplier"
                />
              </Form.Item>
              <Form.Item
                label="Thương hiệu"
                name="brand"
                rules={[ProductRules]}
              >
                <Select
                  // name="brand"
                  // value={stateProduct.brand}
                  // onChange={handleChangeSelect1}
                  // options={brandSelect}
                  placeholder="Brand"
                />
              </Form.Item>
              <Form.Item
                label="Chịu nước"
                name="waterResistant"
                rules={[ProductRules]}
              >
                <Select
                  // name="waterResistant"
                  // value={stateProduct.waterResistant}
                  // onChange={handleChangeSelectWaterResistant}
                  // options={waterResistant}
                  placeholder="Water Resistant"
                />
              </Form.Item>
              <Form.Item label="Kích cỡ" name="size" rules={[ProductRules]}>
                <Select
                  // name="size"
                  // value={stateProduct.size}
                  // onChange={handleChangeSelectSize}
                  // options={size}
                  placeholder="Size"
                />
              </Form.Item>
              <Form.Item
                label="Mặt kính"
                name="glass"
                rules={[ProductRules]}
              >
                <Select
                  // name="glass"
                  // value={stateProduct.glass}
                  // onChange={handleChangeSelectGlass}
                  // options={glass}
                  placeholder="Glass"
                />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            label="Ảnh"
            name="image"
            rules={[
              { required: true, message: "Vui lòng thêm ảnh của đồng hồ !" },
            ]}
          >
            {/* <WrapperUploadFile
              beforeUpload={() => false}
              listType="picture-card"
              onRemove={onRemove}
              onChange={handleFileChange}
              maxCount={6}
              fileList={previewImage}
            >
              {stateProduct.images?.length >= 6 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </WrapperUploadFile> */}
          </Form.Item>

          <Form.Item className="form1-submit">
            <Button htmlType="submit">Thêm sản phẩm</Button>
          </Form.Item>
        </Form>
      </ModalComponent>

      {/* Modal Chỉnh sửa thông tin sản phẩm */}
      <DrawerComponent
        title="Chỉnh sửa thông tin sản phẩm"
        isOpen={false}
        // onClose={() => setIsOpenDrawer(false)}
      >
        <Form
          name="basic"
          labelCol={{
            span: 5,
            style: { paddingRight: "20px", textAlign: "left" },
          }}
          wrapperCol={{ span: 16 }}
          // onFinish={onUpdateProduct}
          autoComplete="on"
          // form={form1}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[ProductRules]}
          >
            <Input
              // value={stateProductDetails["name"]}
              // onChange={handleOnchangeDetails}
              name="name"
            />
          </Form.Item>

          <Form.Item label="Loại dây" name="type" rules={[ProductRules]}>
            <Select
            // name="type"
            // value={stateProductDetails.type}
            // onChange={handleChangeSelect}
            // options={renderOptions(types?.types)}
            />
          </Form.Item>
          {/* {stateProductDetails.type === "add_type" && (
            <Form.Item
              label="Loại dây mới"
              name="newType"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập loại dây mới của đồng hồ !",
                },
              ]}
            >
              <Input
                value={stateProductDetails.newType}
                onChange={handleOnchangeDetails}
                name="newType"
              />
            </Form.Item>
          )} */}
          <Form.Item
            label="Số lượng"
            name="quantity"
            rules={[ProductRules]}
          >
            <Input
              // value={stateProductDetails.quantity}
              // onChange={handleOnchangeDetails}
              name="quantity"
            />
          </Form.Item>
          <Form.Item label="Giá bán" name="price" rules={[ProductRules]}>
            <Input
              // value={stateProductDetails.price}
              // onChange={handleOnchangeDetails}
              name="price"
            />
          </Form.Item>

          <Form.Item label="Bộ máy" name="caliber" rules={[ProductRules]}>
            <Select
            // name="caliber"
            // value={stateProductDetails.caliber}
            // onChange={handleChangeSelectCaliber1}
            // options={renderOptions3(calibers?.calibers)}
            />
          </Form.Item>
          {/* {stateProductDetails.caliber === "add_caliber" && (
            <Form.Item
              label="Bộ máy mới"
              name="newCaliber"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập bộ máy mới của đồng hồ !",
                },
              ]}
            >
              <Input
                value={stateProductDetails.newCaliber}
                onChange={handleOnchangeDetails}
                name="newCaliber"
              />
            </Form.Item>
          )} */}

          <Form.Item
            label="Chịu nước"
            name="waterResistant"
            rules={[ProductRules]}
          >
            <Select
              // name="waterResistant"
              // value={stateProductDetails.waterResistant}
              // onChange={handleChangeSelectWaterResistantDetails}
              // options={waterResistant}
              placeholder="Water Resistant"
            />
          </Form.Item>
          <Form.Item label="Kích cỡ" name="size" rules={[ProductRules]}>
            <Select
              // name="size"
              // value={stateProductDetails.size}
              // onChange={handleChangeSelectSizeDetails}
              // options={size}
              placeholder="Size"
            />
          </Form.Item>
          <Form.Item label="Mặt kính" name="glass" rules={[ProductRules]}>
            <Select
              // name="glass"
              // value={stateProductDetails.glass}
              // onChange={handleChangeSelectGlassDetails}
              // options={glass}
              placeholder="Glass"
            />
          </Form.Item>
          <Form.Item
            label="Ảnh"
            name="image"
            // rules={[
            //   {
            //     required: true,
            //     message: "Vui lòng thêm ảnh của đồng hồ !",
            //     validator: (_, value) => {
            //       if (stateProductDetails?.images.length > 0) {
            //         return Promise.resolve();
            //       }
            //       return Promise.reject("Please input your count image!");
            //     },
            //   },
            // ]}
          >
            {/* <WrapperUploadFile
              beforeUpload={() => false}
              listType="picture-card"
              onRemove={onRemoveDetails}
              onChange={handleOnchangeAvatarDetails}
              maxCount={6}
              fileList={convertImages}
            >
              {stateProductDetails.images?.length >= 6 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </WrapperUploadFile> */}
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
            <Button htmlType="submit">Sửa sản phẩm</Button>
          </Form.Item>
        </Form>
      </DrawerComponent>

      {/* Modal xóa sản phẩm */}
      <ModalComponent
        title="Xóa sản phẩm"
        // open={isModalOpenDelete}
        // onCancel={handleCancelDelete}
        // onOk={handleDeleteProduct}
        footer={null}
      >
        <div>Bạn có chắc xóa sản phẩm này không?</div>
        <div className="flex justify-end">
          <Button
          // onClick={handleDeleteProduct}
          >
            Xóa
          </Button>
        </div>
      </ModalComponent>
    </div>
  );
};

export default AdminProduct;
