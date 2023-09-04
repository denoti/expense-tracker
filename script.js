let { log } = console;
const addBtn = document.querySelector('.add');
const submitBtn = document.querySelector('.submit');
const itemContainer = document.querySelector('.item-container');

function createBudget() {
  let valueContainer = document.createElement('div');
  valueContainer.classList.add('value-container');
  let label = document.createElement('label');
  label.textContent = 'Budget';
  label.contentEditable = true;
  let input = document.createElement('input');
  input.setAttribute('id', 'budget');
  input.setAttribute('type', 'number');
  valueContainer.append(label, input);
  itemContainer.appendChild(valueContainer);
}

function createExpense() {
  let valueContainer = document.createElement('div');
  valueContainer.classList.add('value-container');
  let label = document.createElement('label');
  label.textContent = 'Item';
  label.contentEditable = true;
  let input = document.createElement('input');
  input.setAttribute('id', 'expense');
  input.setAttribute('type', 'number');
  valueContainer.append(label, input);
  itemContainer.appendChild(valueContainer);
}

addBtn.onclick = () => {
  if (itemContainer.children.length !== 1) {
    createExpense();
    createBudget();
  }
  if (itemContainer.children.length === 1) {
    createBudget();
  }
  log(itemContainer.children.length);
};

log(itemContainer.children.length)