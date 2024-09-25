document.querySelectorAll('.question').forEach(question => {
  const plusButton = question.querySelector('.plus');
  const minusButton = question.querySelector('.minus');
  const displayText = question.querySelector('p');

  plusButton.addEventListener('click', () => {
    displayText.classList.remove('hide');
    minusButton.classList.remove('hide');
    plusButton.classList.add('hide');
  });

  minusButton.addEventListener('click', () => {
    displayText.classList.add('hide');
    plusButton.classList.remove('hide');
    minusButton.classList.add('hide');
  });
});






