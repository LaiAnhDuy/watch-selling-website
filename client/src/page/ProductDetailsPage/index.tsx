import { useState } from "react";
import { fakeProductComment, images, informations } from "./config";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Rating } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Comment from "../../component/Comment";

const ProductDetails = () => {
  const [urlImage, setUrlImage] = useState(images[0]);
  const [count, setCount] = useState(1);
  return (
    <div className="max-w-[80vw] mx-auto pb-10">
      <div className="grid grid-cols-7 gap-x-5 mt-10">
        <div className="col-span-3">
          <img src={urlImage} className="w-full" />
          <div className="flex gap-x-2 mt-5">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setUrlImage(image)}
                className={`${
                  image === urlImage ? "border !border-black" : ""
                } p-1 border border-stone-300 cursor-pointer`}
              >
                <img src={image} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 border-x px-4">
          <p className="font-bold">
            <span className="text-blue-500 bg-blue-50 rounded-full px-1 pb-1 mr-5">
              <CheckCircleIcon />
              <span className="ml-2">Chính hãng</span>
            </span>
            <span>Thương hiệu: Ogival</span>
          </p>
          <p className="font-bold text-2xl mt-3">{informations.name}</p>
          <div className="flex items-center">
            <p className="mr-2 font-medium text-xl">3.4</p>
            <Rating
              name="read-only"
              value={3.4}
              size="large"
              precision={0.1}
              readOnly
            />
          </div>
          <p className="mt-5 ml-5 text-3xl font-medium flex">
            {informations.price.toLocaleString("vi-VN")}{" "}
            <p className="underline text-2xl font-bold ml-2">đ</p>
          </p>
          <hr className="mt-5" />
          <p className="mt-5 font-bold text-xl">Mô tả</p>
          <p className="mt-5 font-medium">
            Đồng hồ <span>{informations.name}</span>
          </p>
          <hr className="my-5" />
          <p>Số lượng (còn 200)</p>
          <div className="flex mt-5 border w-max items-center">
            <button
              className="text-3xl px-10 border-r active:bg-stone-200"
              onClick={() => {
                if (count > 1) setCount((count) => count - 1);
              }}
            >
              -
            </button>
            <p className="px-10 text-xl">{count}</p>
            <button
              className="text-3xl px-10 border-l active:bg-stone-200"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          </div>
          <hr className="mt-5" />
        </div>
        <div className="col-span-2">
          <p className="bg-red-500 flex items-center text-white font-medium text-2xl p-2">
            <ListAltIcon className="mx-2" style={{ fontSize: 32 }} />
            Chi tiết sản phẩm
          </p>
          <p className="font-bold mt-5 text-xl">
            Loại đồng hồ:{" "}
            <span className="font-normal ml-2">{informations.type}</span>
          </p>
          <p className="font-bold mt-5 text-xl">
            Kiểu máy:{" "}
            <span className="font-normal ml-2">{informations.model}</span>
          </p>
          <p className="font-bold mt-5 text-xl">
            Kiểu dây:{" "}
            <span className="font-normal ml-2">{informations.wireType}</span>
          </p>
          <p className="font-bold mt-5 text-xl">
            Size: <span className="font-normal ml-2">{informations.size}</span>
          </p>
          <p className="font-bold mt-5 text-xl">
            Loại kính:{" "}
            <span className="font-normal ml-2">{informations.glassType}</span>
          </p>
          <p className="font-bold mt-5 text-xl">
            Chống nước:{" "}
            <span className="font-normal ml-2">
              {informations.waterResistant}
            </span>
          </p>
          <p className="font-bold mt-5 text-xl">
            Nhà phân phối:{" "}
            <span className="font-normal ml-2">{informations.distributor}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-x-5 mt-5">
        <div className="col-span-3"></div>
        <div className="col-span-4">
          <button className="bg-red-500 text-white text-xl px-10 py-2 active:bg-red-400">
            Mua ngay
          </button>
        </div>
      </div>
      <hr className="my-10"/>
      <p className="font-bold text-4xl">Bình luận</p>
      <div className="grid grid-cols-2 gap-5 mt-10">
        {fakeProductComment.map((productReview, index) => (
          <Comment {...productReview} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
