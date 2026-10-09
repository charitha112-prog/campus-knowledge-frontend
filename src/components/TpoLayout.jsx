import { useState } from "react";
import { Outlet } from "react-router-dom";
import TpoSidebar from "./TpoSidebar";
import Topbar from "./Topbar";

export default function TpoLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app-shell">
      <TpoSidebar open={open} onClose={() => setOpen(false)} />
      <div className="main-shell">
        <Topbar onMenu={() => setOpen(true)} />
        <main className="page-content"><Outlet /></main>
      </div>
    </div>
  );
}