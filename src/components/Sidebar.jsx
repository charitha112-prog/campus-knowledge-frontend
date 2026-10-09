import { NavLink, useNavigate } from "react-router-dom";
import { BarChart3, BookOpen, BriefcaseBusiness, FileText, Home, Users, Trophy, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const links = [
  ["/dashboard", Home, "Dashboard"],
  ["/interviews", BriefcaseBusiness, "Interview Experiences"],
  ["/hackathons", Trophy, "Hackathon Experiences"],
  ["/clubs", Users, "Club Reviews"],
  ["/resources", FileText, "Academic Resources"],
  ["/placements", BarChart3, "Placement Information"]
];

export default function Sidebar({ open, onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => { logout(); onClose?.(); navigate("/", { replace: true }); };
  return (
    <>
      <div className={`sidebar-overlay ${open ? "show" : ""}`} onClick={onClose}/>
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-brand-spacer" aria-hidden="true" />
        <nav>
          {links.map(([to, Icon, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={onClose}>
              <Icon size={20} strokeWidth={1.7}/><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button type="button" className="nav-item logout-item" onClick={handleLogout}><LogOut size={20} strokeWidth={1.7}/><span>Logout</span></button>
        </div>
      </aside>
    </>
  );
}
