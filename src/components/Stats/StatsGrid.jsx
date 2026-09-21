import "./StatsGrid.css";
import useI18n from "../../hooks/useI18n";

export default function StatsGrid() {
  const t = useI18n();
  return (
    <section className="stats-grid" aria-label="Key Stats">
      <div className="stat">
        <div className="label">{t("totalFps")}</div>
        <div className="value" id="totalFPS">2,847</div>
      </div>
      <div className="stat">
        <div className="label">{t("activeUsers")}</div>
        <div className="value" id="activeUsers">1,234</div>
      </div>
      <div className="stat">
        <div className="label">{t("serviceRegions")}</div>
        <div className="value" id="activeRegions">13/13</div>
      </div>
      <div className="stat">
        <div className="label">{t("pendingActions")}</div>
        <div className="value" id="pendingActions">8</div>
      </div>
    </section>
  );
}
