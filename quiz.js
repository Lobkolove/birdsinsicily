// Object with the data for the quiz
const quizData = {
  allodola: {
    fullScoreAnswers: ["alauda arvensis"],
    halfScoresAnswers: ["allodola", "eurasian skylark", "lodola"],
    lowerScoreAnswers: ["alauda", "skylark"],
    lowestScoreAnswers: ["alaudidae", "alaudide", "alaudidi", "lark", "larks"],
    img: "data/allodola.jpg",
    sound: "data/allodola.mp3",
    output: "<h2><i>Alauda arvensis</i></h2><br><b>Allodola</b><br>Alaudidae<br>(Eurasian skylark)",
  },
  assiolo: {
    fullScoreAnswers: ["otus scops"],
    halfScoresAnswers: ["assiolo", "eurasian skylark", "assiolo comune", "assiuolo", "eurasian scops owl", "european scops owl"],
    lowerScoreAnswers: ["otus", "scops owl"],
    lowestScoreAnswers: ["strigidae", "strigide", "strigidi", "typical owl", "true owl", "typical owls", "true owls"],
    img: "data/assiolo.jpg",
    sound: "data/assiolo.mp3",
    output: "<h2><i>Otus scops</i></h2><br><b>Assiolo</b><br>Strigidae<br>(Eurasian scops owl)",
  },
  balia_nera: {
    fullScoreAnswers: ["ficedula hypoleuca"],
    halfScoresAnswers: ["balia nera", "european pied flycatcher"],
    lowerScoreAnswers: ["ficedula", "balia"],
    lowestScoreAnswers: ["muscicapidae", "muscicapide", "muscicapidi", "flycatcher"],
    img: "data/balia nera.jpg",
    sound: "data/balia nera.mp3",
    output: "<h2><i>Ficedula hypoleuca</i></h2><br><b>Balia nera</b><br>Muscicapidae<br>(European pied flycatcher)",
  },
  codirosso: {
    fullScoreAnswers: ["phoenicurus phoenicurus"],
    halfScoresAnswers: ["codirosso", "codirosso comune", "common redstart", "redstart"],
    lowerScoreAnswers: ["phoenicurus"],
    lowestScoreAnswers: ["muscicapidae", "muscicapide", "muscicapidi", "old world flycatcher", "old world flycatchers"],
    img: "data/codirosso.jpg",
    sound: "data/codirosso.mp3",
    output: "<h2><i>Phoenicurus phoenicurus</i></h2><br><b>Codirosso</b><br>Muscicapidae<br>(Common redstart)",
  },
  capinera: {
    fullScoreAnswers: ["sylvia atricapilla"],
    halfScoresAnswers: ["capinera", "eurasian blackcap"],
    lowerScoreAnswers: ["sylvia", "blackcap"],
    lowestScoreAnswers: ["sylviidae", "silvide", "silvidi", "sylviid", "sylviids"],
    img: "data/capinera.jpg",
    sound: "data/capinera.mp3",
    output: "<h2><i>Sylvia atricapilla</i></h2><br><b>Capinera</b><br>Sylviidae<br>(Eurasian blackcap)",
  },
  cappellaccia: {
    fullScoreAnswers: ["galerida cristata"],
    halfScoresAnswers: ["cappellaccia", "crested lark"],
    lowerScoreAnswers: ["galerida"],
    lowestScoreAnswers: ["alaudidae", "alaudide", "alaudidi", "lark", "larks"],
    img: "data/cappellaccia.jpg",
    sound: "data/cappellaccia.mp3",
    output: "<h2><i>Galerida cristata</i></h2><br><b>Cappellaccia</b><br>Alaudidae<br>(Crested lark)",
  },
  cardellino: {
    fullScoreAnswers: ["carduelis carduelis"],
    halfScoresAnswers: ["cardellino", "goldfinch", "european goldfinch"],
    lowerScoreAnswers: ["carduelis"],
    lowestScoreAnswers: ["fringillidae", "fringillide", "fringillidi", "true finch", "true finches", "finch"],
    img: "data/cardellino.jpg",
    sound: "data/cardellino.mp3",
    output: "<h2><i>Carduelis carduelis</i></h2><br><b>Cardellino</b><br>Fringillidae<br>(European Goldfinch)",
  },
  fanello: {
    fullScoreAnswers: ["linaria cannabina"],
    halfScoresAnswers: ["fanello", "fanello comune", "fanello eurasiatico", "common linnet"],
    lowerScoreAnswers: ["linaria"],
    lowestScoreAnswers: ["fringillidae", "fringillidi", "true finch", "true finches", "finch"],
    img: "data/fanello.jpg",
    sound: "data/fanello.mp3",
    output: "<h2><i>Linaria cannabina</i></h2><br><b>Fanello</b> (comune)<br>Fringillidae<br>(Common linnet)",
  },
  fringuello: {
    fullScoreAnswers: ["fringilla coelebs"],
    halfScoresAnswers: ["fringuello", "common chaffinch", "chaffinch"],
    lowerScoreAnswers: ["fringilla"],
    lowestScoreAnswers: ["fringillidae", "fringillidi", "true finch", "true finches", "finch"],
    img: "data/fringuello.jpg",
    sound: "data/fringuello.mp3",
    output: "<h2><i>Fringilla coelebs</i></h2><br><b>Fringuello</b><br>Fringillidae<br>(Common chaffinch)",
  },
  gruccione: {
    fullScoreAnswers: ["merops apiaster"],
    halfScoresAnswers: ["gruccione", "gruccioni", "gruccione comune"],
    lowerScoreAnswers: ["merops"],
    lowestScoreAnswers: ["meropidae"],
    img: "data/gruccione.jpg",
    sound: "data/gruccione.mp3",
    output: "<h2><i>Merops apiaster</i></h2><br><b>Gruccione</b> (comune)<br>Meropidae<br>(European bee-eater)",
  },
  magnanina: {
    fullScoreAnswers: ["sylvia undata", "curruca undata"],
    halfScoresAnswers: ["magnanina", "dartford warbler"],
    lowerScoreAnswers: ["sylvia", "typical warbler"],
    lowestScoreAnswers: ["sylviidae", "silvide", "silvidi", "sylviid", "sylviids"],
    img: "data/magnanina.jpg",
    sound: "data/magnanina.mp3",
    output: "<h2><i>Sylvia undata</i></h2><br>(<i>Curruca undata</i>)<br><b>Magnanina</b><br>Sylviidae<br>(Dartford warbler)",
  },
  occhiocotto: {
    fullScoreAnswers: ["sylvia melanocephala", "curruca melanocephala"],
    halfScoresAnswers: ["occhiocotto", "sardinian warbler"],
    lowerScoreAnswers: ["sylvia", "typical warbler"],
    lowestScoreAnswers: ["sylviidae", "silvide", "silvidi", "sylviid", "sylviids"],
    img: "data/occhiocotto.jpg",
    sound: "data/occhiocotto.mp3",
    output: "<h2><i>Sylvia melanocephala</i></h2><br>(<i>Curruca melanocephala</i>)<br><b>Occhiocotto</b><br>Sylviidae<br>(Sardinian warbler)",
  },
  rigogolo: {
    fullScoreAnswers: ["oriolus oriolus"],
    halfScoresAnswers: ["rigogolo", "eurasian golden oriole", "common golden oriole", "golden oriole"],
    lowerScoreAnswers: ["oriolus", "oriole"],
    lowestScoreAnswers: ["oriolidae", "old world orioles", "oriolide", "oriolidi"],
    img: "data/rigogolo.jpg",
    sound: "data/rigogolo.mp3",
    output: "<h2><i>Oriolus oriolus</i></h2><br><b>Rigogolo</b><br>Oriolidae<br>(Eurasian golden oriole)",
  },
  scricciolo: {
    fullScoreAnswers: ["troglodytes troglodytes"],
    halfScoresAnswers: ["scricciolo comune", "scricciolo", "reattino", "eurasian wren"],
    lowerScoreAnswers: ["troglodytes"],
    lowestScoreAnswers: ["troglodytidae", "scricciolo", "trogloditidi"],
    img: "data/scricciolo.jpg",
    sound: "data/scricciolo.mp3",
    output: "<h2><i>Troglodytes troglodytes</i></h2><br><b>Scricciolo</b> (comune)<br>Troglodytidae<br>(Eurasian wren)",
  },
  sterpazzolina: {
    fullScoreAnswers: ["sylvia cantillans", "curruca cantillans"],
    halfScoresAnswers: ["sterpazzolina", "eastern subalpine warbler"],
    lowerScoreAnswers: ["sylvia", "typical warbler"],
    lowestScoreAnswers: ["sylviidae", "silvide", "silvidi", "sylviid", "sylviids"],
    img: "data/sterpazzolina.jpg",
    sound: "data/sterpazzolina.mp3",
    output: "<h2><i>Sylvia cantillans</i></h2><br>(<i>Curruca cantillans</i>)<br><b>Sterpazzolina</b><br>Sylviidae<br>(Eastern subalpine warbler)",
  },
  upupa: {
    fullScoreAnswers: ["upupa epops"],
    halfScoresAnswers: ["upupa comune", "plumbus", "upupa eurasiatica",  "eurasian hoopoe"],
    lowerScoreAnswers: ["upupa", "hoopoe", "hoopoes", "upupidae", "upupide", "upipidi"],
    lowestScoreAnswers: [],
    img: "data/upupa.jpg",
    sound: "data/upupa.mp3",
    output: "<h2><i>Upupa epops</i></h2><br><b>Upupa eurasiatica</b><br>Upupidae<br>(Eurasian hoopoe)",
  },
  zigoloNero: {
    fullScoreAnswers: ["emberiza cirlus"],
    halfScoresAnswers: ["zigolo nero", "cirl bunting"],
    lowerScoreAnswers: ["emberiza", "zigolo"],
    lowestScoreAnswers: ["emberizidi", "emberizide", "emberizidae", "bunting"],
    img: "data/zigolo nero.jpg",
    sound: "data/zigolo nero - song.mp3",
    output: "<h2><i>Emberiza cirlus</i></h2><br><b>Zigolo nero</b><br>Emberizidae<br>(Cirl bunting)",
  },
};

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

// -------------------- PLAY BUTTON ----------------------

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


// ----------------------------------- SHOW IMAGE -------------------------------------

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


// ---------------------------------------------------


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
  console.log(state.skipped);
  console.log(next.disabled);
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

// ------------------- FORM SUBMIT -----------------------

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
  console.log(state.partialScore);
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


// --------------------- NEXT BUTTON -----------------------

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
      console.log(currentKey);
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
