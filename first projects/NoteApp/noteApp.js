const titleInput = document.querySelector(".titleInput");
const plus = document.querySelector("#plus");
const main = document.querySelector("main");

plus.addEventListener("click", () => {
  let noteCard = document.createElement(`div`);
  noteCard.classList.add("note");

  let noteTitle = document.createElement(`p`);
  noteTitle.classList.add(`title`);
  noteTitle.textContent = titleInput.value;

  let hRule = document.createElement(`hr`);

  let contentOfCard = document.createElement(`p`);
  contentOfCard.classList.add(`noteContent`);

  let span = document.createElement(`span`);
  span.contentEditable = true;
  contentOfCard.appendChild(span);

  let closeBtnContainer = document.createElement(`div`);
  closeBtnContainer.classList.add(`closeBtnContainer`);

  let closeBtn = document.createElement(`button`);
  closeBtn.classList.add(`delContBtn`);
  closeBtn.textContent = `✖`;
  closeBtn.addEventListener('click', () => {
    noteCard.remove();  
     
  })
  closeBtnContainer.appendChild(closeBtn);

  noteCard.appendChild(noteTitle);
  noteCard.appendChild(hRule);
  noteCard.appendChild(contentOfCard);
  noteCard.appendChild(closeBtnContainer);

  main.appendChild(noteCard);
});
