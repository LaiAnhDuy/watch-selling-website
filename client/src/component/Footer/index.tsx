import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CommentIcon from "@mui/icons-material/Comment";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { items } from "./config";
import { IMAGE_PATH } from "../../constants/images";
export default function Footer() {
  return (
    <div className="bg-black">
      <div className="max-w-[80vw] mx-auto py-10 grid grid-cols-4 gap-x-20">
        <div className="">
          <div className="flex gap-x-5 bg-red-600 p-4 rounded-lg text-white">
            <PhoneInTalkIcon style={{ fontSize: 50 }} />
            <div>
              <p>0384187872</p>
              <p>TƯ VẤN BÁN HÀNG</p>
            </div>
          </div>
          <div className="flex gap-x-5 bg-red-600 p-4 rounded-lg text-white mt-4">
            <CommentIcon style={{ fontSize: 50 }} />
            <div>
              <p>0788065529</p>
              <p>HỖ TRỢ DỊCH VỤ</p>
            </div>
          </div>
          <div className="flex gap-x-5 bg-red-600 p-4 rounded-lg text-white mt-4">
            <SettingsOutlinedIcon style={{ fontSize: 50 }} />
            <div>
              <p>0333422285</p>
              <p>TƯ VẤN KỸ THUẬT</p>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-3">
            {items.map((item, index) => (
              <div key={index} className="text-white">
                <p className="font-bold text-[16px]">{item.title}</p>
                {item.content.map((content) => (
                  <p
                    key={content}
                    className="mt-4 opacity-70 hover:opacity-100 hover:text-red-500 cursor-pointer"
                  >
                    {content}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-5">
            <div className="text-white flex items-center">
              <p className="opacity-70 hover:opacity-100 hover:text-red-500 cursor-pointer">
                Đồng hồ FC
              </p>
              <div className="w-[1px] h-4 opacity-40 mx-2 bg-white"></div>
              <p className="opacity-70 hover:opacity-100 hover:text-red-500 cursor-pointer">
                Đồng hồ Certina
              </p>
              <div className="w-[1px] h-4 opacity-40 mx-2 bg-white"></div>
              <p className="opacity-70 hover:opacity-100 hover:text-red-500 cursor-pointer">
                Ciga Design
              </p>
              <div className="w-[1px] h-4 opacity-40 mx-2 bg-white"></div>
              <p className="opacity-70 hover:opacity-100 hover:text-red-500 cursor-pointer">
                Đồng hồ cơ
              </p>
              <div className="w-[1px] h-4 opacity-40 mx-2 bg-white"></div>
              <p className="opacity-70 hover:opacity-100 hover:text-red-500 cursor-pointer">
                Dây da
              </p>
            </div>
            <div className="flex items-center gap-x-5">
              <img src={IMAGE_PATH.FACEBOOK} className="w-14 h-14" />
              <div className="bg-white rounded-full w-14 h-14">
                <img src={IMAGE_PATH.YOUTUBE} />
              </div>
              <div className="bg-white rounded-full w-14 h-14">
                <img src={IMAGE_PATH.GMAIL} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
