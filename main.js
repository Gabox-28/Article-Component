const shareIcon = document.querySelector('.share')
const popup = document.querySelector('.popup-container')

shareIcon.addEventListener('click', togglePopup)

function togglePopup(){
    popup.classList.toggle('inactive')
    shareIcon.classList.toggle('share-black')
}