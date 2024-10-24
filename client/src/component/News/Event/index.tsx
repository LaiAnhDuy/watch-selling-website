import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
interface EventProps {
  image: string;
  title: string;
  date: string;
  content: string;
}

export default function Event({ image, title, date, content }: EventProps) {
  return (
    <div>
      <div className="overflow-hidden">
        <img
          src={image}
          className="max-h-[148px] w-full cursor-pointer hover:scale-110"
        />
      </div>
      <p className="mt-3 font-bold cursor-pointer hover:text-red-500">{title}</p>
      <div className="mt-2 mb-5">
        <CalendarMonthOutlinedIcon />
        {date}
      </div>
      <p>{content}</p>
    </div>
  );
}
