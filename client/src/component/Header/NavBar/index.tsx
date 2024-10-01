import { useNavigate } from "react-router-dom";
import { navbar } from "./config";
import HomeIcon from "@mui/icons-material/Home";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-800">
      <div className="max-w-[85vw] mx-auto flex justify-between text-white py-5 text-xl">
        {navbar.map((nav, index) => (
          <button key={index} onClick={() => navigate(nav.route)}>
            {index === 0 ? <HomeIcon /> : <div>{nav.name}</div>}
          </button>
        ))}
      </div>
    </div>
  );
}
