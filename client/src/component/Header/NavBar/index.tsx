import { useLocation, useNavigate } from "react-router-dom";
import { navbar } from "./config";
import HomeIcon from "@mui/icons-material/Home";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-slate-800">
      <div className="max-w-[80vw] mx-auto flex justify-between text-white pt-3">
        {navbar.map((nav, index) => (
          <div key={index} className="hover:text-red-500">
            <button
              onClick={() => {
                navigate(nav.route);
              }}
            >
              {index === 0 ? <HomeIcon /> : <div>{nav.name}</div>}
            </button>
            <hr
              className={`bg-red-600 w-full h-[3px] border-none mt-3 ${
                location.pathname === nav.route ? "" : "hidden"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
