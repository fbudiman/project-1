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

//different levels or "blocks" of the game
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
var digitalWatch;
var flashlight;
var sunglasses;

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

//only applies if bad objects are in your collection
function specialAttack() {
  if (active) {
    if (girlZombie != undefined) {
      lifeBar.value -= 15;
    } else {
      lifeBar.value -= 10;
    }
  }
}

//checks to see if player has any sabotaging objects
function checkForBadObjects() {
  if (userObjects.length > 0) {
    for (i in userObjects) {
      if (userObjects[i] == "Yellow Shirt") {
        specialAttack();
        yellowShirt = prompt("Unfortunately that yellow shirt cost you big time. It was too bright so this human spotted you clearly and attacked extra hard. Would you like to discard?").toLowerCase();
        if (yellowShirt == "yes") {
          var yellowIndex = userObjects.indexOf("Yellow Shirt");
          userObjects.splice(yellowIndex,1);
        } else {
          alert("Ok.. Your loss.");
        }
      } else if (userObjects[i] == "Digital Watch") {
          specialAttack();
          digitalWatch = prompt("That digital watch messed you up big time. There was an alarm set, and it went off as you were trying to eat this human brain... and they managed to get a clear shot and hurt you good. Discard?").toLowerCase();
          if (digitalWatch == "yes") {
            var digitalIndex = userObjects.indexOf("Digital Watch");
            userObjects.splice(digitalIndex,1);
          } else {
            alert("Ok.. your loss.");
          }
      } else if (userObjects[i] == "Flashlight Headband") {
          specialAttack();
          flashlight = prompt("That flashlight headband didn't do you any good... All it did was give yourself away by shining light! That human saw you and attacked. Discard?").toLowerCase();
          if (flashlight == "yes") {
            var flashlightIndex = userObjects.indexOf("Flashlight Headband");
            userObjects.splice(flashlightIndex,1);
          } else {
            alert("Ok.. Your loss.");
          }
      } else {
          eatHumanBrain();
          document.getElementById("narrative").innerHTML = "Mmmm... tasty";
      }
    }
  } else {
      eatHumanBrain();
      document.getElementById("narrative").innerHTML = "That was delicious.";
  }
}

//checks to see if player has any protection objects
function checkForProtection() {
  if (userObjects.length > 0) {
    for (i in userObjects) {
      if (userObjects[i] == "Metal Helmet") {
        alert("He fought back and attacked you, but you had your metal helmet on! You managed to get away. The metal helmet broke during the attack.");
        var metalIndex = userObjects.indexOf("Metal Helmet");
        userObjects.splice(metalIndex,1);
      } else if (userObjects[i] == "Halloween Mask") {
          alert("The Halloween mask fooled the humans into thinking you were one of them! But they did rip it off you right before you got away.");
          var halloweenIndex = userObjects.indexOf("Halloween Mask");
          userObjects.splice(halloweenIndex,1);
      } else if (userObjects[i] == "Hard Hat") {
          alert("This human saw you coming and attacked back, but that hard hat really saved you! It did break in the process, but you managed to get away.");
          var hardHatIndex = userObjects.indexOf("Hard Hat");
          userObjects.splice(hardHatIndex,1);
      } else {
          humanAttack();
          document.getElementById("narrative").innerHTML = "I wish these humans would stop attacking me and just let me eat them. Owwowow.";
      }
    }
  } else {
    humanAttack();
    document.getElementById("narrative").innerHTML = "Ok that really hurt.";
  }
}

function pauseMessage() {
  alert("Your game is not currently active! You can't do anything.")
}

$(function(){

$('body').css('visibility', 'visible');

  $("#intro").hide();
  $("#goals").hide();
  $("#game-start").hide();
  $("#stats-show").hide();
  $(".game-images").hide();
  $("#background2").show();

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
    userName = prompt("Your chosen zombie has forgotten her human name. What would you like to name her?");
    $("#intro").hide('slow');
    $(".name").html(userName);
    $("#goals").show('slow');
    girlZombie = new playerStats("High","Low",userName);
  })

  $("#ryan-zombie").click(function() {
    userName = prompt("Your chosen zombie has forgotten his human name. What would you like to name him?");
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
    $("#objects-stats").html(userObjects + " ");
    $("#fungi-stats").html(fungusCollection + " ");
  });

  lifeTimer = setInterval(function(){ minusLife() }, 15000);
  //play around with timing - test out situations;

