





const container = document.getElementById("container");
const commentBox = document.getElementById("comment-box");
const btn = document.getElementById("btn");

// This code does nothing, I don't know why I wrote it

btn.addEventListener("click", () => {
  const newComment = commentBox.value;
  const p = document.createElement("p");
  p.innerText = new Date().toLocaleTimeString() + " | " + newComment;
  container.appendChild(p);
  commentBox.value = "";
});
