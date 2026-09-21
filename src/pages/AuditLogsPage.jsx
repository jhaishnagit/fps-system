export default function AuditLogsPage() {
  const logs = [
    { user:"Rajesh Kumar", role:"Admin", action:"Edited master zone configuration", ts:"2025-11-06 09:22 AM" },
    { user:"Suresh Babu", role:"Regional Officer", action:"Updated FPS dealer details", ts:"2025-11-06 08:11 AM" },
    { user:"Priya Sharma", role:"Admin", action:"Enabled AI Chatbot Module", ts:"2025-11-05 07:25 PM" },
  ];

  return (
    <section className="card">
      <div className="card-header">
        <div className="card-title">
          <span className="material-symbols-rounded" style={{ color: "var(--primary)" }}>history</span>
          <span>Audit Logs & Activity Reports</span>
        </div>
      </div>
      <div className="card-body">
        <div className="table-wrap">
          <table>
            <thead><tr><th>User</th><th>Role</th><th>Action</th><th>Timestamp</th></tr></thead>
            <tbody>
              {logs.map((l,i)=>(
                <tr key={i}>
                  <td>{l.user}</td><td>{l.role}</td><td>{l.action}</td><td>{l.ts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
