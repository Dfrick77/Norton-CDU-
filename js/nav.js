// ============================================================
// Top nav: Home link + hover-open Pathways menu
// ============================================================
function renderPathwaysMenu() {
  const menu = document.getElementById("pathways-menu");
  if (!menu) return;

  menu.innerHTML = "";
  PROTOCOLS.forEach((p) => {
    const a = document.createElement("a");
    a.href = "protocol.html?id=" + encodeURIComponent(p.id);
    a.textContent = p.name;
    menu.appendChild(a);
  });

  const wrap = document.getElementById("nav-pathways");
  const btn = document.getElementById("pathways-btn");
  if (wrap && btn) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      wrap.classList.toggle("open");
    });
    document.addEventListener("click", () => wrap.classList.remove("open"));
    menu.addEventListener("click", (e) => e.stopPropagation());
  }
}

renderPathwaysMenu();
