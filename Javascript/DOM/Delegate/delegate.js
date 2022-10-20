const list = document.getElementById("list");
list.addEventListener("click", function(e) {
      console.log(e.target);
      e.target.parentNode.removeChild(e.target);
})

const btn = document.getElementById("btn")
btn.addEventListener("click", function() {
      const li = document.createElement("li");
      li.innerText = "Brand new item"
      li.classList.add("item");
      list.appendChild(li);
})