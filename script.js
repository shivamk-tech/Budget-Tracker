const sections = document.querySelectorAll(".section");

sections.forEach(section => {
  section.addEventListener("click", () => {
    sections.forEach(sec => sec.classList.remove("active"));
    section.classList.add("active");
  });
});
const ctx = document.getElementById('expenseChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Food', 'Travel', 'Shopping', 'Rent', 'Others'],
    datasets: [{
      label: 'Expenses',
      data: [3000, 1500, 2000, 4000, 800],
      backgroundColor: [
        '#38bdf8',
        '#fb7185',
        '#facc15',
        '#a78bfa',
        '#34d399'
      ]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    borderColor: '#0f172a'
  }
});
const ctx2 = document.getElementById('monthlyChart');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'Julu', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Expense',
      data: [5000, 4200, 6100, 4800, 5300, 4500, 5000, 9000, 2000, 10000, 89475, 4574],
      backgroundColor: '#0ea5e9'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      }
    }
  }
});
const expenses = [
  { amount: 200, category: 'Food' },
  { amount: 500, category: 'Travel' },
  { amount: 300, category: 'Food' }
];
const totals = {};

expenses.forEach(e => {
  totals[e.category] = (totals[e.category] || 0) + e.amount;
});

console.log(totals);
// { Food: 500, Travel: 500 }
let btn = document.querySelector("button");
let blur = document.querySelector(".blur");
let expensepop = document.querySelector(".expensepop");
let cut = document.querySelector(".cut");
btn.addEventListener("click", () => {
  expensepop.classList.toggle("active");
  blur.classList.toggle("bluractive");
});
cut.addEventListener("click", () => {
  expensepop.classList.toggle("active");
  blur.classList.toggle("bluractive");
});
const form = document.querySelector("#myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const subject = document.querySelector("#fsubject").value;
  const amount = document.querySelector("#famount").value;
  const category = document.querySelector("#fCategory").value;
  const payment = document.querySelector("#fPayement").value;
  console.log(subject, amount, category, payment);
  const expense = {
    subjecto:subject,
    amounto:amount,
    categoryo:category,
    paymento:payment,
    id:new Date().getTime().toString()
  }
  localStorage.setItem(expense.id,JSON.stringify(expense));
  expensepop.classList.toggle("active");
  blur.classList.toggle("bluractive");
});
