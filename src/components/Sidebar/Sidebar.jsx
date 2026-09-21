import "./Sidebar.css";
import useI18n from "../../hooks/useI18n";

export default function Sidebar({ activeTab, setActiveTab }) {
  const t = useI18n();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="title">
          <span className="material-symbols-rounded" style={{ color: "var(--primary)" }}>
            dashboard_customize
          </span>
          <span>Admin Menu</span>
        </div>
        <button
          className="collapse-btn"
          title="Collapse"
          onClick={() => {
            const html = document.documentElement;
            const val = html.getAttribute("data-collapsed") === "true" ? "false" : "true";
            html.setAttribute("data-collapsed", val);
          }}
        >
          <span className="material-symbols-rounded">chevron_left</span>
        </button>
      </div>

      <nav className="nav">
        <button className={activeTab==="master"?"active":""} onClick={()=>setActiveTab("master")}>
          <span className="material-symbols-rounded"></span><span className="label">{t("tabMaster")}</span>
        </button>
        <button className={activeTab==="users"?"active":""} onClick={()=>setActiveTab("users")}>
          <span className="material-symbols-rounded"></span><span className="label">{t("tabUsers")}</span>
        </button>
        <button className={activeTab==="content"?"active":""} onClick={()=>setActiveTab("content")}>
          <span className="material-symbols-rounded"></span><span className="label">{t("tabContent")}</span>
        </button>
        <button className={activeTab==="service"?"active":""} onClick={()=>setActiveTab("service")}>
          <span className="material-symbols-rounded"></span><span className="label">{t("tabService")}</span>
        </button>
        <button className={activeTab==="audit"?"active":""} onClick={()=>setActiveTab("audit")}>
          <span className="material-symbols-rounded"></span><span className="label">{t("tabAudit")}</span>
        </button>
      </nav>
    </aside>
  );
}
