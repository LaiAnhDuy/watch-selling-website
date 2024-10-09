import BookmarkIcon from "@mui/icons-material/Bookmark";

interface ProductProps {
  image: string;
  name: string;
  description: string;
  originalPrice: number;
  discount: number;
  price: number;
}

export default function Product({
  image,
  name,
  description,
  originalPrice,
  discount,
  price,
}: ProductProps) {
  return (
    <div>
      <div className="relative">
        <BookmarkIcon
          className="text-red-600 absolute z-10"
          style={{ fontSize: 50 }}
        />
        <p className="absolute text-white top-3 left-3 text-[10px] z-20">
          -{discount}%
        </p>
        <div className="overflow-hidden col-span-2">
          <img src={image} className="cursor-pointer hover:scale-110" />
        </div>
        <p className="bg-orange-500 p-1 text-[10px] text-white absolute left-2 bottom-1">
          Trả góp 0%
        </p>
      </div>
      <div className="mt-2 text-center">
        <p className="cursor-pointer hover:text-red-500">{name}</p>
        <p className="opacity-60">{description}</p>
        <p className="line-through opacity-60">
          {originalPrice.toLocaleString("vi-VN")} đ
        </p>
        <p className="text-xl text-red-500">
          {price.toLocaleString("vi-VN")} đ
        </p>
      </div>
    </div>
  );
}
