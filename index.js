document.addEventListener('DOMContentLoaded', function () {
    const customSelect = document.querySelector('.custom-select');
    const selectedOption = customSelect.querySelector('.selected-option');
    const optionsList = customSelect.querySelector('.options');
    const optionItems = customSelect.querySelectorAll('.options li');
  
    selectedOption.addEventListener('click', function () {
      optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
    });
  
    optionItems.forEach(function (item) {
      item.addEventListener('click', function () {
        selectedOption.textContent = item.textContent;
        optionsList.style.display = 'none';
      });
    });
  
    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function (event) {
      if (!customSelect.contains(event.target)) {
        optionsList.style.display = 'none';
      }
    });
  });
  