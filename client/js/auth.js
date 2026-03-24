async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // ✅ Validation (NEW)
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  // ✅ Better check (NEW but safe)
  if (!data.token) {
    alert(data.message || "Login failed");
    return;
  }

  localStorage.setItem("token", data.token);
  localStorage.setItem("userId", data.userId);

  window.location.href = "dashboard.html";
}

async function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // ✅ Validation (NEW)
  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  const res = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();

  // ✅ Optional safety (NEW)
  if (data.error) {
    alert(data.error);
    return;
  }

  alert("Signup successful");
  window.location.href = "login.html";
}