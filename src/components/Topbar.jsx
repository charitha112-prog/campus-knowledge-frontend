import { Menu, Coins } from "lucide-react";
import Brand from "./Brand";
import { useAuth } from "../context/AuthContext";

const CAT_SRC = "/assets/graduation-cat.gif";

export default function Topbar({ onMenu, onProfile }) {
  const { session } = useAuth();
  const points = session?.user?.knowledgePoints ?? 0;
  return (
    <header className="topbar">
      <button className="menu-button" onClick={onMenu} aria-label="Open menu"><Menu size={25}/></button>
      <Brand titleLayout />
      <div className="topbar-spacer" />
      {session?.role === "student" && <div className="topbar-points" aria-label={`${points} credit points`}><Coins size={22} /><span>{points}</span><small>points</small></div>}
      <button className="avatar-button cat-avatar-button" onClick={onProfile} title="Open profile" aria-label="Open profile">
        <img src={CAT_SRC} alt="Open profile" />
      </button>
    </header>
  );
}
