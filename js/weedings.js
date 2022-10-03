weedingItems = document.querySelectorAll('.wrapper-1-item');

weedingItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      weedingItems.forEach((item) => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
      item.classList.add('active');
    }
  });
});
