let currentIndex = 0;
const items = document.querySelectorAll('.review-item');
const totalItems = items.length;

function showNextReview() {
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].style.display = 'flex';
}

setInterval(showNextReview, 3000)