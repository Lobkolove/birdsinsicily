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
      output: "<h2><i>Merops apiaster</i></h2><br><b>Gruccione</b> (comune)<br>Meropidae<br>(European bee&#8209;eater)",
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



let keysArray = Object.keys(quizData);
const nrow = document.querySelector("#listGrid");


do {
    let currentKey = keysArray.pop();
    let firstRow = document.querySelector("body > div:nth-of-type(4)");

    if (keysArray[0]) {

        let tmpRow = document.createElement("div");
        tmpRow.setAttribute("class", "grid-container");
        tmpRow.innerHTML = nrow.innerHTML;

        tmpRow.querySelector("#listImage").src = quizData[currentKey].img;
        tmpRow.querySelector("#listAudio").src = quizData[currentKey].sound;
        tmpRow.querySelector("#listText").innerHTML = quizData[currentKey].output;

        document.body.insertBefore(tmpRow, firstRow);

    } else {

        let tmpRow = document.createElement("div");
        tmpRow.setAttribute("class", "grid-container");
        tmpRow.innerHTML = nrow.innerHTML;

        tmpRow.querySelector("#listImage").src = quizData[currentKey].img;
        tmpRow.querySelector("#listAudio").src = quizData[currentKey].sound;
        tmpRow.querySelector("#listText").innerHTML = quizData[currentKey].output;

        document.body.insertBefore(tmpRow, firstRow);

        nrow.remove();

        const lastRow = document.querySelector("body > div:last-of-type");
        lastRow.querySelector(".item3").remove();

    }

} while (keysArray[0]);


const audioElements = document.querySelectorAll('audio');

const pauseAllOtherAudios = (audioElement) => {
  for (let i = 0; i < audioElements.length; i++) {
    const audio = audioElements[i];
    if (audio != audioElement && !audio.paused) {
      audio.pause();
    }
  }
};

audioElements.forEach(function(audioElement){
  audioElement.addEventListener("play", ()=>pauseAllOtherAudios(audioElement));
});

