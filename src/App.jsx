import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { navItems } from "./data/properties";
import DashboardPage from "./pages/DashboardPage";
import PropertiesPage from "./pages/PropertiesPage";
import StatsPage from "./pages/StatsPage";
import CommentsPage from "./pages/CommentsPage";
import ProfitsPage from "./pages/ProfitsPage";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f7fb] text-[#1b2430]">
      <div className="grid min-h-screen grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar navItems={navItems} activePage={activePage} onNavigate={setActivePage} />

        <main className="min-w-0">
          <Topbar />
          {activePage === "properties" ? (
            <PropertiesPage />
          ) : activePage === "stats" ? (
            <StatsPage />
          ) : activePage === "comments" ? (
            <CommentsPage />
          ) : activePage === "profits" ? (
            <ProfitsPage />
          ) : (
            <DashboardPage />
          )}
        </main>
      </div>
    </div>
  );
}
