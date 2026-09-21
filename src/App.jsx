import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import AppBar from "./components/AppBar/AppBar";
import StatsGrid from "./components/Stats/StatsGrid";

import MasterPage from "./pages/MasterPage";
import UsersPage from "./pages/UsersPage";
import ContentPage from "./pages/ContentPage";
import ServiceControlPage from "./pages/ServiceControlPage";
import AuditLogsPage from "./pages/AuditLogsPage";

export default function App() {
  const [activeTab, setActiveTab] = useState("master");

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <AppBar />

      <main>
        <StatsGrid />
        {activeTab === "master" && <MasterPage />}
        {activeTab === "users" && <UsersPage />}
        {activeTab === "content" && <ContentPage />}
        {activeTab === "service" && <ServiceControlPage />}
        {activeTab === "audit" && <AuditLogsPage />}
      </main>
    </div>
  );
}
