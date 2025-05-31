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
// 
// 
// 
// 
  let delAndSaveContainer = document.createElement(`div`);
  delAndSaveContainer.classList.add(`delAndSaveContainer`);

  let delContainer = document.createElement('div');
  delContainer.classList.add(`delContainer`);

  let delBtn = document.createElement(`button`);
  delBtn.classList.add(`delBtn`);
  delBtn.textContent = `Delete`;
  delBtn.addEventListener('click', () => {
    noteCard.remove();  
  });
  // 
  // 
  // 
  delContainer.appendChild(delBtn);
  delAndSaveContainer.appendChild(delContainer);

  noteCard.appendChild(noteTitle);
  noteCard.appendChild(hRule);
  noteCard.appendChild(contentOfCard);
  noteCard.appendChild(delAndSaveContainer);

  main.appendChild(noteCard);
});
