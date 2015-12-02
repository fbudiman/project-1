
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

$('body').css('visibility', 'visible');

  $("#intro").hide();
  $("#goals").hide();
  $("#game-start").hide();
  $("#stats-show").hide();

  $("#cityscape7").hide();
  $("#cityscape9").hide();

  $("#background2X").hide();
  $("#cityscape8").hide();
  $("#cityscape17").hide();

  $("#background3").hide();
  $("#cityscape1").hide();

  $("#background3X").hide();
  $("#cityscape6").hide();
  $("#cityscape11").hide();

  $("#background4").hide();
  $("#cityscape22").hide();

  $("#background4X").hide();
  $("#cityscape3").hide();
  $("#cityscape15").hide();

  $("#background5").hide();
  $("#cityscape2").hide();
  $("#cityscape10").hide();

  $("#background5X").hide();
  $("#cityscape16").hide();

  $("#background6").hide();
  $("#cityscape20").hide();

  $("#background6X").hide();
  $("#cityscape4").hide();

  $("#background7").hide();
  $("#cityscape5").hide();
  $("#cityscape13").hide();

  $("#background7X").hide();
  $("#cityscape14").hide();
  $("#cityscape19").hide();

  $("#background8").hide();
  $("#cityscape12").hide();

  $("#background8X").hide();
  $("#cityscape18").hide();
  $("#cityscape21").hide();

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

  lifeTimer = setInterval(function(){ minusLife() }, 10000);
  //play around with timing - test out situations;


  $("#up-arrow").click(function() {
    if (active) {
      if (centerImage == true) {
        if (screenOne == true) {
          screenTwo = true;
          screenOne = false;
          $("#background2X").show('slow');
          $("#background2").hide();
          $("#cityscape7").hide();
          $("#cityscape9").hide();
        } else if (screenTwo == true) {
          screenThree = true;
          screenTwo = false;
          $("#background3").show('slow');
          $("#background2X").hide();
          $("#cityscape8").hide();
          $("#cityscape17").hide();
        } else if (screenThree == true){
          screenFour = true;
          screenThree = false;
          $("#background3X").show('slow');
          $("#background3").hide();
          $("#cityscape1").hide();
        } else if (screenFour == true) {
          screenFive = true;
          screenFour = false;
          $("#background4").show('slow')
          $("#background3X").hide();
          $("#cityscape6").hide();
          $("#cityscape11").hide();
        } else if (screenFive == true) {
          screenSix = true;
          screenFive = false;
          $("#background4X").show('slow');
          $("#background4").hide();
          $("#cityscape22").hide();
        } else if (screenSix == true) {
          screenSeven = true;
          screenSix = false;
          $("#background5").show('slow');
          $("#background4X").hide();
          $("#cityscape3").hide();
          $("#cityscape15").hide();
        } else if (screenSeven == true) {
          screenEight = true;
          screenSeven = false;
          $("#background5X").show('slow');
          $("#background5").hide();
          $("#cityscape2").hide();
          $("#cityscape10").hide();
        } else if (screenEight == true) {
          screenNine = true;
          screenEight = false;
          $("#background6").show('slow');
          $("#background5X").hide();
          $("#cityscape16").hide();
        } else if (screenNine == true) {
          screenTen = true;
          screenNine = false;
          $("#background6X").show('slow');
          $("#background6").hide();
          $("#cityscape20").hide();
        } else if (screenTen == true) {
          screenEleven = true;
          screenTen = false;
          $("#background7").show('slow');
          $("#background6X").hide();
          $("#cityscape4").hide();
        } else if (screenEleven == true) {
          screenTwelve = true;
          screenEleven = false;
          $("#background7X").show('slow');
          $("#background7").hide();
          $("#cityscape5").hide();
          $("#cityscape13").hide();
        } else if (screenTwelve == true) {
          screenThirteen = true;
          screenTwelve = false;
          $("#background8").show('slow');
          $("#background7X").hide();
          $("#cityscape14").hide();
          $("#cityscape19").hide();
        } else if (screenThirteen == true) {
          screenFourteen = true;
          screenThirteen = false;
          $("#background8X").show('slow');
          $("#background8").hide();
          $("#cityscape12").hide();
        } else if (screenFourteen == true) {
          screenFifteen = true;
          screenFourteen = false;
        }
      } else {
        alert("You can only go forward from the center path!");
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
      } else if (screenTwo == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background2X").hide('slow');
          $("#cityscape8").show('slow');
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape17").hide('slow');
          $("#background2X").show('slow');
        }
      } else if (screenThree == true) {
        if (centerImage == true) {
          alert("Path to the right is blocked!");
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape1").hide('slow');
          $("#background3").show('slow');
        }
      } else if (screenFour == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background3X").hide('slow');
          $("#cityscape6").show('slow');
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape11").hide('slow');
          $("#background3X").show('slow');
        }
      } else if (screenFive == true) {
        if (centerImage == true) {
          alert("There's a fallen tree blocking the path to the right!");
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape22").hide('slow');
          $("#background4").show('slow');
        }
      } else if (screenSix == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background4X").hide('slow');
          $("#cityscape3").show('slow');
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape15").hide('slow');
          $("#background4X").show('slow');
        }
      } else if (screenSeven == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background5").hide('slow');
          $("#cityscape2").show('slow');
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape10").hide('slow');
          $("#background5").show('slow');
        }
      } else if (screenEight == true) {
        if (centerImage == true) {
          alert("There is no path to the right.")
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape16").hide('slow');
          $("#background5X").show('slow');
        }
      } else if (screenNine == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background6").hide('slow');
          $("#cityscape20").show('slow');
        } else if (leftImage == true) {
        }
      } else if (screenTen == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background6X").hide('slow');
          $("#cityscape4").show('slow');
        } else if (leftImage == true) {
        }
      } else if (screenEleven == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background7").hide('slow');
          $("#cityscape5").show('slow');
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape13").hide('slow');
          $("#background7").show('slow');
        }
      } else if (screenTwelve == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background7X").hide('slow');
          $("#cityscape14").show('slow');
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape19").hide('slow');
          $("#background7X").show('slow');
        }
      } else if (screenThirteen == true) {
        if (centerImage == true) {
          alert("The right path is blocked.");
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape12").hide('slow');
          $("#background8").show('slow');
        }
      } else if (screenFourteen == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background8X").hide('slow');
          $("#cityscape18").show('slow');
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape21").hide('slow');
          $("#background8X").show('slow');
        }
      } else if (screenFifteen == true) {

      }
    }
  });

  $("#left-arrow").click(function() {
    if (active) {
      if (screenOne == true) {
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
      } else if (screenTwo == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background2X").hide('slow');
          $("#cityscape17").show('slow');
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape8").hide('slow');
          $("#background2X").show('slow');
        }
      } else if (screenThree == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background3").hide('slow');
          $("#cityscape1").show('slow');
        } else if (rightImage == true) {
        }
      } else if (screenFour == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background3X").hide('slow');
          $("#cityscape11").show('slow');
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape6").hide('slow');
          $("#background3X").show('slow');
        }
      } else if (screenFive == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background4").hide('slow');
          $("#cityscape22").show('slow');
        } else if (rightImage == true) {
        }
      } else if (screenSix == true) {
        if (centerImage == true) {
          alert("There is nothing to the left.");
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape3").hide('slow');
          $("#background4X").show('slow');
        }
      } else if (screenSeven == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background5").hide('slow');
          $("#cityscape10").show('slow');
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape2").hide('slow');
          $("#background5").show('slow');
        }
      } else if (screenEight == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background5X").hide('slow');
          $("#cityscape16").show('slow');
        } else if (rightImage == true) {
        }
      } else if (screenNine == true) {
        if (centerImage == true) {
          alert("To the left is some tainted lake... Nothing there.");
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape20").hide('slow');
          $("#background6").show('slow');
        }
      } else if (screenTen == true) {
        if (centerImage == true) {
          alert("The path to the left is blocked!");
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape4").hide('slow');
          $("#background6X").show('slow');
        }
      } else if (screenEleven == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background7").hide('slow');
          $("#cityscape13").show('slow');
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape5").hide('slow');
          $("#background7").show('slow');
        }
      } else if (screenTwelve == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background7X").hide('slow');
          $("#cityscape19").show('slow');
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape14").hide('slow');
          $("#background7X").show('slow');
        }
      } else if (screenThirteen == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background8").hide('slow');
          $("#cityscape12").show('slow');
        } else if (rightImage == true) {
        }
      } else if (screenFourteen == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background8X").hide('slow');
          $("#cityscape21").show('slow');
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape18").hide('slow');
          $("#background8X").show('slow');
        }
      } else if (screenFifteen == true) {

      }
    }
  });


});

