async function loadPosts() {
  const res = await fetch("http://localhost:5000/api/posts");
  const data = await res.json();

  const container = document.getElementById("posts");
  container.innerHTML = "";

  data.reverse().forEach(post => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
  <h3>${post.title}</h3>
  <p>${post.content.substring(0, 120)}...</p>
  <small>✍️ ${post.author?.name || "Unknown"}</small>
  <br><br>
  <button onclick="alert('${post.content}')">Read More</button>
`;

    container.appendChild(div);
  });
}

loadPosts();