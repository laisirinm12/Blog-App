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
  window.location.href = "index.html";
}

// LOAD MY POSTS
async function loadMyPosts() {
  const res = await fetch("http://localhost:5000/api/posts/my", {
    headers: { "Authorization": token }
  });

  const data = await res.json();

  const container = document.getElementById("myPosts");
  container.innerHTML = "";

  data.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("card");

    data.reverse().forEach(post => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content.substring(0, 120)}...</p>
    
    <div class="card-footer">
      <span>${new Date(post.createdAt).toLocaleDateString()}</span>
      <button onclick="deletePost('${post._id}')">Delete</button>
    </div>
  `;

  container.appendChild(div);
});

    container.appendChild(div);
  });
}

// DELETE
async function deletePost(id) {
  await fetch(`http://localhost:5000/api/posts/${id}`, {
    method: "DELETE",
    headers: { "Authorization": token }
  });

  loadMyPosts();
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  window.location.href = "login.html";
}

loadMyPosts();