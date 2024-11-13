let action = document.getElementById("displayWords");
let search = document.getElementById("searchWords");

let words = "";
async function fetchWords() {
  if (search.value.trim() === "") {
    action.innerHTML = "Input a word to search for";
    action.style.color = "red";
    return;
  }

  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${search.value}`
  );

  if (!res.ok) {
    action.innerHTML = "Word not found";
    action.style.color = "red";
    return;
  }

  const data = await res.json();
  console.log("data is here: ", data);

  words = `
    <p>${data[0].word}</p>
    <p><span>Part of speech: </span>${data[0].meanings[0].partOfSpeech}</p>
    <p><span>Definition: </span>${data[0].meanings[0].definitions[0].definition}</p>
    <p><span>Phonetic: </span>${data[0].phonetic || "N/A"}</p>
  `;

  action.innerHTML = words;
  action.style.color = "black";
  console.log("This is word here: ", data[0].phonetic);
}
