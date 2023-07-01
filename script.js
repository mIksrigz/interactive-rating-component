window.addEventListener('load', () => {
  const card = document.querySelector('.wrapper');
  const rateDisplay = document.querySelector('.rate-display');
  const postRateDisplay = document.querySelector('.post-rate-display');
  const selectedRating = document.querySelector('.selected-rating');
  let rating = 0;
  let previousButton = 0;
  card.addEventListener('click', e => {
    if (e.target.matches('button')) {
      if (e.target.matches('.buttonRating')) {
        rating = e.target.textContent;
        if (previousButton !== 0) previousButton.classList.toggle('active');
        e.target.classList.toggle('active');
        previousButton = e.target;
      }
      if (e.target.matches('.submit-button') && rating != 0) {
        rateDisplay.classList.toggle('hide');
        postRateDisplay.classList.toggle('hide');
        selectedRating.textContent = rating;
      }
    }
  })
});