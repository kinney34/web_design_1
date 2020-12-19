let reviews = document.getElementsByClassName('review-wrapper');
let numReviews = reviews.length;
let moving = true;
let index = 0;

function setInitialClasses() {
  reviews[numReviews - 1].classList.add('prev');
  reviews[0].classList.add('active');
  reviews[1].classList.add('next');
}

function setEventListeners() {
  document.getElementById('right-nav-button').addEventListener('click', moveNext);
  document.getElementById('left-nav-button').addEventListener('click', movePrev);
}

function moveNext() {
  if (!moving) {
    index = (index + 1) % numReviews;
    moveCarouselTo(index);
  }
}

function movePrev() {
  if (!moving) {
    if (index == 0) {
      index = numReviews - 1;
    } else {
      index--;
    }
    moveCarouselTo(index);
  }
}

function disableInteraction() {
  moving = true;
  setTimeout(function() {
    moving = false
  }, 500);
}

function moveCarouselTo(index) {
  if (!moving) {
    disableInteraction();
    let newPrevious = index - 1,
      newNext = index + 1,
      oldPrevious = index - 2,
      oldNext = index + 2;

    if ((numReviews - 1) > 3) {
      if (newPrevious <= 0) {
        oldPrevious = numReviews - 1;
      } else if (newNext >= (numReviews - 1)) {
        oldNext = 0;
      }

      if (index == 0) {
        newPrevious = numReviews - 1;
        oldPrevious = numReviews - 2;
      } else if (index == (numReviews - 1)) {
        newPrevious = index - 1;
        newNext = 0;
        oldNext = 1;
      }

      reviews[oldPrevious].className = 'review-wrapper';
      reviews[oldNext].className = 'review-wrapper';
      reviews[newPrevious].className = 'review-wrapper prev';
      reviews[newNext].className = 'review-wrapper next';
      reviews[index].className = 'review-wrapper active';
    }
  }
}

function initCarousel() {
  setInitialClasses();
  setEventListeners();
  moving = false;
}

initCarousel();
