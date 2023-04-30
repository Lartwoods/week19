function getObject() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let myInfo = "";
      data.forEach((item) => {
        myInfo += `
      <div id="header"> Заголовок: ${item.title}</div>
      <div id="text">Статья: ${item.body}</div>
      `;
      });

      const container = document.querySelector(".info");
      container.innerHTML = myInfo;
    })
    .catch((error) => console.log(error));
}
getObject();
