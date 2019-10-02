/* Aufgabe:

-  Beispielnachricht von pink auf grün umschalten
-  Klick auf Submit Button in der Konsole protokollieren
-  Text vom Eingabefeld nach Klick auf Submit Button in Konsole loggen
-  Nach Submit neues Comment Element erstellen und hinter Altem anhängen
-  Text nach Submit in Comment schreiben und dann erst anhängen
-  Mit HTTP Get Parameter User und damit Farbe festlegen
-  Enter Key auch mit Submit Listener belegen
-  Text hinterher wieder aus Textarea entfernen
-  Comment in zufälliger Farbe einfärben
-  Uhrzeit Anzeigen
-  Username anzeigen
*/
"use strict";
let username;

window.addEventListener("load", () => {
  let commentElement = document.querySelector("comment");
  commentElement.classList.remove("pink");
  commentElement.classList.add("green");
  document.querySelector("input").addEventListener("click", submitEvent);
  window.addEventListener("keypress",(event) => {
      if(event.key === 'Enter')
        submitEvent();
  });
});

let submitEvent = () => {
  console.log("Klick.");
  let text = document.querySelector("textarea").value;
  if(text === '') {
    alert("No Text");
    return;
  }

  console.log(text);

  let newComment = document.createElement("comment");
  newComment.textContent = text;
  document.getElementById("comments").appendChild(newComment);
  chooseColor(newComment);
  document.querySelector("textarea").value = '';

  newComment.addEventListener("click", (event) => {
      console.log(event.target.textContent);
      event.target.style = "visibility:hidden";
  });

  let now = new Date();
  console.log(now);
  let time = document.createElement("time");
  time.textContent = username + " / " + now.getHours() + ":" + now.getMinutes() + " Uhr";
  newComment.appendChild(time);
}

let chooseColor = (element) => {
  let urlParams = new URLSearchParams(window.location.search);
  username = urlParams.get("user");
  let firstCharacter;
  let color;
  if(!username) {
    username = "Anonym";
    firstCharacter = (Math.random()*Math.floor(26)) + 65;
  }
  else {
    firstCharacter = username.toUpperCase().charCodeAt(0);
    console.log(username);
  }
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
