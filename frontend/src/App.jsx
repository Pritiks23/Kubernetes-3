import { useEffect, useState } from "react";
import { getIncidents } from "./api";
import IncidentTable from "./components/IncidentTable";
import CreateIncident from "./components/CreateIncident";

export default function App() {
  const [incidents, setIncidents] = useState([]);

  const load = async () => {
    const data = await getIncidents();
    setIncidents(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Incident Response Dashboard</h1>
      <CreateIncident onCreated={load} />
      <IncidentTable incidents={incidents} />
    </div>
  );
}
