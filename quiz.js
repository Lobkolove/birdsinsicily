import { quizData } from "./data.js";

const keysArray = Object.keys(quizData);

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

let randomKeys = shuffle(keysArray);
let currentKey = randomKeys.pop();

const state = {
  current: quizData[currentKey],
  total: 0,
  partialScore: 0,
  highScore: 0,
  shownHint: false,
  skipped: 0,
  submitted: false,
  count: 0,
  espired: false,
};

const photo = document.querySelector("#card_img");
const audioSource = document.querySelector("#audio_source");
const next = document.querySelector("#next");

photo.src = state.current.img;
audioSource.src = state.current.sound;


const play_btn = document.querySelector("#play_btn");
const icon = document.querySelector("#icon");
let playstate = "paused";

const playAudio = () => {
  icon.innerHTML = "pause_circle";
  play_btn.style.opacity = 0.8;
  audioSource.play();
  playstate = "playing";
}

const pauseAudio = () => {
  icon.innerHTML = "play_circle";
  play_btn.style.opacity = 1;
  audioSource.pause();
  playstate = "paused";
}

play_btn.addEventListener("click", function () {
  if (playstate === "paused") {
    playAudio();
  } else {
    pauseAudio();
  }
});

audioSource.addEventListener("ended", function () {
  icon.innerHTML = "replay";
  play_btn.style.opacity = 1;
  playstate = "paused";
});

audioSource.addEventListener("play", playAudio);
audioSource.addEventListener("pause", pauseAudio);


const card = document.querySelector('#card');

const showHint = () => {
  photo.style.display = "inline";
  button.style.display = "none";
  state.shownHint = true;
  card.scrollIntoView();
};

const hideHint = () => {
  photo.style.display = "none";
  button.style.display = "inline";
  state.shownHint = false;
  card.scrollIntoView();
};

const button = document.querySelector("#show_img");
const inpt = document.querySelector("#answer");

button.addEventListener("click", showHint);


const before = document.querySelectorAll(".before");
const after = document.querySelectorAll(".after");
const end = document.querySelectorAll(".end");

const img_div = document.querySelector('#img_div');
const res_div = document.querySelector('#res_div');
const bird = document.querySelector("#bird_div");

const showRes = () => {
  before.forEach(function (element) {
    element.style.display = "none";
  });

  after.forEach(function (element) {
    element.style.display = "inline";
  });
};

const hideRes = () => {
  after.forEach(function (element) {
    element.style.display = "none";
  });

  before.forEach(function (element) {
    element.style.display = "inline";
  });

  end.forEach(function (element) {
    element.style.display = "none";
  });

  inpt.value = "";

  card.scrollIntoView();
};

const showEnd = () => {
  after.forEach(function (element) {
    element.style.display = "none";
  });

  before.forEach(function (element) {
    element.style.display = "none";
  });

  end.forEach(function (element) {
    element.style.display = "inline";
  });

  play_btn.style.display = "none";
  pauseAudio();
  img_div.style.display = "none";

  card.scrollIntoView();
};

const toSkip = () => {
  next.innerHTML = `Skip card (${2 - state.skipped})`;
  next.setAttribute("class", "btn btn-danger btn-lg");
  if (state.skipped > 1) {
    next.disabled = true;
  }
};

const toNext = () => {
  next.setAttribute("class", "btn btn-success btn-lg");
  next.innerHTML = "Next card";
  next.disabled = false;
};

const toEnd = () => {
  next.innerHTML = "Play again!";
  next.setAttribute("class", "btn btn-info btn-lg");
};

const resetState = () => {
    let randomKeys = shuffle(keysArray);
    state.total = 0;
    state.partialScore = 0;
    state.shownHint = false;
    state.skipped = 0;
    state.count = 0;
};


const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  state.submitted = true;
  state.count++;

  const answer = document.querySelector("#answer").value.toLowerCase();

  const getScore = (answer) => {
    if (state.current.fullScoreAnswers.includes(answer)) {
      return 600;
    } else if (state.current.halfScoresAnswers.includes(answer)) {
      return 500;
    } else if (state.current.lowerScoreAnswers.includes(answer)) {
      return 300;
    } else if (state.current.lowestScoreAnswers.includes(answer)) {
      return 100;
    } else {
      return 0;
    }
  };

  let divider = state.shownHint ? 2 : 1;

  state.partialScore = getScore(answer) / divider;
  state.total += state.partialScore;
  document.querySelector("#results").innerHTML =
    state.current.output;
  document.querySelector("#points").innerHTML =
    `Points: ${state.partialScore}!`;

  document.querySelector("#total").innerHTML = `Total: ${state.total}`;

  showHint();
  showRes();

  toNext();

  if (divider === 2) {
    next.focus();
  }
  else {
    photo.scrollIntoView();
  }

});


const endScoreText = document.querySelector("#end_score");
const highScoreText = document.querySelector("#high_score");

next.addEventListener("click", function () {

  const pst_div = document.querySelector("#pts_div");
  const pts_line = document.querySelector("#pts_line");

  if (!state.submitted) {
    state.skipped += 1;
    showHint();
    document.querySelector("#results").innerHTML = state.current.output;
    showRes();
    pts_div.style.display = "none";
    pts_line.style.display = "none";
    toNext();
    state.submitted = true;
  }
  else {
    if (state.count < 5) {
      hideHint();
      hideRes();
      toSkip();

      // For the case this is a click to start a new round:
      img_div.style.display = "block";

      let currentKey = randomKeys.pop();
      if (currentKey) {
        state.current = quizData[currentKey];
        photo.src = state.current.img;
        audioSource.src = state.current.sound;
      } else {
        window.location.href = "index.html";
      }
      pauseAudio();
      play_btn.style.display = "inline";
      play_btn.focus();
      state.submitted = false;
    }
    else
    {
      toEnd();

      if (state.total > state.highScore) {
        state.highScore = state.total;
      }
      endScoreText.innerHTML = `Total score: ${state.total}!`;
      highScoreText.innerHTML = `Highscore: ${state.highScore}!`

      showEnd();
      resetState();
    }
  };

});


document.addEventListener("keypress", function(event){
  if (event.key === 'Enter' || event.key === ' '){
    if (next != document.activeElement && state.submitted) {
      next.focus();
    }
  }
});