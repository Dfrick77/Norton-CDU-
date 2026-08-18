// ============================================================
// Detail page: renders a single protocol based on ?id=
// ============================================================
const CRIT_CLASS = {
  "Inclusion Criteria": "inclusion",
  "Exclusion Criteria": "exclusion",
  "Potential CDU Interventions": "interventions",
  "Discharge Parameters": "discharge",
  "Admission Parameters": "admission"
};
function critClass(heading) {
  const base = heading.split(" — ")[0].trim();
  return CRIT_CLASS[base] || "interventions";
}

function renderPlainList(items) {
  const ul = document.createElement("ul");
  ul.className = "os-list";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });
  return ul;
}

function renderOrderSet(orderSet, headingOverride) {
  const wrap = document.createElement("div");
  wrap.className = "order-set";

  const h3 = document.createElement("h3");
  h3.textContent = headingOverride || orderSet.title;
  wrap.appendChild(h3);

  const meta = document.createElement("div");
  meta.className = "os-meta";
  meta.innerHTML = `<span>Diagnosis: <b>${orderSet.diagnosis}</b></span><span>Admit to: <b>${orderSet.admitTo}</b></span>` +
    (orderSet.codeStatus ? `<span>Code Status: <b>${orderSet.codeStatus}</b></span>` : "");
  wrap.appendChild(meta);

  let lastLabel = null;
  orderSet.fields.forEach((field) => {
    const isNewGroup = field.label !== lastLabel;
    let container;
    if (isNewGroup) {
      container = document.createElement("div");
      container.className = "os-field";
      const label = document.createElement("div");
      label.className = "os-field-label";
      label.textContent = field.label;
      container.appendChild(label);
      wrap.appendChild(container);
    } else {
      container = wrap.lastElementChild;
    }
    if (field.subheading) {
      const sub = document.createElement("div");
      sub.className = "os-field-sub";
      sub.textContent = field.subheading;
      container.appendChild(sub);
    }
    container.appendChild(renderPlainList(field.items));
    lastLabel = field.label;
  });

  return wrap;
}

function renderOrderSetSection(protocol) {
  const wrap = document.createElement("div");
  wrap.className = "orderset-section";

  const tab = document.createElement("button");
  tab.type = "button";
  tab.className = "orderset-tab";
  tab.innerHTML = `<span>Order Set</span><span class="chev">▾</span>`;

  const content = document.createElement("div");
  content.className = "orderset-content";
  if (protocol.orderSet) content.appendChild(renderOrderSet(protocol.orderSet));
  if (protocol.orderSetAlt) content.appendChild(renderOrderSet(protocol.orderSetAlt));

  tab.addEventListener("click", () => wrap.classList.toggle("open"));

  wrap.appendChild(tab);
  wrap.appendChild(content);
  return wrap;
}

function renderAlgorithms(algorithms) {
  const wrap = document.createElement("div");
  wrap.className = "algorithms";

  const label = document.createElement("div");
  label.className = "algorithms-label";
  label.textContent = algorithms.length > 1 ? "Protocol Algorithms" : "Protocol Algorithm";
  wrap.appendChild(label);

  const row = document.createElement("div");
  row.className = "algorithms-row";
  algorithms.forEach((alg) => {
    const btn = document.createElement("button");
    btn.className = "algorithm-thumb";
    btn.type = "button";

    const img = document.createElement("img");
    img.src = alg.file;
    img.alt = alg.title;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      btn.classList.add("thumb-broken");
      img.replaceWith(Object.assign(document.createElement("div"), {
        className: "thumb-broken-msg",
        textContent: "Image failed to load — " + alg.file
      }));
    });

    const caption = document.createElement("span");
    caption.textContent = alg.title;

    btn.appendChild(img);
    btn.appendChild(caption);
    btn.addEventListener("click", () => openLightbox(alg.file, alg.title));
    row.appendChild(btn);
  });
  wrap.appendChild(row);

  return wrap;
}

function renderProtocolDetail(protocol) {
  const container = document.getElementById("protocol-detail");
  container.innerHTML = "";

  const heading = document.createElement("h1");
  heading.className = "detail-title";
  heading.textContent = protocol.name;
  container.appendChild(heading);

  if (protocol.criteriaNote) {
    const note = document.createElement("div");
    note.className = "criteria-note";
    note.textContent = protocol.criteriaNote;
    container.appendChild(note);
  }

  (protocol.criteria || []).forEach((block) => {
    const div = document.createElement("div");
    div.className = "crit-block " + critClass(block.heading);
    const h3 = document.createElement("h3");
    h3.textContent = block.heading;
    div.appendChild(h3);
    const ul = document.createElement("ul");
    block.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    div.appendChild(ul);
    container.appendChild(div);
  });

  if (protocol.algorithms && protocol.algorithms.length) {
    container.appendChild(renderAlgorithms(protocol.algorithms));
  }

  if (protocol.orderSet || protocol.orderSetAlt) {
    container.appendChild(renderOrderSetSection(protocol));
  } else if (protocol.orderSetNote) {
    const note = document.createElement("p");
    note.className = "order-set-note";
    note.textContent = protocol.orderSetNote;
    container.appendChild(note);
  }
}

function renderNotFound(id) {
  const container = document.getElementById("protocol-detail");
  container.innerHTML = "";
  const div = document.createElement("div");
  div.className = "no-results";
  div.textContent = id
    ? `No protocol found matching "${id}".`
    : "No protocol specified.";
  container.appendChild(div);
}

// ============================================================
// Lightbox for protocol algorithm diagrams
// ============================================================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");

function openLightbox(file, title) {
  lightboxImg.src = file;
  lightboxImg.alt = title;
  lightboxTitle.textContent = title;
  lightbox.hidden = false;
}
function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
}
document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-backdrop").addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

// ============================================================
// Load protocol from ?id=
// ============================================================
const params = new URLSearchParams(location.search);
const requestedId = params.get("id");
const protocol = PROTOCOLS.find((p) => p.id === requestedId);

if (protocol) {
  document.title = protocol.name + " — Norton CDU Protocols";
  renderProtocolDetail(protocol);
} else {
  renderNotFound(requestedId);
}
