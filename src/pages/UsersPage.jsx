import { useMemo, useState } from "react";
import DataTable from "../components/Table/DataTable";
import AddUserModal from "../components/Modals/AddUserModal";

export default function UsersPage() {
  const [users, setUsers] = useState([
    { name:"Suresh Babu", role:"regional", roleLabel:"Regional Officer", zone:"Guntur District", contact:"9876543210", status:"Active" },
    { name:"Lakshmi Devi", role:"dealer", roleLabel:"FPS Dealer", zone:"Tenali Shop #45", contact:"9876543211", status:"Active" },
    { name:"Priya Sharma", role:"admin", roleLabel:"Admin", zone:"Central Admin", contact:"9876543212", status:"Pending" }
  ]);

  const [roleFilter, setRoleFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const filtered = useMemo(()=>{
    return users.filter(u=>{
      const okRole = roleFilter==="all" || u.role===roleFilter;
      const text = (u.name+u.roleLabel+u.zone+u.contact+u.status).toLowerCase();
      return okRole && text.includes(query.toLowerCase());
    });
  },[users, roleFilter, query]);

  return (
    <section className="card">
      <div className="card-header">
        <div className="card-title"><span className="material-symbols-rounded" style={{color:"var(--primary)"}}>supervisor_account</span>User & Role Management</div>
        <button className="btn" style={{background:"var(--primary)", color:"#fff", borderColor:"transparent"}} onClick={()=>setShow(true)}>+ Add User</button>
      </div>

      <div className="card-body">
        <div className="grid grid-3">
          <div className="field">
            <label>Filter by Role</label>
            <select className="select-inp" value={roleFilter} onChange={(e)=>setRoleFilter(e.target.value)}>
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="regional">Regional Officer</option>
              <option value="helpdesk">Helpdesk Agent</option>
              <option value="dealer">FPS Dealer</option>
              <option value="partner">Mini Mart Partner</option>
            </select>
          </div>
          <div className="field">
            <label>Search User</label>
            <input className="input" placeholder="Name, Email, Phone..." value={query} onChange={(e)=>setQuery(e.target.value)} />
          </div>
        </div>

        <DataTable
          columns={["Name","Role","Zone/Shop","Contact","Status"]}
          rows={filtered}
          renderRow={(u, i)=>(
            <tr key={i}>
              <td>{u.name}</td>
              <td>
                <span className={`badge ${u.role==="admin"?"b-danger":u.role==="dealer"?"b-warn":"b-info"}`}>{u.roleLabel}</span>
              </td>
              <td>{u.zone}</td>
              <td>{u.contact}</td>
              <td><span className={`badge ${u.status==="Active"?"b-success":u.status==="Pending"?"b-warn":"b-danger"}`}>{u.status}</span></td>
            </tr>
          )}
        />
      </div>

      {show && <AddUserModal onClose={()=>setShow(false)} onSubmit={(u)=>setUsers([{
        ...u,
        roleLabel: u.role==="admin"?"Admin":u.role==="dealer"?"FPS Dealer":u.role==="regional"?"Regional Officer":u.role==="helpdesk"?"Helpdesk Agent":"Mini Mart Partner"
      }, ...users])} />}
    </section>
  );
}
