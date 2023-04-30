const button = document.getElementById("button");
button.onclick = function (event) {
  event.preventDefault();
  const title = document.getElementById("header").value;
  const body = document.getElementById("text").value;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".out");
      const newPost = document.createElement("div");
      newPost.setAttribute("class", "wrap");
      const formatTitle =
        data.title.charAt(0).toUpperCase() + data.title.slice(1);
      newPost.innerHTML += `
      <div id="header_out">${formatTitle}: </div>
      <div id="text_out">${data.body}</div>
      `;
      container.appendChild(newPost);
    });
};
