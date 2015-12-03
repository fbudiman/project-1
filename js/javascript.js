
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
var userObjects = [];
var fungusCollection = [];

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

var yellowShirt;
var yellowShirtConfirm;
var metalHelmetConfirm;
var halloweenMaskConfirm;
var digitalWatch;
var digitalWatchConfirm;
var hardHatConfirm;
var sunglassesConfirm;
var flashlight;
var flashlightConfirm;

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
  if (active) {
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

function humanAttack() {
  if (active) {
    if (girlZombie != undefined) {
      lifeBar.value -= 10;
    } else {
      lifeBar.value -= 5;
    }
  }
}

function eatHumanBrain() {
  if (active) {
    lifeBar.value += 5;
  }
}

function specialAttack() {
  if (active) {
    if (girlZombie != undefined) {
      lifeBar.value -= 15;
    } else {
      lifeBar.value -= 10;
    }
  }
}

function checkForBadObjects() {
  if (userObjects.length > 0) {
    for (i in userObjects) {
      if (userObjects[i] == "Yellow Shirt") {
        specialAttack();
        yellowShirtConfirm = true;
        yellowShirt = prompt("Unfortunately that yellow shirt cost you big time. It was too bright so this human spotted you clearly and attacked extra hard. Would you like to discard?");
        if (yellowShirt == "yes") {
          var yellowIndex = userObjects.indexOf("Yellow Shirt");
          userObjects.splice(yellowIndex,1);
        } else {
          alert("Ok.. Your loss.");
        }
      } else if (userObjects[i] == "Digital Watch") {
          digitalWatchConfirm = true;
          specialAttack();
          digitalWatch = prompt("That digital watch messed you up big time. There was an alarm set, and it went off as you were trying to eat this human brain... and they managed to get a clear shot and hurt you good. Discard?");
          if (digitalWatch == "yes") {
            var digitalIndex = userObjects.indexOf("Digital Watch");
            userObjects.splice(digitalIndex,1);
          } else {
            alert("Ok.. your loss.");
          }
      } else if (userObjects[i] == "Flashlight Headband") {
          flashlightConfirm = true;
          specialAttack();
          flashlight = prompt("That flashlight headband didn't do you any good... All it did was give yourself away by shining light! That human saw you and attacked. Discard?")
          if (flashlight == "yes") {
            var flashlightIndex = userObjects.indexOf("Flashlight Headband");
            userObjects.splice(flashlightIndex,1);
          } else {
            alert("Ok.. Your loss.");
          }
      } else {
        eatHumanBrain();
      }
    }
  } else {
      eatHumanBrain();
  }
}

function checkForProtection() {
  if (userObjects.length > 0) {
    for (i in userObjects) {
      if (userObjects[i] == "Metal Helmet") {
        metalHelmetConfirm = true;
        alert("He fought back and attacked you, but you had your metal helmet on! You managed to get away. The metal helmet broke during the attack.");
        var metalIndex = userObjects.indexOf("Metal Helmet");
        userObjects.splice(metalIndex,1);
      } else if (userObjects[i] == "Halloween Mask") {
          halloweenMaskConfirm = true;
          alert("The Halloween mask fooled the humans into thinking you were one of them! But they did rip it off you right before you got away.");
          var halloweenlIndex = userObjects.indexOf("Halloween Mask");
          userObjects.splice(halloweenIndex,1);
      } else if (userObjects[i] == "Hard Hat") {
          hardHatConfirm = true;
          alert("This human saw you coming and attacked back, but that hard hat really saved you! It did break in the process, but you managed to get away.");
          var hardHatIndex = userObjects.indexOf("Hard Hat");
          userObjects.splice(hardHatIndex,1);
      } else if (userObjects[i] == "Sunglasses") {
          sunglassesConfirm = true;
      } else {
          humanAttack();
      }
    }
  } else {
    humanAttack();
  }
}

$(function(){

$('body').css('visibility', 'visible');

  $("#intro").hide();
  $("#goals").hide();
  $("#game-start").hide();
  $("#stats-show").hide();

  $(".game-images").hide();
  $("#background2").show();

  $(".text-hide").hide();

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
        } else if (screenTwo == true) {
          screenThree = true;
          screenTwo = false;
          $("#background3").show('slow');
          $("#background2X").hide();
        } else if (screenThree == true){
          screenFour = true;
          screenThree = false;
          $("#background3X").show('slow');
          $("#background3").hide();
        } else if (screenFour == true) {
          screenFive = true;
          screenFour = false;
          $("#background4").show('slow')
          $("#background3X").hide();
        } else if (screenFive == true) {
          screenSix = true;
          screenFive = false;
          $("#background4X").show('slow');
          $("#background4").hide();
        } else if (screenSix == true) {
          screenSeven = true;
          screenSix = false;
          $("#background5").show('slow');
          $("#background4X").hide();
        } else if (screenSeven == true) {
          screenEight = true;
          screenSeven = false;
          $("#background5X").show('slow');
          $("#background5").hide();
        } else if (screenEight == true) {
          screenNine = true;
          screenEight = false;
          $("#background6").show('slow');
          $("#background5X").hide();
        } else if (screenNine == true) {
          screenTen = true;
          screenNine = false;
          $("#background6X").show('slow');
          $("#background6").hide();
        } else if (screenTen == true) {
          screenEleven = true;
          screenTen = false;
          $("#background7").show('slow');
          $("#background6X").hide();
        } else if (screenEleven == true) {
          screenTwelve = true;
          screenEleven = false;
          $("#background7X").show('slow');
          $("#background7").hide();
        } else if (screenTwelve == true) {
          screenThirteen = true;
          screenTwelve = false;
          $("#background8X").show('slow');
          $("#background7X").hide();
        } else if (screenThirteen == true) {
          screenFourteen = true;
          screenThirteen = false;
          $("#background8").show('slow');
          $("#background8X").hide();
        } else if (screenFourteen == true) {
          screenFifteen = true;
          screenFourteen = false;
          $("#lab2").show('slow');
          $("#background8").hide();
          alert("You made it to the lab! Head over to the right to get the process started...");
          //change alert to message?
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
          $("#background8X").show('slow');
        }
      } else if (screenFourteen == true) {
        if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#background8").hide('slow');
          $("#cityscape18").show('slow');
        } else if (leftImage == true) {
          centerImageBool();
          $("#left-arrow").show();
          $("#cityscape21").hide('slow');
          $("#background8").show('slow');
        }
      } else if (screenFifteen == true) {
          if (centerImage == true) {
          rightImageBool();
          $(this).hide();
          $("#lab2").hide('slow');
          $("#lab3").show('slow');
          if (fungusCollection.length < 6) {
            alert("Uh oh... you only had " + fungusCollection.length + " zombie-strain fungi with you. The scientists had to put you down as a failed attempt.")
            //change to message?
            active = false;
          } else {
            alert("You made it to the lab safely and you brought all the right zombie-strain fungi! Let the dezombifying begin.");
            //change to message?
            active = false;
            if (sunglassesConfirm == true) {
              alert("The scientists think you'll be a real cool human with those sunglasses you picked up. Free cool points.");
            }
          }
        }
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
          leftImageBool();
          $(this).hide();
          $("#background4X").hide('slow');
          $("#cityscape15").show('slow');
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
          $("#background8X").hide('slow');
          $("#cityscape12").show('slow');
        } else if (rightImage == true) {
        }
      } else if (screenFourteen == true) {
        if (centerImage == true) {
          leftImageBool();
          $(this).hide();
          $("#background8").hide('slow');
          $("#cityscape21").show('slow');
        } else if (rightImage == true) {
          centerImageBool();
          $("#right-arrow").show();
          $("#cityscape18").hide('slow');
          $("#background8").show('slow');
        }
      } else if (screenFifteen == true) {
        if (rightImage == true) {
          active = false;
        }
      }
    }
  });

  $(".hover-msg").attr('title', '!!!');

