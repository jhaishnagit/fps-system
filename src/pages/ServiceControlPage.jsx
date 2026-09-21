import APMap from "../components/Map/APMap";

export default function ServiceControlPage() {
  return (
    <section className="card">
      <div className="card-header">
        <div className="card-title">
          <span className="material-symbols-rounded" style={{ color: "var(--primary)" }}>bolt</span>
          <span>Real-Time Service Control</span>
        </div>
        <div className="map-actions">
          <span className="legend">
            <span className="swatch swatch-active"></span> Active
            <span className="swatch swatch-paused" style={{marginLeft:10}}></span> Paused
          </span>
        </div>
      </div>
      <div className="card-body">
        <APMap />
      </div>
    </section>
  );
}
