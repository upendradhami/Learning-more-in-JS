let tableData = document.querySelector('.tbody');

// Initial rendering of input row
tableData.innerHTML = `
  <tr class="input-row">
    <td><input type="text" class="input" placeholder="Input your todo here: "></td>
    <td><button class="add">Add</button></td>
  </tr>
`;

// Use event delegation for all clicks inside tbody
tableData.addEventListener('click', function (event) {
  if (event.target.classList.contains('add')) {
    const inputField = document.querySelector('.input');
    const todoValue = inputField.value.trim();

    if (todoValue !== "") {
      // Insert a new row before the input row
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${todoValue}</td>
        <td><button class="remove">Remove</button></td>
      `;
      tableData.insertBefore(newRow, document.querySelector('.input-row'));
      inputField.value = "";
    }
  }
      
  // H  andle remove
  if (event.target.classList.contains('remove')) {
    const rowToRemove = event.target.closest('tr');
    rowToRemove.remove();
  }
});
