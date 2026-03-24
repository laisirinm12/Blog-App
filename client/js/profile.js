const token = localStorage.getItem("token");

// LOAD PROFILE
async function loadProfile() {
  const res = await fetch("http://localhost:5000/api/auth/me", {
    headers: { Authorization: token }
  });

  const data = await res.json();

  document.getElementById("name").innerText = data.name;
  document.getElementById("email").innerText = data.email;
  document.getElementById("userId").innerText = data._id;
}

// UPDATE NAME
async function updateName() {
  const name = document.getElementById("newName").value;

  if (!name) {
    alert("Enter name");
    return;
  }

  await fetch("http://localhost:5000/api/auth/update-name", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({ name })
  });

  alert("Name updated");
  loadProfile();
}

// UPDATE PASSWORD
async function updatePassword() {
  const oldPassword = document.getElementById("oldPassword").value;
  const newPassword = document.getElementById("newPassword").value;

  if (!oldPassword || !newPassword) {
    alert("Fill all fields");
    return;
  }

  const res = await fetch("http://localhost:5000/api/auth/update-password", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({ oldPassword, newPassword })
  });

  const data = await res.json();

  if (data.error) {
    alert(data.error);
    return;
  }

  alert("Password updated");
}

loadProfile();