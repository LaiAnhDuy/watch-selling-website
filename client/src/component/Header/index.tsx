import { IMAGE_PATH } from "../../constants/images";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "../../redux/slices/authSlice";

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-gray-500",
];

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const setColor = (fullName: string | undefined) => {
    if (!fullName) return colors[0];
    return colors[fullName.length % (colors.length + 1)];
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="bg-black py-5">
        <div className="max-w-[80vw] mx-auto grid grid-cols-12 gap-x-5 items-center">
          <button className="col-span-2" onClick={() => navigate("/")}>
            <img src={IMAGE_PATH.DWATCH} className="w-full" />
          </button>
          <div></div>
          <div className={` ${isAuthenticated ? "col-span-5" : "col-span-4"}`}>
            <SearchBar />
          </div>
          <button
            className="col-span-2 text-white text-xl text-end"
            onClick={() => navigate("/order")}
          >
            <ShoppingCartOutlinedIcon /> Giỏ hàng
          </button>
          {isAuthenticated ? (
            <div className="col-span-2 flex justify-end">
              <button
                className=" text-white flex gap-x-3 justify-end items-end text-xl"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                <div
                  className={`${setColor(
                    user?.fullName
                  )} w-8 h-8 rounded-full flex items-center justify-center`}
                >
                  {user?.fullName.split(" ").pop()?.charAt(0)}
                </div>
                <p className="text-3xl">{user?.fullName.split(" ").pop()}</p>
              </button>
            </div>
          ) : (
            <button
              className="col-span-3 text-white flex gap-x-5 justify-center items-center text-xl"
              onClick={() => {
                navigate("/login");
              }}
            >
              <AccountCircleOutlinedIcon style={{ fontSize: 50 }} />
              <div>
                <p>Đăng nhập/Đăng ký</p>
                <p>
                  Tài khoản <ArrowDropDownOutlinedIcon />
                </p>
              </div>
            </button>
          )}
        </div>
      </div>
      <NavBar />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="mt-10"
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
