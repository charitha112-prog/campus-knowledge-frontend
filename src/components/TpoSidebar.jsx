import { NavLink, useNavigate } from "react-router-dom";
import { BarChart3, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function TpoSidebar({ open, onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => { logout(); onClose?.(); navigate("/", { replace: true }); };
  return <>
    <div className={`sidebar-overlay ${open ? "show" : ""}`} onClick={onClose}/>
    <aside className={`sidebar tpo-sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-brand-spacer" aria-hidden="true" />
      <nav>
        <NavLink to="/tpo/placements" className={({isActive})=>isActive?"nav-item active":"nav-item"} onClick={onClose}>
          <BarChart3 size={20} strokeWidth={1.7}/><span>Placement Information</span>
        </NavLink>
      </nav>
      <div className="sidebar-bottom">
        <button type="button" className="nav-item logout-item" onClick={handleLogout}><LogOut size={20} strokeWidth={1.7}/><span>Logout</span></button>
      </div>
    </aside>
  </>;
}
