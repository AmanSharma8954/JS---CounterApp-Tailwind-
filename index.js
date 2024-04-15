const scoreElement = document.querySelector("#score");
const minus = document.querySelector("#btn-minus");
const reset = document.querySelector("#btn-reset");
const plus = document.querySelector("#btn-plus");

let final_score = 0;
function counter() {
  let scoreValue = parseInt(scoreElement.textContent);

  minus.addEventListener("click", () => {
    scoreValue -= 1;
    scoreElement.textContent = scoreValue;
  });

  plus.addEventListener("click", () => {
    scoreValue += 1;
    scoreElement.textContent = scoreValue;
  });
  
  reset.addEventListener("click", () => {
    scoreValue = 0;
    scoreElement.textContent = scoreValue;
  });
}
counter();
