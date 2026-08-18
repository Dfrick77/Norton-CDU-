// ============================================================
// Access password — change this to whatever you'd like.
// NOTE: this is a casual gate only (plain text in this file),
// not real security. Anyone who views this file's source can
// read or bypass it. See README for details.
// ============================================================
const GATE_PASSWORD = "cdu2026";

const gate = document.getElementById("gate");
const site = document.getElementById("site");
const gateForm = document.getElementById("gate-form");
const gatePassword = document.getElementById("gate-password");
const gateError = document.getElementById("gate-error");
const lockBtn = document.getElementById("lock-btn");

function unlock() {
  gate.hidden = true;
  site.hidden = false;
  sessionStorage.setItem("cdu-unlocked", "1");
}

function lock() {
  sessionStorage.removeItem("cdu-unlocked");
  site.hidden = true;
  gate.hidden = false;
  gatePassword.value = "";
  gatePassword.focus();
}

if (sessionStorage.getItem("cdu-unlocked") === "1") {
  unlock();
}

gateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (gatePassword.value === GATE_PASSWORD) {
    gateError.hidden = true;
    unlock();
  } else {
    gateError.hidden = false;
  }
});

if (lockBtn) {
  lockBtn.addEventListener("click", lock);
}
