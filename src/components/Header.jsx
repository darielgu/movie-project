import Navigation from "./Navigation";
import "./Header.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
export default function Header() {
  return (
    <header className="header-container gradient">
      <h1 className="web-name">
        Salesflix <LiveTvIcon />
      </h1>
      <Navigation />
    </header>
  );
}
