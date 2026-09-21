import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./APMap.css";
import { useToast } from "../../context/ToastContext";

const districtCoords = {
  "Srikakulam": [18.296, 83.897],
  "Vizianagaram": [18.106, 83.395],
  "Visakhapatnam": [17.686, 83.218],
  "East Godavari": [16.989, 82.247],
  "West Godavari": [16.705, 81.103],
  "Krishna": [16.187, 81.138],
  "Guntur": [16.306, 80.436],
  "Prakasam": [15.505, 80.049],
  "Nellore": [14.442, 79.986],
  "Chittoor": [13.217, 79.100],
  "Kadapa": [14.467, 78.824],
  "Kurnool": [15.828, 78.038],
  "Anantapur": [14.681, 77.600]
};

export default function APMap() {
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const { show } = useToast();

  const saved = JSON.parse(localStorage.getItem("ap_map_state") || "null");
  const [state, setState] = useState(
    saved || {
      "Srikakulam": true, "Vizianagaram": true, "Visakhapatnam": true,
      "East Godavari": true, "West Godavari": true, "Krishna": true, "Guntur": true,
      "Prakasam": false, "Nellore": true, "Chittoor": true, "Kadapa": true,
      "Kurnool": true, "Anantapur": false
    }
  );

  useEffect(() => {
    const map = L.map("apMap", {
      zoomControl: true,
      attributionControl: true
    });
    mapRef.current = map;

    // Base Layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap"
    }).addTo(map);

    // Fit Andhra Pradesh state
    const apBounds = L.latLngBounds([12.5, 76.5], [19.5, 85.0]);
    map.fitBounds(apBounds);

    // Draw markers
    drawMarkers(map, state);

    return () => map.remove();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    refreshMarkers(state);
    localStorage.setItem("ap_map_state", JSON.stringify(state));
  }, [state]);

  const markerStyle = (active) => ({
    radius: 8,
    color: active ? "#16a34a" : "#ef4444",
    weight: 2,
    fillColor: active ? "#86efac" : "#fecaca",
    fillOpacity: 0.9
  });

  const drawMarkers = (map, st) => {
    markersRef.current = {};
    Object.entries(districtCoords).forEach(([name, latlng]) => {
      const active = !!st[name];
      const m = L.circleMarker(latlng, markerStyle(active))
        .addTo(map)
        .bindTooltip(name, {
          permanent: true,
          direction: "top",
          offset: [0, -10],
          opacity: 0.9
        });

      m.on("click", () => {
        setState((prev) => {
          const next = { ...prev, [name]: !prev[name] };
          show(`${name}: ${next[name] ? "Active" : "Paused"}`);
          return next;
        });
      });

      markersRef.current[name] = m;
    });
  };

  const refreshMarkers = (st) => {
    Object.entries(markersRef.current).forEach(([name, m]) => {
      m.setStyle(markerStyle(!!st[name]));
    });
  };

  return (
    <div
      id="apMap"
      role="img"
      aria-label="Andhra Pradesh Service Control Map"
    />
  );
}
