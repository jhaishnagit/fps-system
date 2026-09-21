import { useState } from "react";
import DataTable from "../components/Table/DataTable";
import AddZoneModal from "../components/Modals/AddZoneModal";
import AddProductModal from "../components/Modals/AddProductModal";
import ToggleRow from "../components/FeatureToggle/ToggleRow";

export default function MasterPage() {
  const [zones, setZones] = useState([
    { district: "Guntur", mandal: "Tenali", count: 147, status: "Active" },
    { district: "Krishna", mandal: "Machilipatnam", count: 203, status: "Active" }
  ]);
  const [products, setProducts] = useState([
    { name: "Rice (బియ్యం)", unit: "Kg", tax: 0, pds: "Yes", status: "Active" },
    { name: "Sugar (చక్కెర)", unit: "Kg", tax: 5, pds: "Yes", status: "Active" }
  ]);

  const [showZone, setShowZone] = useState(false);
  const [showProd, setShowProd] = useState(false);

  const [features, setFeatures] = useState({
    darkStore: true, wallet: false, chatbot: true, miniMart: true
  });

  return (
    <section className="card">
      {/* ZONES */}
      <div className="card-header">
        <div className="card-title"><span className="material-symbols-rounded" style={{color:"var(--primary)"}}>map</span> FPS Operational Zones</div>
        <button className="btn" style={{background:"var(--primary)", color:"#fff", borderColor:"transparent"}} onClick={()=>setShowZone(true)}>+ Add Zone</button>
      </div>
      <div className="card-body">
        <DataTable
          columns={["District","Mandal","FPS Count","Status"]}
          rows={zones}
          renderRow={(z, i)=>(
            <tr key={i}>
              <td>{z.district}</td>
              <td>{z.mandal}</td>
              <td>{z.count}</td>
              <td><span className={`badge ${z.status==="Active"?"b-success":"b-danger"}`}>{z.status}</span></td>
            </tr>
          )}
        />
      </div>

      {/* PRODUCTS */}
      <div className="card-header">
        <div className="card-title"><span className="material-symbols-rounded" style={{color:"var(--primary)"}}>inventory_2</span> Product Categories & Unit Types</div>
        <button className="btn" style={{background:"var(--primary)", color:"#fff", borderColor:"transparent"}} onClick={()=>setShowProd(true)}>+ Add Product</button>
      </div>
      <div className="card-body">
        <DataTable
          columns={["Category Name","Unit Type","Tax Code (%)","PDS Eligible","Status"]}
          rows={products}
          renderRow={(p, i)=>(
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.unit}</td>
              <td>{p.tax}%</td>
              <td><span className={`badge ${p.pds==="Yes"?"b-success":"b-danger"}`}>{p.pds}</span></td>
              <td><span className={`badge ${p.status==="Active"?"b-success":"b-danger"}`}>{p.status}</span></td>
            </tr>
          )}
        />
      </div>

      {/* FEATURE TOGGLES */}
      <div className="card-header">
        <div className="card-title"><span className="material-symbols-rounded" style={{color:"var(--primary)"}}>tune</span> Feature Module Controls</div>
      </div>
      <div className="card-body">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Module Name</th><th>Description</th><th>Status</th><th>Toggle</th></tr>
            </thead>
            <tbody>
              <ToggleRow
                name="Dark Store Mode"
                desc="Warehouse fulfillment system"
                enabled={features.darkStore}
                onChange={(v)=>setFeatures({...features, darkStore:v})}
                badgeId="status-darkStore"
              />
              <ToggleRow
                name="Digital Wallet"
                desc="Integrated payment wallet"
                enabled={features.wallet}
                onChange={(v)=>setFeatures({...features, wallet:v})}
                badgeId="status-wallet"
              />
              <ToggleRow
                name="AI Chatbot"
                desc="Automated customer support"
                enabled={features.chatbot}
                onChange={(v)=>setFeatures({...features, chatbot:v})}
                badgeId="status-chatbot"
              />
              <ToggleRow
                name="Mini Mart Ecosystem"
                desc="Third-party seller integration"
                enabled={features.miniMart}
                onChange={(v)=>setFeatures({...features, miniMart:v})}
                badgeId="status-miniMart"
              />
            </tbody>
          </table>
        </div>
      </div>

      {showZone && <AddZoneModal onClose={()=>setShowZone(false)} onSubmit={(z)=>setZones([z, ...zones])} />}
      {showProd && <AddProductModal onClose={()=>setShowProd(false)} onSubmit={(p)=>setProducts([p, ...products])} />}
    </section>
  );
}
