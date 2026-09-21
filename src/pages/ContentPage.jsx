import { useMemo, useState } from "react";
import DataTable from "../components/Table/DataTable";
import AddContentModal from "../components/Modals/AddContentModal";

export default function ContentPage() {
  const [rows, setRows] = useState([
    { title:"PDS Scheme Update", type:"banner", status:"Active", created:"2025-11-01" },
    { title:"FPS Holiday Notice", type:"announcement", status:"Active", created:"2025-10-28" }
  ]);
  const [typeFilter, setTypeFilter] = useState("all");
  const [q, setQ] = useState("");
  const [show, setShow] = useState(false);

  const filtered = useMemo(()=>{
    return rows.filter(r=>{
      const okType = typeFilter==="all" || r.type===typeFilter;
      const text = (r.title+r.type+r.status+r.created).toLowerCase();
      return okType && text.includes(q.toLowerCase());
    });
  },[rows, typeFilter, q]);

  return (
    <section className="card">
      <div className="card-header">
        <div className="card-title"><span className="material-symbols-rounded" style={{color:"var(--primary)"}}>dynamic_feed</span>Content & Announcements</div>
        <button className="btn" style={{background:"var(--primary)", color:"#fff", borderColor:"transparent"}} onClick={()=>setShow(true)}>+ Add Content</button>
      </div>
      <div className="card-body">
        <div className="grid grid-3">
          <div className="field">
            <label>Filter by Type</label>
            <select className="select-inp" value={typeFilter} onChange={(e)=>setTypeFilter(e.target.value)}>
              <option value="all">All Types</option>
              <option value="banner">Banner</option>
              <option value="announcement">Announcement</option>
              <option value="notification">Notification</option>
            </select>
          </div>
          <div className="field">
            <label>Search Content</label>
            <input className="input" placeholder="Title or Keyword..." value={q} onChange={(e)=>setQ(e.target.value)} />
          </div>
        </div>

        <DataTable
          columns={["Title","Type","Status","Created"]}
          rows={filtered}
          renderRow={(r,i)=>(
            <tr key={i}>
              <td>{r.title}</td>
              <td><span className={`badge ${r.type==="announcement"?"b-warn":"b-info"}`}>{r.type[0].toUpperCase()+r.type.slice(1)}</span></td>
              <td><span className={`badge ${r.status==="Active"?"b-success":"b-danger"}`}>{r.status}</span></td>
              <td>{r.created}</td>
            </tr>
          )}
        />
      </div>

      {show && <AddContentModal onClose={()=>setShow(false)} onSubmit={(c)=>setRows([c, ...rows])} />}
    </section>
  );
}
