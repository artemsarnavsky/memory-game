const cards = [
    {
      name: "html",
      img:
        "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true"
    },
    {
      name: "html",
      img:
        "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true"
    },
    {
      name: "html",
      img:
        "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true"
    },
    {
      name: "html",
      img:
        "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true"
    },
    {
      name: "html",
      img:
        "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true"
    }
  ];

 var choosenCards = [];
 var choosenCardsId = [];



// перебираемо картки 
  var playCards = document.querySelectorAll("div.box");
  for (let i = 0; i < playCards.length; i++) {

    playCards[i].setAttribute("id", i) // Встановлюемо ид для кожнои картки 
    playCards[i].addEventListener("click", function (){
    this.style.backgroundImage = "url(${+shuffleArray[i].img})";
    


      });
  }
  let array = [...cards, ...cards],
    shuffleArray = array.sort(() => 0.5 - Math.random());
  
  console.log(array[1]);