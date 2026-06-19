const API = "http://backend:8000/api";

export async function getIncidents() {
  const res = await fetch(`${API}/incidents`);
  return res.json();
}

export async function createIncident(data) {
  await fetch(`${API}/incidents`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
