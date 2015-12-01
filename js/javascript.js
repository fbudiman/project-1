
var userName;
var girlZombie;
var boyZombie;
var active = false;
var lifeBar = document.getElementById("life-bar");
var lifeTimer;
var pauseGame = [];
var rightImage;
var leftImage;
var centerImage = true;

var screenOne;
var screenTwo;
var screenThree;
var screenFour;
var screenFive;
var screenSix;
var screenSeven;
var screenEight;
var screenNine;
var screenTen;
var screenEleven;
var screenTwelve;
var screenThirteen;
var screenFourteen;
var screenFifteen;

function playerStats (life, strength, name) {
  this.life = life;
  this.strength = strength;
  this.name = name;
}

function emptyLifeBar() {
  clearInterval(lifeTimer);
  alert(userName + " has died of hunger... Game over :(");
  active = false;
}

function minusLife() {
  if (active == true) {
    if (lifeBar.value > 0) {
      if (girlZombie != undefined) {
        lifeBar.value -= 2;
      } else {
        lifeBar.value -= 5;
      }
    } else {
      emptyLifeBar();
    }
  }
}

function rightImageBool() {
  rightImage = true;
  centerImage = false;
  leftImage = false;
}

function centerImageBool() {
  centerImage = true;
  leftImage = false;
  rightImage = false;
}

function leftImageBool() {
  leftImage = true;
  centerImage = false;
  rightImage = false;
}



$(function(){


  $("#intro").hide();
  $("#goals").hide();
  $("#game-start").hide();
  $("#stats-show").hide();

  $("#cityscape7").hide();
  $("#cityscape9").hide();

  $("#begin").hover(
    function() {
      $(this).animate({ color: "#700000" }, 'slow');
    },function() {
      $(this).animate({ color: "#FFFFFF" }, 'slow');
  });

  $("#begin").click(function() {
    $(this).hide();
    $("#intro").show('slow');
  });

  $("#fran-zombie").click(function() {
    userName = prompt("Your chosen zombie has forgotten her name. What would you like to name her?");
    $("#intro").hide('slow');
    $(".name").html(userName);
    $("#goals").show('slow');
    girlZombie = new playerStats("High","Low",userName);
  })

  $("#ryan-zombie").click(function() {
    userName = prompt("Your chosen zombie has forgotten his name. What would you like to name him?");
    $("#intro").hide('slow');
    $(".name").html(userName);
    $("#goals").show('slow');
    boyZombie = new playerStats("Low","High",userName);
  })

  $("#begin-game").click(function() {
    $("#goals").hide('slow');
    $("#game-start").show('slow');
    active = true;
    screenOne = true;
  })

  $("#pause").click(function() {
    if (pauseGame.length % 2 == 0) {
      active = false;
      pauseGame.push("X");
    } else {
      active = true;
      pauseGame.push("X");
    }
  })

  $("#stats").click(function() {
    $("#stats-show").toggle('slow');
    if (girlZombie != undefined) {
      $("#strength-stats").html(girlZombie.strength);
      $("#name-stats").html(girlZombie.name);
    } else {
      $("#strength-stats").html(boyZombie.strength);
      $("#name-stats").html(boyZombie.name);
    }
  });

  lifeTimer = setInterval(function(){ minusLife() }, 1000);
  //play around with timing - test out situations;


  $("#up-arrow").click(function() {
    if (active) {
      if (screenOne == true) {
        screenTwo = true;
        screenOne = false;
      } else if (screenTwo == true) {
        screenThree = true;
        screenTwo = false;
      } else if (screenThree == true){
        screenFour = true;
        screenThree = false;
      } else if (screenFour == true) {
        screenFive = true;
        screenFour = false;
      } else if (screenFive == true) {
        screenSix = true;
        screenFive = false;
      } else if (screenSix == true) {
        screenSeven = true;
        screenSix = false;
      } else if (screenSeven == true) {
        screenEight = true;
        screenSeven = false;
      } else if (screenEight == true) {
        screenNine = true;
        screenEight = false;
      } else if (screenNine == true) {
        screenTen = true;
        screenNine = false;
      } else if (screenTen == true) {
        screenEleven = true;
        screenTen = false;
      } else if (screenEleven == true) {
        screenTwelve = true;
        screenEleven = false;
      } else if (screenTwelve == true) {
        screenThirteen = true;
        screenTwelve = false;
      } else if (screenThirteen == true) {
        screenFourteen = true;
        screenThirteen = false;
      } else if (screenFourteen == true) {
        screenFifteen = true;
        screenFourteen = false;
      }
    }
  })


  $("#right-arrow").click(function() {
    if (active) {
      if (screenOne == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background2").hide('slow');
          $("#cityscape7").show('slow');
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape9").hide('slow');
          $("#background2").show('slow');
        }
      //} else if (screenTwo == true) {

      //}
      }
    }
  });

  $("#left-arrow").click(function() {
    if (active) {
      if (centerImage == true) {
        leftImageBool();
        $(this).hide();
        $("#background2").hide('slow');
        $("#cityscape9").show('slow');
      } else if (rightImage == true) {
        centerImageBool();
        $("#right-arrow").show();
        $("#cityscape7").hide('slow');
        $("#background2").show('slow');
      }
    }
  });


});