//up arrow for each block
  $("#up-arrow").click(function() {
    if (active) {
      if (centerImage == true) {
        if (screenOne == true) {
          screenTwo = true;
          screenOne = false;
          $("#background2X").show('slow');
          $("#background2").hide();
          $("#story-text").html("There has to be someone I can eat on this block. I don't smell any fungus... but maybe there's an object to pick up.");
        } else if (screenTwo == true) {
          screenThree = true;
          screenTwo = false;
          $("#background3").show('slow');
          $("#background2X").hide();
          $("#story-text").html("I definitely smell fungus on this block. The question is where?? Also I'm sure I can find a useful object around here...");
        } else if (screenThree == true){
          screenFour = true;
          screenThree = false;
          $("#background3X").show('slow');
          $("#background3").hide();
          $("#story-text").html("Oh good... a bunch of wild humans on this block. If I can pick out the ones who don't look as dangerous to eat, hopefully they won't notice. And... is that fungus I smell??");
        } else if (screenFour == true) {
          screenFive = true;
          screenFour = false;
          $("#background4").show('slow')
          $("#background3X").hide();
          $("#story-text").html("Getting tired... I can't smell things as well. But I'm pretty sure there's something hidden around here.");
        } else if (screenFive == true) {
          screenSix = true;
          screenFive = false;
          $("#background4X").show('slow');
          $("#background4").hide();
          $("#story-text").html("Okay... there's definitely something on this block. Why does everything have to be hidden?");
        } else if (screenSix == true) {
          screenSeven = true;
          screenSix = false;
          $("#background5").show('slow');
          $("#background4X").hide();
          $("#story-text").html("15 blocks is not as close as I thought. These zombie legs are terrible. At least I'm halfway there. Still forever hungry though. There's also a good mix of zombies and humans on this block. Good thing my zombie senses can tell the difference.");
        } else if (screenSeven == true) {
          screenEight = true;
          screenSeven = false;
          $("#background5X").show('slow');
          $("#background5").hide();
          $("#story-text").html("Hmm... not a lot going on here.");
        } else if (screenEight == true) {
          screenNine = true;
          screenEight = false;
          $("#background6").show('slow');
          $("#background5X").hide();
          $("#story-text").html("Am I there yet? I think I'm close. Seriously dying over here and my smelling senses has gotten worse. I miss being a human.");
        } else if (screenNine == true) {
          screenTen = true;
          screenNine = false;
          $("#background6X").show('slow');
          $("#background6").hide();
          $("#story-text").html("This place is a mess. Zombies and humans crawling all over the place.");
        } else if (screenTen == true) {
          screenEleven = true;
          screenTen = false;
          $("#background7").show('slow');
          $("#background6X").hide();
          $("#story-text").html("I still need to search for all these fungi. Do I have enough yet? Is there any around here?");
        } else if (screenEleven == true) {
          screenTwelve = true;
          screenEleven = false;
          $("#background7X").show('slow');
          $("#background7").hide();
          $("#story-text").html("There's gotta be something I can use around here... Or something to eat?");
        } else if (screenTwelve == true) {
          screenThirteen = true;
          screenTwelve = false;
          $("#background8X").show('slow');
          $("#background7X").hide();
          $("#story-text").html("I'm seriously so close... I think. I just need to focus on not dying.");
        } else if (screenThirteen == true) {
          screenFourteen = true;
          screenThirteen = false;
          $("#background8").show('slow');
          $("#background8X").hide();
          $("#story-text").html("I SEE THE LAB!!! Ok Ok I gotta get there while I'm still alive.. sort of. Do I have enough fungi?");
        } else if (screenFourteen == true) {
          screenFifteen = true;
          screenFourteen = false;
          $("#lab2").show('slow');
          $("#background8").hide();
          $("#zombie-thoughts").hide();
          $("#additional-narrative").hide();
          $("#narrative").hide();
          $("#story-text").html("You made it to the lab! Head over to the right to get the process started...");
        }
      } else {
        alert("You can only go forward from the center path!");
      }
    }
  })

//right arrow functions per block of street
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
              $("#story-text").html("Uh oh... you only had " + fungusCollection.length + " zombie-strain fungi with you. The scientists had to put you down as a failed attempt.")
              active = false;
            } else {
                $("#story-text").html("Congratulations, " + userName + "! You've made it safely to the end AND with " + fungusCollection.length + " zombie-strain fungi! The scientists will now begin the process of dezombifying you.");
                active = false;
            }
          }
      }
    }
  });

