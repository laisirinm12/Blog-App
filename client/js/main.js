// 🎨 Pastel Colors
const colors = [
  "#ffd6e0",
  "#d6f5ff",
  "#fff3cd",
  "#e0ffe0",
  "#f3e8ff",
  "#ffe5d9"
];

// 📦 Load Posts
async function loadPosts() {
  try {
    const res = await fetch("http://localhost:5000/api/posts");
    const data = await res.json();

    const container = document.getElementById("posts");
    container.innerHTML = "";

    // ✅ Empty state
    if (!data || data.length === 0) {
      container.innerHTML = "<p>No posts available</p>";
      return;
    }

    data.reverse().forEach((post, index) => {
      const div = document.createElement("div");
      div.classList.add("card");

      // 🎨 Assign pastel color
      const bg = colors[index % colors.length];
      div.style.background = `${bg}cc`;

      // ✅ Safe values
      const title = post.title || "Untitled";
      const content = post.content || "";
      const author = post.author?.name || "Unknown";

      div.innerHTML = `
        <h3><b>${title}</b></h3>
        <p><i>${content.substring(0, 80)}...</i></p>
        <small>✍️ ${author}</small>
        <br>
        <button onclick="readPost('${post._id}')">Read</button>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading posts:", error);
    document.getElementById("posts").innerHTML =
      "<p>Failed to load posts</p>";
  }
}

// 🔗 Navigate to full post
function readPost(id) {
  if (!id) return;
  window.location.href = `post.html?id=${id}`;
}

// 🧭 Navbar Setup (LOGIN STATE)
function setupNavbar() {
  const nav = document.getElementById("navLinks");
  if (!nav) return;

  const token = localStorage.getItem("token");

  if (token) {
    nav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="dashboard.html">Dashboard</a>
      <a href="profile.html">Profile</a>
      <button onclick="logout()">Logout</button>
    `;
  } else {
    nav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="login.html">Login</a>
      <a href="signup.html">Signup</a>
    `;
  }
}

// 🚪 Logout
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  window.location.href = "index.html";
}

// 🚀 INIT
setupNavbar();
loadPosts();