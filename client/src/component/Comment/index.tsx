import { Rating } from "@mui/material";
import { IMAGE_PATH } from "../../constants/images";

export interface CommentProps {
  stars: number;
  name: string;
  content: string;
  date: string;
}

export default function Comment({ stars, name, content, date }: CommentProps) {
  return (
    <div className="p-10 border rounded-[20px]">
      <Rating
        value={stars}
        precision={0.1}
        readOnly
      />
      <div className="flex gap-x-2 font-bold text-xl my-2">
        {name}
        <img src={IMAGE_PATH.TICK} />
      </div>
      <p>{content}</p>
      <p className="mt-5">Posted on {date}</p>
    </div>
  );
}