// ADD IF ACTIVE FOR EVERY SINGLE FUNCTIONS!!!

  $("#yellow-shirt").click(function() {
    var answer1 = prompt("You found a random yellow shirt. Put it on?").toLowerCase();
    if (answer1 == "yes") {
      userObjects.push("Yellow Shirt");
      $(this).unbind('click');
    }
  })
  $("#metal-helmet").click(function() {
    var answer2 = prompt("You found a metal helmet. Put it on?").toLowerCase();
    if (answer2 == "yes") {
      userObjects.push("Metal Helmet");
      $(this).unbind('click');
    }
  })
  $("#halloween-mask").click(function() {
    var answer3 = prompt("You found a Halloween mask. Put it on?").toLowerCase();
    if (answer3 == "yes") {
      userObjects.push("Halloween Mask");
      $(this).unbind('click');
    }
  })
  $("#digital-watch").click(function() {
    var answer4 = prompt("You found a digital watch. It still works. Put it on?").toLowerCase();
    if (answer4 == "yes") {
      userObjects.push("Digital Watch");
      $(this).unbind('click');
    }
  })
  $("#hard-hat").click(function() {
    var answer5 = prompt("You found a hard hat. Put it on?").toLowerCase();
    if (answer5 == "yes") {
      userObjects.push("Hard Hat");
      $(this).unbind('click');
    }
  })
  $("#sunglasses").click(function() {
    var answer6 = prompt("You found a pair of sunglasses. Put it on?").toLowerCase();
    if (answer6 == "yes") {
      userObjects.push("Sunglasses");
      $(this).unbind('click');
    }
  })
  $("#flashlight-headband").click(function() {
    var answer7 = prompt("You found a flashlight headband. It's turned on. Put it on or no?").toLowerCase();
    if (answer7 == "yes") {
      userObjects.push("Flashlight Headband");
      $(this).unbind('click');
    }
  })

  $("#fungus-a").click(function() {
    alert("You found zombie-strain fungus A!");
    fungusCollection.push("Fungus-A");
    $(this).unbind('click');
  })
  $("#fungus-b").click(function() {
    alert("You found zombie-strain fungus B!");
    fungusCollection.push("Fungus-B");
    $(this).unbind('click');
  })
  $("#fungus-c").click(function() {
    alert("You found zombie-strain fungus C!");
    fungusCollection.push("Fungus-C");
    $(this).unbind('click');
  })
  $("#fungus-d").click(function() {
    alert("You found zombie-strain fungus D!");
    fungusCollection.push("Fungus-D");
    $(this).unbind('click');
  })
  $("#fungus-e").click(function() {
    alert("You found zombie-strain fungus E!");
    fungusCollection.push("Fungus-E");
    $(this).unbind('click');
  })
  $("#fungus-f").click(function() {
    alert("You found zombie-strain fungus F!");
    fungusCollection.push("Fungus-F");
    $(this).unbind('click');
  })
    $("#fungus-g").click(function() {
    alert("You found zombie-strain fungus G!");
    fungusCollection.push("Fungus-G");
    $(this).unbind('click');
  })
  $("#fungus-x").click(function() {
    alert("You found zombie-strain fungus X!");
    fungusCollection.push("Fungus-X");
    $(this).unbind('click');
  })
  $("#fungus-y").click(function() {
    alert("You found zombie-strain fungus Y!");
    fungusCollection.push("Fungus-Y");
    $(this).unbind('click');
  })
  $("#fungus-z").click(function() {
    alert("You found zombie-strain fungus Z!");
    fungusCollection.push("Fungus-Z");
    $(this).unbind('click');
  })

  $("#human1").click(function() {
    var answer8 = prompt("A group of 3... Looks like this one is the smallest of the 3. Eat this human's brain?").toLowerCase();
    if (answer8 == "yes") {
      eatHumanBrain();
      //add message saying you gained
      $(this).unbind('click');
    }
  })
  $("#human2").click(function() {
    var answer9 = prompt("A group of 3 is more difficult than a single person... Eat this human's brain? Be careful.").toLowerCase();
    if (answer9 == "yes") {
      eatHumanBrain();
      //add message
      $(this).unbind('click');
    }
  })
  $("#human3").click(function() {
    var answer10 = prompt("A group of 3... This one is carrying something. Eat this brain?").toLowerCase();
    if (answer10 == "yes") {
      humanAttack();
      //add message you lost
      $(this).unbind('click');
    }
  })
  $("#human4").click(function() {
    var answer11 = prompt("A solo traveler.. this should be easy. Eat this human's brain?").toLowerCase();
    if (answer11 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human5").click(function() {
    var answer12 = prompt("A solo traveler.. this could be easy. Looks like he has a weapon though. Eat this human's brain?").toLowerCase();
    if (answer12 == "yes") {
      humanAttack();
      //message
      $(this).unbind('click');
    }
  })
  $("#human6").click(function() {
    var answer13 = prompt("Another lone traveler. He looks like he's geared up and has a backpack. Eat this human's brain?").toLowerCase();
    if (answer13 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human7").click(function() {
    var answer14 = prompt("Eat this human's brain? He looks kind of busy being violent...").toLowerCase();
    if (answer14 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human8").click(function() {
    var answer15 = prompt("She's kind of hidden on the other side of the car. Maybe I can sneak and eat her brain?").toLowerCase();
    if (answer15 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human9").click(function() {
    var answer16 = prompt("This guy looks like he's having too much fun destroying stuff. Take a chance and eat his brain or not?").toLowerCase();
    if (answer16 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human10").click(function() {
    var answer17 = prompt("This human looks kind of scary but his friends are busy destroying the car. Eat his brain?").toLowerCase();
    if (answer17 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human11").click(function() {
    var answer18 = prompt("One person should be easy enough. Eat this human's brain?").toLowerCase();
    if (answer18 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human12").click(function() {
    var answer19 = prompt("Solo traveler. Eat this human's brain?").toLowerCase();
    if (answer19 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human13").click(function() {
    var answer20 = prompt("A group of humans... This one is falling kind of behind. Eat her brain?").toLowerCase();
    if (answer20 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human14").click(function() {
    var answer21 = prompt("Eat this human's brain? Watch out for the other humans though.").toLowerCase();
    if (answer21 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human15").click(function() {
    var answer22 = prompt("This human has a bag... Hopefully no weapons inside. Eat this brain?").toLowerCase();
    if (answer22 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human16").click(function() {
    var answer23 = prompt("They're a bit farther from the main group. Eat this human's brain?").toLowerCase();
    if (answer23 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human17").click(function() {
    var answer24 = prompt("Eat this human's brain? The others probably won't notice...").toLowerCase();
    if (answer24 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human18").click(function() {
    var answer25 = prompt("This guy looks violent. Eat his brain?").toLowerCase();
    if (answer25 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human19").click(function() {
    var answer26 = prompt("This human looks extremely pissed off. Eat his brain?").toLowerCase();
    if (answer26 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human20").click(function() {
    var answer27 = prompt("This one is not paying attention. Eat his brain?").toLowerCase();
    if (answer27 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human21").click(function() {
    var answer28 = prompt("Looks like he just killed a zombie. He could be tired or he could still hurt you. Eat his brain?").toLowerCase();
    if (answer28 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human22").click(function() {
    var answer29 = prompt("A group of 2... Could be easy. Do they have weapons? Or just risk it and eat his brain?").toLowerCase();
    if (answer29 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human23").click(function() {
    var answer30 = prompt("They have backpacks. Risk it and eat this brain?").toLowerCase();
    if (answer30 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human24").click(function() {
    var answer31 = prompt("A solo traveler. He has a gun. Eat his brain?").toLowerCase();
    if (answer31 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human25").click(function() {
    var answer32 = prompt("This one has a friend next to her... Hope they don't have weapons. Eat this brain?").toLowerCase();
    if (answer32 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human26").click(function() {
    var answer33 = prompt("This one has a friend next to him... Hope they don't have weapons. Eat this brain?").toLowerCase();
    if (answer33 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human27").click(function() {
    var answer34 = prompt("This one is sneaking up behind some fellow zombies... Wonder why. Eat this brain?").toLowerCase();
    if (answer34 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human28").click(function() {
    var answer35 = prompt("This one is standing really close to his friend. May be difficult. Eat his brain?").toLowerCase();
    if (answer35 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human29").click(function() {
    var answer36 = prompt("This one is standing really close to her friend. May be difficult. Eat her brain?").toLowerCase();
    if (answer36 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#special-human").click(function() {
    var answer46 = prompt("This human looks like he already got bit... He may be infected. Eat his brains anyway?").toLowerCase();
    if (answer46 == "yes") {
      fungusCollection.push("Fungus-H");
      fungusCollection.push("Fungus-I");
      checkForBadObjects();
      //add message about how you gained extra fungi from him because he was working on finding his own vaccine
      $(this).unbind('click');
    }
  })
  $("#human30").click(function() {
    var answer37 = prompt("A pair of travelers. Eat this one's brain?").toLowerCase();
    if (answer37 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human31").click(function() {
    var answer38 = prompt("Eat this one?").toLowerCase();
    if (answer38 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human32").click(function() {
    var answer39 = prompt("This person is alone. Could be easy unless that backpack has a weapon in it. Eat this brain?").toLowerCase();
    if (answer39 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human33").click(function() {
    var answer40 = prompt("This one is just a little girl. Eat her brain?").toLowerCase();
    if (answer40 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human34").click(function() {
    var answer41 = prompt("This guy looks a bit too ready to fight off zombies. Eat his brain anyway?").toLowerCase();
    if (answer41 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })
  $("#human35").click(function() {
    var answer42 = rompt("He's alone. Looks like a weapon on his left hand. Not sure if he's paying attention. Eat his brain?").toLowerCase();
    if (answer42 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human36").click(function() {
    var answer43 = prompt("Two humans perched under a tree. They look like they're resting. Eat this brain?").toLowerCase();
    if (answer43 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human37").click(function() {
    var answer44 = prompt("They look relaxed. Eat this brain?").toLowerCase();
    if (answer44 == "yes") {
      checkForBadObjects();
      $(this).unbind('click');
    }
  })
  $("#human38").click(function() {
    var answer45 = prompt("This human was hiding behind a bunch of cars. Eat this brain?").toLowerCase();
    if (answer45 == "yes") {
      checkForProtection();
      $(this).unbind('click');
    }
  })


});

