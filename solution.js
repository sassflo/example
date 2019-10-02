let urlParams = new URLSearchParams(window.location.search);

window.addEventListener("load", () => {
  console.log("Website finally loaded");
  let first_comment = document.querySelector("comment");
  first_comment.classList.remove("pink");
  first_comment.classList.add("green");
  document.querySelector("input").addEventListener("click", submitListener);
  window.addEventListener("keypress", (event) => {
    console.log(event.key + " pressed");
    if(event.key == 'Enter')
    {
      event.preventDefault();
      submitListener();
    }
  });
})

console.log("js found");

let submitListener = (event) => {
  let text = document.querySelector("textarea").value;
  console.log(text);
  let comments = document.getElementById("comments");
  let newComment = document.createElement("comment");
  let time = document.createElement("time");

  newComment.textContent = text;
  decideOnColor(newComment);
  let now = new Date();
  time.textContent = username + " / " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  newComment.appendChild(time);
  comments.appendChild(newComment);
  document.querySelector("textarea").value="";
}

let decideOnColor = (element) => {
  username = urlParams.get('user');
  let color = "black";
  let firstCharacter;
  if(username)
    firstCharacter = username.toUpperCase().charCodeAt(0);
  else
    firstCharacter = (Math.random() * Math.floor(26)) + 64;
  if(firstCharacter <= 69)
      color = "pink";
  else if(firstCharacter <= 74)
      color = "blue";
  else if(firstCharacter <= 79)
      color = "red";
  else if(firstCharacter <= 84)
      color = "orange";
  else if(firstCharacter <= 90)
      color = "green";
  element.classList.add(color);
}
