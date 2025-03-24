const bill = document.getElementById("bill_amount");
const tip = document.getElementById("tip_percentage");

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  event.preventDefault(); // Спира презареждането на страницата
  calculate();
});

const total_sum = document.querySelector("span");

function calculate() {
  const bill_val = parseFloat(bill.value) || 0; // Ако стойността е празна, дава 0, за да се избегнат грешки
  const tip_val = parseFloat(tip.value) || 0; // Ако стойността е празна, дава 0, за да се избегнат грешки

  const total = bill_val + tip_val;
  total_sum.textContent = `$${total.toFixed(2)}`; // Форматира числото до два десетични знака за по-добро изобразяване
}
