let currentOpenDetails = null;

function toggleDetails(id) {
    const details = document.getElementById(id);

    if (currentOpenDetails === details) {
        details.classList.toggle('show');
        currentOpenDetails = null;
    } else {
        if (currentOpenDetails) {
            currentOpenDetails.classList.remove('show');
        }
        details.classList.add('show');
        currentOpenDetails = details;
    }
}