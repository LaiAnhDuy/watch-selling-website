import { Input, Table } from "antd";
import "../index.css";
import { useEffect, useState } from "react";
import type { TableColumnsType } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import apiCaller from "../../../api/apiCaller";
import { RRError } from "../../../types/Api";
import { userApi } from "../../../api/UserApi";

const AdminUser = () => {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const errorHandler = (error: RRError) => {
    console.log("Fail: ", error);
  };
  const handleGetAllUser = async () => {
    const response = await apiCaller({
      request: userApi.getAllUser(),
      errorHandler,
    });
    if (response) {
      console.log(response.data);
      setData(response.data);
    }
  };

  useEffect(() => {
      handleGetAllUser();
    
  }, []);

  const userColumns: TableColumnsType = [
    {
      title: "Tên",
      dataIndex: "fullName",
      key: "name",
      width: "200px",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "250px",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      width: "400px",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: "100px",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: "120px",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "",
      render: (_, record) => (
        <div className="flex gap-x-5">
          <EditOutlined
            className="text-xl text-blue-600"
            // onClick={() => handleEdit(record)}
          />
          <DeleteOutlined
            className="text-xl text-red-600"
            // onClick={() => handleDelete(record)}
          />
        </div>
      ),
    },
  ];

  // const handleEdit = (record) => {
  //   console.log("Editing user:", record);
  // };

  // const handleDelete = (record) => {
  //   console.log("Deleting user:", record);
  // };
  // if(data) {

  //   const filteredData = data ? data.filter(
  //     (user) =>
  //       user.name.toLowerCase().includes(searchText.toLowerCase()) ||
  //       user.email.toLowerCase().includes(searchText.toLowerCase()) ||
  //       user.address.toLowerCase().includes(searchText.toLowerCase()) ||
  //       user.role.toLowerCase().includes(searchText.toLowerCase()) ||
  //       user.phone.includes(searchText)
  //   ) : null;
  // }
  return (
    <div>
      <p className="text-3xl mb-5">Quản lý người dùng</p>
      <div className="flex justify-between mb-5 mt-10">
        <button className="border border-black px-5 py-1 rounded-lg bg-white hover:bg-stone-100">
          Export Excel
        </button>
        {/* <button className="border border-black px-5 py-1 rounded-lg bg-white hover:bg-stone-100">
          Thêm người dùng
        </button> */}
      </div>
      <div className="flex gap-x-5 text-lg">
        <p>Tìm kiếm người dùng: </p>
        <Input
          placeholder="Nhập tên, email, địa chỉ, số điện thoại,..."
          value={searchText}
          onChange={handleSearch}
          style={{ marginBottom: "20px", width: "300px" }}
        />
      </div>
      <Table
        columns={userColumns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
};

export default AdminUser;
