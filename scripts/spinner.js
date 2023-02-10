const spinnerElList = document.querySelectorAll('.spinner');

function loadingSpinner(isLoading) {
  spinnerElList.forEach((el) => {
    el.classList.toggle('stop', !isLoading);
    setTimeout(() => {
      if (isLoading) {
        el.style.display = 'inline-block';
      } else {
        el.style.display = 'none';
      }
    }, 300);
  });
}

loadingSpinner(false);
