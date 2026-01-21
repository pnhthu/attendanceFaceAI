import { login } from "./authService.js";

const form = document.getElementById("loginForm");
const errorEl = document.getElementById("error");
const loadingEl = document.getElementById("loading");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  errorEl.style.display = "none";
  loadingEl.style.display = "block";

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    await login(username, password);
    window.location.href = "dashboardGV.html";
  } catch (err) {
    errorEl.innerText = "Sai tài khoản hoặc mật khẩu";
    errorEl.style.display = "block";
  } finally {
    loadingEl.style.display = "none";
  }
});
