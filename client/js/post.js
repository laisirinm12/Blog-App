const token = localStorage.getItem("token");

// CREATE POST
async function createPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!token) {
    alert("Login first");
    return;
  }

  await fetch("http://localhost:5000/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({ title, content })
  });

  alert("Post created");
  loadMyPosts();
}

// LOAD MY POSTS`
async function loadMyPosts() {
  const res = await fetch("http://localhost:5000/api/posts/my", {
    headers: { "Authorization": token }
  });

  const data = await res.json();

  const container = document.getElementById("myPosts");
  if (!container) return; // prevents errors on other pages

  container.innerHTML = "";

  // ✅ ONLY ONE LOOP (FIXED)
  data.reverse().forEach(post => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content.substring(0, 120)}...</p>

      <div class="card-footer">
        <span>${new Date(post.createdAt).toLocaleDateString()}</span>

        <div>
          <button onclick="readPost('${post._id}')">Read</button>
          <button onclick="editPost('${post._id}')">Edit</button>
          <button onclick="deletePost('${post._id}')">Delete</button>
        </div>
      </div>
    `;

    container.appendChild(div);
  });
}

// DELETE
async function deletePost(id) {

  const confirmDelete = confirm("Are you sure you want to delete this post?");

  if (!confirmDelete) return; // ❌ cancel → do nothing

  await fetch(`http://localhost:5000/api/posts/${id}`, {
    method: "DELETE",
    headers: { "Authorization": token }
  });

  loadMyPosts(); // refresh
}

// READ
function readPost(id) {
  window.location.href = `post.html?id=${id}`;
}

function editPost(id) {
  window.location.href = `edit.html?id=${id}`;
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  window.location.href = "login.html";
}

// LOAD ONLY IF PRESENT
if (document.getElementById("myPosts")) {
  loadMyPosts();
}