//left arrow for each block
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

  $("#yellow-shirt").click(function() {
    if (active) {
      var answer1 = prompt("You found a random yellow shirt. Put it on?").toLowerCase();
      if (answer1 == "yes") {
        userObjects.push("Yellow Shirt");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#metal-helmet").click(function() {
    if (active) {
      var answer2 = prompt("You found a metal helmet. Put it on?").toLowerCase();
      if (answer2 == "yes") {
        userObjects.push("Metal Helmet");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#halloween-mask").click(function() {
    if (active) {
      var answer3 = prompt("You found a Halloween mask. Put it on?").toLowerCase();
      if (answer3 == "yes") {
        userObjects.push("Halloween Mask");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#digital-watch").click(function() {
    if (active) {
      var answer4 = prompt("You found a digital watch. It still works. Put it on?").toLowerCase();
      if (answer4 == "yes") {
        userObjects.push("Digital Watch");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#hard-hat").click(function() {
    if (active) {
      var answer5 = prompt("You found a hard hat. Put it on?").toLowerCase();
      if (answer5 == "yes") {
        userObjects.push("Hard Hat");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#sunglasses").click(function() {
    if (active) {
      var answer6 = prompt("You found a pair of sunglasses. Put it on?").toLowerCase();
      if (answer6 == "yes") {
        userObjects.push("Sunglasses");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#flashlight-headband").click(function() {
    if (active) {
      var answer7 = prompt("You found a flashlight headband. It's turned on. Put it on?").toLowerCase();
      if (answer7 == "yes") {
        userObjects.push("Flashlight Headband");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })

  $("#fungus-a").click(function() {
    if (active) {
      alert("You found zombie-strain fungus A!");
      fungusCollection.push("Fungus-A");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })
  $("#fungus-b").click(function() {
    if (active) {
      alert("You found zombie-strain fungus B!");
      fungusCollection.push("Fungus-B");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })
  $("#fungus-c").click(function() {
    if (active) {
      alert("You found zombie-strain fungus C!");
      fungusCollection.push("Fungus-C");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })
  $("#fungus-d").click(function() {
    if (active) {
      alert("You found zombie-strain fungus D!");
      fungusCollection.push("Fungus-D");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })
  $("#fungus-e").click(function() {
    if (active) {
      alert("You found zombie-strain fungus E!");
      fungusCollection.push("Fungus-E");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })
  $("#fungus-f").click(function() {
    if (active) {
      alert("You found zombie-strain fungus F!");
      fungusCollection.push("Fungus-F");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })
    $("#fungus-g").click(function() {
    if (active) {
      alert("You found zombie-strain fungus G!");
      fungusCollection.push("Fungus-G");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })
  $("#fungus-x").click(function() {
    if (active) {
      alert("You found zombie-strain fungus X!");
      fungusCollection.push("Fungus-X");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })
  $("#fungus-y").click(function() {
    if (active) {
      alert("You found zombie-strain fungus Y!");
      fungusCollection.push("Fungus-Y");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })
  $("#fungus-z").click(function() {
    if (active) {
      alert("You found zombie-strain fungus Z!");
      fungusCollection.push("Fungus-Z");
      $(this).unbind('click');
    } else {
        pauseMessage();
    }
  })

  $("#human1").click(function() {
    if (active) {
      var answer8 = prompt("A group of 3... Looks like this one is the smallest of the 3. Eat this human's brain?").toLowerCase();
      if (answer8 == "yes") {
        eatHumanBrain();
        $("#narrative").html("Yummy.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human2").click(function() {
    if (active) {
      var answer9 = prompt("A group of 3 is more difficult than a single person... But this one doesn't have a weapon. Eat this human's brain? Be careful.").toLowerCase();
      if (answer9 == "yes") {
        eatHumanBrain();
        $("#narrative").html("Yummy.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human3").click(function() {
    if (active) {
      var answer10 = prompt("A group of 3... This one is carrying something. Be cautious. Eat this brain?").toLowerCase();
      if (answer10 == "yes") {
        humanAttack();
        $("#narrative").html("Oh crap, this guy had a big weapon on him. I shouldn't have gone for his brain. Oww.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human4").click(function() {
    if (active) {
      var answer11 = prompt("A solo traveler.. this should be easy. Eat this human's brain?").toLowerCase();
      if (answer11 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human5").click(function() {
    if (active) {
      var answer12 = prompt("A solo traveler.. this could be easy. But it looks like he has a weapon though. Eat this human's brain?").toLowerCase();
      if (answer12 == "yes") {
        humanAttack();
        $("#narrative").html("Owww should've known not to go for someone with a weapon like that. Gotta be careful next time.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human6").click(function() {
    if (active) {
      var answer13 = prompt("Another lone traveler. He looks like he's geared up and has a backpack. Eat this human's brain?").toLowerCase();
      if (answer13 == "yes") {
        checkForProtection();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human7").click(function() {
    if (active) {
      var answer14 = prompt("This human looks busy being violent but I'd rather not have him do that to me... Eat this human's brain?").toLowerCase();
      if (answer14 == "yes") {
        checkForProtection();
        $("#additional-narrative").html("Gotta watch out for big groups and make sure to only attack if the rest of them won't notice.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human8").click(function() {
    if (active) {
      var answer15 = prompt("She's kind of hidden on the other side of the car. Hopefully her friends won't notice and maybe I can sneak and eat her brain?").toLowerCase();
      if (answer15 == "yes") {
        checkForBadObjects();
        $("#additional-narrative").html("Hmm. I gotta go for the less dangerous humans. If their friends are busy, even better.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human9").click(function() {
    if (active) {
      var answer16 = prompt("This guy looks like he's having too much fun destroying stuff. Take a chance and eat his brain or not?").toLowerCase();
      if (answer16 == "yes") {
        checkForProtection();
        $("#additional-narrative").html("Gotta watch out for big groups and make sure to only attack if the rest of them won't notice.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human10").click(function() {
    if (active) {
      var answer17 = prompt("This human looks kind of off to the side but his friends are busy destroying the car. I don't think they'll notice. Eat his brain?").toLowerCase();
      if (answer17 == "yes") {
        checkForBadObjects();
        $("#additional-narrative").html("Hmm. I gotta go for the less dangerous humans. If their friends are busy, even better.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human11").click(function() {
    if (active) {
      var answer18 = prompt("One person should be easy enough. Eat this human's brain?").toLowerCase();
      if (answer18 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human12").click(function() {
    if (active) {
      var answer19 = prompt("Solo traveler. Eat this human's brain?").toLowerCase();
      if (answer19 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human13").click(function() {
    if (active) {
      var answer20 = prompt("A group of humans... This one is falling kind of behind. Eat her brain?").toLowerCase();
      if (answer20 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human14").click(function() {
    if (active) {
      var answer21 = prompt("Eat this human's brain? Watch out for the other humans though. This one is standing real close to that other human.").toLowerCase();
      if (answer21 == "yes") {
        checkForProtection();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human15").click(function() {
    if (active) {
      var answer22 = prompt("This human has a bag... Hopefully no weapons inside but you never know. Eat this brain?").toLowerCase();
      if (answer22 == "yes") {
        checkForProtection();
        $("#additional-narrative").html("Ok. I guess there was a weapon in there.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human16").click(function() {
    if (active) {
      var answer23 = prompt("They're a bit farther from the main group. Eat this human's brain?").toLowerCase();
      if (answer23 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human17").click(function() {
    if (active) {
      var answer24 = prompt("Eat this human's brain? The others probably won't notice...").toLowerCase();
      if (answer24 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human18").click(function() {
    if (active) {
      var answer25 = prompt("This guy looks violent. Eat his brain?").toLowerCase();
      if (answer25 == "yes") {
        checkForProtection();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human19").click(function() {
    if (active) {
      var answer26 = prompt("This human looks extremely pissed off. Eat his brain?").toLowerCase();
      if (answer26 == "yes") {
        checkForProtection();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human20").click(function() {
    if (active) {
      var answer27 = prompt("This one is not paying attention. Eat his brain?").toLowerCase();
      if (answer27 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human21").click(function() {
    if (active) {
      var answer28 = prompt("Looks like he just killed a zombie. He could be tired or he could still hurt you. 50/50 chance. Eat his brain?").toLowerCase();
      if (answer28 == "yes") {
        checkForBadObjects();
        $("#additional-narrative").html("Well I guess that guy was tired.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human22").click(function() {
    if (active) {
      var answer29 = prompt("A group of 2... Could be easy. Do they have weapons in those backpacks? Or just risk it and eat his brain?").toLowerCase();
      if (answer29 == "yes") {
        checkForBadObjects();
        $("#additional-narrative").html("I guess that backpack was filled with just food.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human23").click(function() {
    if (active) {
      var answer30 = prompt("They have backpacks. Good or bad? Risk it and eat this brain?").toLowerCase();
      if (answer30 == "yes") {
        checkForBadObjects();
        $("#additional-narrative").html("Ok... in this case the backpack was not filled with weapons. That's not usually the case though...");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human24").click(function() {
    if (active) {
      var answer31 = prompt("A solo traveler. He has a gun. Eat his brain?").toLowerCase();
      if (answer31 == "yes") {
        checkForProtection();
        $("#additional-narrative").html("That seems a little obvious. Guy with a gun is probably gonna use it.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human25").click(function() {
    if (active) {
      var answer32 = prompt("This one has a friend next to her... Hope they don't have weapons. Eat this brain?").toLowerCase();
      if (answer32 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human26").click(function() {
    if (active) {
      var answer33 = prompt("This one has a friend next to him... Hope they don't have weapons. Eat this brain?").toLowerCase();
      if (answer33 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human27").click(function() {
    if (active) {
      var answer34 = prompt("This one is sneaking up behind some fellow zombies... Wonder why. Eat this brain?").toLowerCase();
      if (answer34 == "yes") {
        checkForProtection();
        $("#additional-narrative").html("Ok that human was sneaking up on the zombie probably because they were going to kill it. Duh.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human28").click(function() {
    if (active) {
      var answer35 = prompt("This one is standing really close to his friend. Hmmm. Eat his brain?").toLowerCase();
      if (answer35 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human29").click(function() {
    if (active) {
      var answer36 = prompt("This one is standing really close to her friend. She looks really cautious. Eat her brain?").toLowerCase();
      if (answer36 == "yes") {
        checkForProtection();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#special-human").click(function() {
    if (active) {
      var answer46 = prompt("This human looks like he already got bit... He may be infected. Eat his brains anyway?").toLowerCase();
      if (answer46 == "yes") {
        fungusCollection.push("Fungus-H");
        checkForBadObjects();
        $("#additional-narrative").html("I got a free fungus from this infected-looking human!! Maybe they were on their way to the lab too?? Hm. Oh well.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human30").click(function() {
    if (active) {
      var answer37 = prompt("A pair of travelers. Eat this one's brain?").toLowerCase();
      if (answer37 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human31").click(function() {
    if (active) {
      var answer38 = prompt("Eat this one?").toLowerCase();
      if (answer38 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human32").click(function() {
    if (active) {
      var answer39 = prompt("This person is alone. Could be easy unless that backpack has a weapon in it. Eat this brain?").toLowerCase();
      if (answer39 == "yes") {
        checkForProtection();
        $("#additional-narrative").html("Some people with backpacks look really dangerous. But some people just have nothing but food in there. So deceiving.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human33").click(function() {
    if (active) {
      var answer40 = prompt("This one is just a little girl. Eat her brain?").toLowerCase();
      if (answer40 == "yes") {
        checkForProtection();
        $("#additional-narrative").html("Ok.... She may be a little girl but I really shouldn't have done that. On second glance she looks like a cold-blooded killer. And she looks infected too.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human34").click(function() {
    if (active) {
      var answer41 = prompt("This guy looks a bit too ready to fight off zombies. Eat his brain anyway?").toLowerCase();
      if (answer41 == "yes") {
        checkForProtection();
        $("#additional-narrative").html("Seems fairly obvious that I shouldn't have attacked this guy. Big guy with a lot of weapons traveling with a fellow cold-blooded killer little girl. What a combo. Wonder what they're doing.");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human35").click(function() {
    if (active) {
      var answer42 = prompt("He's alone. Looks like a weapon on his left hand. Not sure if he's paying attention though. Eat his brain?").toLowerCase();
      if (answer42 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human36").click(function() {
    if (active) {
      var answer43 = prompt("Two humans perched under a tree. They look like they're resting. Eat this brain?").toLowerCase();
      if (answer43 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human37").click(function() {
    if (active) {
      var answer44 = prompt("They look relaxed. Eat this brain?").toLowerCase();
      if (answer44 == "yes") {
        checkForBadObjects();
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })
  $("#human38").click(function() {
    if (active) {
      var answer45 = prompt("This human was hiding behind a bunch of cars. Eat this brain?").toLowerCase();
      if (answer45 == "yes") {
        checkForProtection();
        $("#additional-narrative").html("I guess they were hiding behind a bunch of cars because they were being careful...");
        $(this).unbind('click');
      }
    } else {
        pauseMessage();
    }
  })


});

