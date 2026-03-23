async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (!data.token) {
    alert("Login failed");
    return;
  }

  localStorage.setItem("token", data.token);
  localStorage.setItem("userId", data.userId);

  window.location.href = "dashboard.html";
}

async function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, email, password })
  });

  alert("Signup successful");
  window.location.href = "login.html";
}