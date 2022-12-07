
const inputEl = document.getElementById("input-text")
const btnEl = document.getElementById("submit-button")
const ulEl = document.getElementById("todo-list")
const resetEl = document.getElementById("reset-button")

// console.log(inputEl);
// console.log(btnEl);
// console.log(ulEl);
// console.log(resetEl);

btnEl.addEventListener('click', function(evt){
  // console.log(evt);
  if (inputEl.value === '') return
  const li = document.createElement('li')
  // console.log(li);
  li.textContent = inputEl.value 
  // console.log(li);
  ulEl.appendChild(li)
  inputEl.value = ''
})

resetEl.addEventListener('click', function(evt){
  const listItems = document.querySelectorAll('li')
  console.log(listItems);
  listItems.remove(listItems)
  // ulEl.removeChild(listItems)
})