const queList = [
  {
    question: "how are your",
    options: {
      option1: "fine",
      option2: "not",
      option3: "bad",
      option4: "good",
    },
    correct: "option4",
  },
  {
    question: "National bird of India",
    options: {
      option1: "Peacock",
      option2: "Piegien",
      option3: "Parrot",
      option4: "Hen",
    },
    correct: "option1",
  },
];

const optionLabels = [
  { id: "option1", label: "option1Label" },
  { id: "option2", label: "option2Label" },
  { id: "option3", label: "option3Label" },
  { id: "option4", label: "option4Label" },
];

const quizBody = document.querySelector(".quiz__container");

const questionName = document.getElementById("quiz__header");
const option1Label = document.getElementById("option1Label");
const option2Label = document.getElementById("option2Label");
const option3Label = document.getElementById("option3Label");
const option4Label = document.getElementById("option4Label");

const ansElement = document.querySelectorAll(".answer");

const btn = document.getElementById("button");

// =========== GET USER SELECTED ANSWER =============

function GetAnswer() {
  let optSelected = undefined;
  ansElement.forEach((item) => {
    if (item.checked) optSelected = item.id;
  });

  return optSelected;
}

// ============== UNCHECK ALL OPTIONS ================

function DeSelectAnswer() {
  ansElement.forEach((item) => {
    item.checked = false;
  });
}

// ================= DISPLAY QUESTION =================

let quesNumber = 0;
function Questions() {
  const { question, options, correct } = queList[quesNumber];

  const liElement = optionLabels
    .map(
      ({ id, label }) =>
        `<li>
        <input
        class="answer"
        name="quizOptions"
        type="radio"
        id="${id}"
        />
        <label for="${id}" id="${label}">${options[id]}</label>
    </li>`
    )
    .join("");

  const quizDivElement = `<div class="quiz">
    <h2 class="quiz__header" id="quiz__header">${question}</h2>
    <ul class="quiz__question">
      ${liElement}
    </ul>
  </div>
  <button id="button">submit</button>
  `;

  quizBody.innerHTML = quizDivElement;
}
Questions();

// ==================== ON BTN SUBMIT =====================

btn.addEventListener("click", () => {
  const ans = GetAnswer();
  if (!ans) {
    alert("Please select an answer");
    return;
  }
  quesNumber++;
  console.log(ans);
  DeSelectAnswer();
  if (quesNumber < queList.length) {
    Questions();
  } else {
    alert("Quiz Done");
  }
});
