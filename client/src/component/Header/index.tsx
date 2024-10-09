import { IMAGE_PATH } from "../../constants/images";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-black py-10">
        <div className="max-w-[80vw] mx-auto grid grid-cols-12 gap-x-5 items-center">
          <button className="col-span-2" onClick={() => navigate("/")}>
            <img src={IMAGE_PATH.DWATCH} className="w-full" />
          </button>
          <div className="col-span-5">
            <SearchBar />
          </div>
          <button className="col-span-3 text-white flex gap-x-3 justify-center text-xl">
            <AccountCircleOutlinedIcon style={{ fontSize: 50 }} />
            <div>
              <p>Đăng nhập/Đăng ký</p>
              <p>
                Tài khoản <ArrowDropDownOutlinedIcon />
              </p>
            </div>
          </button>
          <button className="col-span-2 text-white text-xl">
            <ShoppingCartOutlinedIcon /> Giỏ hàng
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
