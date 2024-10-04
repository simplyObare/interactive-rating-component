const submitBtn = document.querySelector('.card__submit')
const ratingBtns = document.querySelectorAll('.card__btn')
const thankYouCard = document.querySelector('.card--thank-you')
const cardInitial = document.querySelector('.card--initial')
const ratingSelected = document.querySelector('.card__selection')

submitBtn.addEventListener('click', () => {
  cardInitial.classList.add('hidden')
  thankYouCard.classList.remove('hidden')
  thankYouCard.classList.add('card--thank-you')
  ratingSelected.innerText = `You selected ${ratingBtns[0].value} out of 5`
})
