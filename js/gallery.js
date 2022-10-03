/* Changing the photo contects */

const menuContainers = document.querySelectorAll('.gallery-content');

function showGallery(number) {
  menuContainers.forEach((container) => {
    if (!container.classList.contains('hidden')) {
      container.classList.add('hidden');
    }
  });
  document.querySelector(`.type-${number}`).classList.remove('hidden');
}

/* Showing & logic of the gallery */

let galleryImages = document.querySelectorAll('.gallery-box');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
let imgPath;
let imgPathSlices;

if (galleryImages) {
  galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue('background-image');
      let getImgUrlPos = getFullImgUrl.split('/img/');
      let setNewImgUrl = getImgUrlPos[1].replace('")', '');

      getLatestOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement('div');
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute('class', 'img-window');
      newImgWindow.setAttribute('onclick', 'closeImg()');

      let newImg = document.createElement('img');
      newImgWindow.appendChild(newImg);
      imgPath = setNewImgUrl.split('/thumbnails/');
      newImg.setAttribute('src', `/assets/img/gallery/fullsize/${imgPath[1]}`);
      newImg.setAttribute('id', 'current-img');

      newImg.onload = function () {
        let imgWidth = this.width;
        let number = (windowWidth - imgWidth) / 2;
        let calcImgToEdge = number - 50;

        let newNextBtn = document.createElement('button');
        newNextBtn.setAttribute('class', 'gallery-next-btn');
        newNextBtn.setAttribute('onclick', 'changeImg(1)');
        container.appendChild(newNextBtn);
        newNextBtn.style.cssText = `right: ${calcImgToEdge}px`;

        let newPrevBtn = document.createElement('button');
        newPrevBtn.setAttribute('class', 'gallery-prev-btn');
        newPrevBtn.setAttribute('onclick', 'changeImg(0)');
        container.appendChild(newPrevBtn);
        newPrevBtn.style.cssText = `left: ${calcImgToEdge}px`;
      };
    });
  });
}

function closeImg() {
  document.querySelector('.img-window').remove();
  document.querySelector('.gallery-next-btn').remove();
  document.querySelector('.gallery-prev-btn').remove();
}

function changeImg(changeDir) {
  document.querySelector('#current-img').remove();

  let getImgWindow = document.querySelector('.img-window');
  let newImg = document.createElement('img');
  getImgWindow.appendChild(newImg);

  imgPathSlices = imgPath[1].split('-');
  let slice1 = imgPathSlices[2].split('.jpg');

  let calcNewImg;
  if (changeDir) {
    calcNewImg = getLatestOpenedImg + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else {
    calcNewImg = getLatestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }

  newImg.setAttribute(
    'src',
    `/assets/img/gallery/fullsize/${imgPathSlices[0]}-${imgPathSlices[1]}-${calcNewImg}.jpg`
  );
  newImg.setAttribute('id', 'current-img');
  getLatestOpenedImg = calcNewImg;

  newImg.onload = function () {
    let imgWidth = this.width;
    let calcImgToEdge = (windowWidth - imgWidth) / 2 - 100;

    let nextBtn = document.querySelector('.gallery-next-btn');
    nextBtn.style.cssText = `right: ${calcImgToEdge}px`;
    let prevBtn = document.querySelector('.gallery-prev-btn');
    prevBtn.style.cssText = `left: ${calcImgToEdge}px`;
  };
}

document.addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode !== 39) {
    return;
  } else {
    changeImg(1);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode !== 37) {
    return;
  } else {
    changeImg(0);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.isComposing || e.keyCode !== 27) {
    return;
  }
  closeImg();
});
