let { log } = console;
const addBtn = document.querySelector('.add');
const submitBtn = document.querySelector('.submit');
const itemContainer = document.querySelector('.item-container');
const expensesValues = document.querySelector('.expenses-values');
const inputExpenses = document.querySelector('.input-expenses');
const homepageBtn = document.querySelector('.home-expense');
const viewExpenseBtn = document.querySelector('.view-expenses');
const datePicker = document.querySelector('.date-picker');

// CREATE A BUDGET INPUT
function createBudget() {
  let valueContainer = document.createElement('div');
  valueContainer.classList.add('value-container');
  let label = document.createElement('label');
  label.textContent = 'Budget';
  let input = document.createElement('input');
  input.setAttribute('id', 'budget');
  input.setAttribute('type', 'number');
  valueContainer.append(label, input);
  itemContainer.appendChild(valueContainer);
}

// CREATE AN INPUT EXPENSE
function createExpense() {
  let valueContainer = document.createElement('div');
  valueContainer.classList.add('value-container');
  let label = document.createElement('input');
  label.textContent = 'Item';
  label.setAttribute('title', 'CLICK HERE TO EDIT');
  label.setAttribute('id', 'item-expense');
  label.contentEditable = true;
  let input = document.createElement('input');
  input.setAttribute('id', 'expense');
  input.setAttribute('type', 'number');
  valueContainer.append(label, input);
  itemContainer.appendChild(valueContainer);
}

// CREATE TODAYS DATE
function todaysDate() {
  let today = new Date();
  return `${today.toLocaleDateString()}`;
}

// ADD BUTTON TO ADD EXPENSE AND BUDGET INPUT ON THE PAGE
addBtn.onclick = () => {
  if (itemContainer.children.length !== 1) {
    createExpense();
    createBudget();
  }
  if (itemContainer.children.length === 1) {
    createBudget();
  }
};

// TOGGLE THE HOMEPAGE AND EXPENSES PAGE
viewExpenseBtn.onclick = () => {
  inputExpenses.classList.add('hide');
  expensesValues.classList.remove('hide');
};
homepageBtn.onclick = () => {
  inputExpenses.classList.remove('hide');
  expensesValues.classList.add('hide');
};

// EVENT LISTENER TO CHECK FOR DATE INPUTS
datePicker.addEventListener('change', (e) => {
  let dateValue = `${e.target.value}`;
  let dateToCheck = new Date(dateValue).toLocaleDateString();
  log(dateToCheck);
});

// SUBMIT BUTTON  EVENT LISTENER THAT UPDATES THE DETAILS IN THE ARRAY
submitBtn.addEventListener('click', () => {
  todaysDate();
  grabValues();
});

// GRAB VALUES KEYED IN
function grabValues() {
  const inputCost = document.querySelectorAll('#expense');
  const labelExpense = document.querySelectorAll('#item-expense');
  let x = Array.from(inputCost);
  let y = Array.from(labelExpense);
  log(('x', x[0].value), ('y', y[0].value));
}

// HOW OUR DATE WILL BE STORED
let dataBlock = [
  {
    item: [
      {
        budget: 10000,
        cost: [
          {
            100: '05/09/2023',
            90: '05/09/2023',
            200: '05/09/2023',
            300: '05/09/2023',
            500: '05/09/2023',
            50: '05/09/2023',
          },
        ],
      },
    ],
    item: [
      {
        budget: 10000,
        cost: [
          {
            100: '05/09/2023',
            90: '05/09/2023',
            200: '05/09/2023',
            300: '05/09/2023',
            500: '05/09/2023',
            50: '05/09/2023',
          },
        ],
      },
    ],
    item: [
      {
        budget: 10000,
        cost: [
          {
            100: '05/09/2023',
            90: '05/09/2023',
            200: '05/09/2023',
            300: '05/09/2023',
            500: '05/09/2023',
            50: '05/09/2023',
          },
        ],
      },
    ],
  },
];
