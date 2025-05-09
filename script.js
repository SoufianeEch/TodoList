const taskContainer = document.getElementById("task-list");
const inputBox = document.getElementById('input-box');

function addTask() {
  if (inputBox.value.trim() === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
      <svg class='checkbox unchecked' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3 4 4 3ZM5 5V19H19V5H5Z"></path></svg>
      <svg class='checkbox checked hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3 4 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path></svg>
      <span>${inputBox.value}</span>
      <button class="delete-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
      </button>
  `;

  taskContainer.append(li);
  inputBox.value = '';
}

taskContainer.addEventListener('click', (event) => {
  if (event.target.closest(".delete-btn")) {
    event.target.closest("li").remove();
  }
});

taskContainer.addEventListener('click', (event) => {
  const target = event.target;
  // Check if we clicked on SVG or path within SVG
  if (target.closest('.checkbox')) {
    const li = target.closest('li');
    const uncheckedBox = li.querySelector('.unchecked');
    const checkedBox = li.querySelector('.checked');
    
    // Toggle visibility
    if (uncheckedBox.classList.contains('hidden')) {
      uncheckedBox.classList.remove('hidden');
      checkedBox.classList.add('hidden');
      li.classList.remove('completed');
    } else {
      uncheckedBox.classList.add('hidden');
      checkedBox.classList.remove('hidden');
      li.classList.add('completed');
    }
  }
});

inputBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});