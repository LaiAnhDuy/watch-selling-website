import { Link } from "react-router-dom";
import Carousel from "../../component/Carousel";
import Product from "../../component/Product";
import { products, slider } from "./config";
import EastIcon from "@mui/icons-material/East";
import News from "../../component/News";
import Expertise from "../../component/Expertise";

const HomePage = () => {
  return (
    <div>
      <Carousel slides={slider} />
      <div className="max-w-[80vw] mx-auto mt-10">
        <div className="grid grid-cols-3 items-center">
          <hr className="w-full h-[2px] bg-stone-400" />
          <p className="text-center font-bold text-3xl text-stone-600">
            SẢN PHẨM NỔI BẬT
          </p>
          <hr className="w-full h-[2px] bg-stone-400" />
        </div>

        <div className="flex justify-center gap-x-10 mt-10">
          <button className="px-10 py-5 bg-stone-200 text-xl hover:bg-red-500 hover:text-white active:bg-red-400">
            ĐỒNG HỒ NAM
          </button>
          <button className="px-10 py-5 bg-stone-200 text-xl hover:bg-red-500 hover:text-white active:bg-red-400">
            ĐỒNG HỒ NỮ
          </button>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-x-10 gap-y-20">
          {products.slice(0, 8).map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Link to="/men" className=" underline text-xl hover:text-red-500">
            <EastIcon className="text-red-500 mr-5" style={{ fontSize: 30 }} />{" "}
            XEM TẤT CẢ ĐỒNG HỒ NAM
          </Link>
        </div>
      </div>
      <Expertise />
      <News />
    </div>
  );
};

export default HomePage;
