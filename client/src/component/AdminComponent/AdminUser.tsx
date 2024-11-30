import { Input, Table } from "antd";
import "./index.css";
import { userDataType } from "./type";
import { useState } from "react";
import type {TableColumnsType } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


const data: userDataType[] = [
  {
    key: "1",
    name: "Lại Anh Duy",
    email: "duy1@gmail.com",
    address: "79 Mễ Trì Thượng, Nam Từ Liêm, Hà Nội",
    role: "user",
    phone: "0123456781",
  },
  {
    key: "2",
    name: "Nguyễn Văn Bình",
    email: "binh2@gmail.com",
    address: "25 Láng Hạ, Đống Đa, Hà Nội",
    role: "admin",
    phone: "0123456782",
  },
  {
    key: "3",
    name: "Trần Thị Cúc",
    email: "cuc3@gmail.com",
    address: "32 Hoàng Hoa Thám, Ba Đình, Hà Nội",
    role: "user",
    phone: "0123456783",
  },
  {
    key: "4",
    name: "Phạm Văn Dương",
    email: "duong4@gmail.com",
    address: "15 Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội",
    role: "user",
    phone: "0123456784",
  },
  {
    key: "5",
    name: "Lê Thị Lan",
    email: "lan5@gmail.com",
    address: "99 Kim Mã, Ba Đình, Hà Nội",
    role: "user",
    phone: "0123456785",
  },
  {
    key: "6",
    name: "Hoàng Văn Hưng",
    email: "hung6@gmail.com",
    address: "42 Trần Duy Hưng, Cầu Giấy, Hà Nội",
    role: "admin",
    phone: "0123456786",
  },
  {
    key: "7",
    name: "Phạm Thị Hồng",
    email: "hong7@gmail.com",
    address: "54 Tạ Hiện, Hoàn Kiếm, Hà Nội",
    role: "user",
    phone: "0123456787",
  },
  {
    key: "8",
    name: "Nguyễn Thị Vân",
    email: "van8@gmail.com",
    address: "88 Trần Khát Chân, Hai Bà Trưng, Hà Nội",
    role: "admin",
    phone: "0123456788",
  },
  {
    key: "9",
    name: "Đỗ Quang Tuấn",
    email: "tuan9@gmail.com",
    address: "10 Lê Đức Thọ, Nam Từ Liêm, Hà Nội",
    role: "user",
    phone: "0123456789",
  },
  {
    key: "10",
    name: "Nguyễn Văn Phúc",
    email: "phuc10@gmail.com",
    address: "20 Xuân Thủy, Cầu Giấy, Hà Nội",
    role: "user",
    phone: "0123456790",
  },
  {
    key: "11",
    name: "Lê Thị Phương",
    email: "phuong11@gmail.com",
    address: "17 Trần Phú, Hà Đông, Hà Nội",
    role: "admin",
    phone: "0123456791",
  },
  {
    key: "12",
    name: "Phạm Văn Sơn",
    email: "son12@gmail.com",
    address: "5 Định Công, Hoàng Mai, Hà Nội",
    role: "user",
    phone: "0123456792",
  },
  {
    key: "13",
    name: "Đinh Thị Hoa",
    email: "hoa13@gmail.com",
    address: "12 Đại La, Hai Bà Trưng, Hà Nội",
    role: "user",
    phone: "0123456793",
  },
  {
    key: "14",
    name: "Ngô Văn Tú",
    email: "tu14@gmail.com",
    address: "34 Trương Định, Hai Bà Trưng, Hà Nội",
    role: "user",
    phone: "0123456794",
  },
  {
    key: "15",
    name: "Phạm Thị Ngọc",
    email: "ngoc15@gmail.com",
    address: "68 Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội",
    role: "admin",
    phone: "0123456795",
  },
  {
    key: "16",
    name: "Trần Văn Quyết",
    email: "quyet16@gmail.com",
    address: "12 Nguyễn Chí Thanh, Ba Đình, Hà Nội",
    role: "user",
    phone: "0123456796",
  },
  {
    key: "17",
    name: "Nguyễn Thị Hà",
    email: "ha17@gmail.com",
    address: "45 Tây Hồ, Tây Hồ, Hà Nội",
    role: "user",
    phone: "0123456797",
  },
  {
    key: "18",
    name: "Vũ Minh Hải",
    email: "hai18@gmail.com",
    address: "39 Láng Thượng, Đống Đa, Hà Nội",
    role: "user",
    phone: "0123456798",
  },
  {
    key: "19",
    name: "Phạm Thị Hòa",
    email: "hoa19@gmail.com",
    address: "29 Hàng Mã, Hoàn Kiếm, Hà Nội",
    role: "admin",
    phone: "0123456799",
  },
  {
    key: "20",
    name: "Nguyễn Văn Quang",
    email: "quang20@gmail.com",
    address: "60 Trung Kính, Cầu Giấy, Hà Nội",
    role: "user",
    phone: "0123456700",
  },
];

const userColumns: TableColumnsType<userDataType> = [
  {
    title: "Tên",
    dataIndex: "name",
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
          onClick={() => handleEdit(record)}
        />
        <DeleteOutlined
        className="text-xl text-red-600"
          onClick={() => handleDelete(record)}
        />
      </div>
    ),
  },
];

const handleEdit = (record: userDataType) => {
  console.log("Editing user:", record);
};

const handleDelete = (record: userDataType) => {
  console.log("Deleting user:", record);
};

const AdminUser = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const filteredData = data.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(searchText.toLowerCase()) ||
      user.address.toLowerCase().includes(searchText.toLowerCase()) ||
      user.role.toLowerCase().includes(searchText.toLowerCase()) ||
      user.phone.includes(searchText)
  );
  return (
    <div>
      <p className="text-3xl mb-5">Quản lý người dùng</p>
      <div className="flex justify-between mb-5 mt-10">
        <button className="border border-black px-5 py-1 rounded-lg bg-white hover:bg-stone-100">
          Export Excel
        </button>
        <button className="border border-black px-5 py-1 rounded-lg bg-white hover:bg-stone-100">
          Thêm người dùng
        </button>
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
      <Table<userDataType>
        columns={userColumns}
        dataSource={filteredData}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
};

export default AdminUser;
