// ============================================================
// Home page: protocol list as links to protocol.html?id=...
// ============================================================
const listEl = document.getElementById("protocol-list");

function renderProtocolLink(protocol) {
  const a = document.createElement("a");
  a.className = "protocol-card";
  a.href = "protocol.html?id=" + encodeURIComponent(protocol.id);
  a.innerHTML = `<span>${protocol.name}</span><span class="chev">›</span>`;
  return a;
}

function renderList(filterText) {
  listEl.innerHTML = "";
  const filter = (filterText || "").trim().toLowerCase();
  const matches = PROTOCOLS.filter((p) => p.name.toLowerCase().includes(filter));
  if (matches.length === 0) {
    const div = document.createElement("div");
    div.className = "no-results";
    div.textContent = "No protocols match your search.";
    listEl.appendChild(div);
    return;
  }
  matches.forEach((p) => listEl.appendChild(renderProtocolLink(p)));
}

renderList("");

document.getElementById("search").addEventListener("input", (e) => {
  renderList(e.target.value);
});

// ============================================================
// Supplemental: Absolute Exclusion Criteria
// ============================================================
const supBody = document.getElementById("supplemental-body");
ABSOLUTE_EXCLUSIONS.forEach((row) => {
  const div = document.createElement("div");
  div.className = "excl-item";
  div.innerHTML = `<b>${row.label}</b><span>${row.detail}</span>`;
  supBody.appendChild(div);
});

document.getElementById("supplemental-toggle").addEventListener("click", () => {
  supBody.hidden = !supBody.hidden;
});
