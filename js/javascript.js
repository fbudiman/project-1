
var userName;
var girlZombie;
var boyZombie;
var active = false;
var lifeBar = document.getElementById("life-bar");
var lifeTimer;
var pauseGame = [];

function playerStats (life, strength, name) {
  this.life = life;
  this.strength = strength;
  this.name = name;
}

function emptyLifeBar() {
  clearInterval(lifeTimer);
  alert("Your zombie has died of hunger... Game over :(");
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

$(function(){


  $("#intro").hide();
  $("#goals").hide();
  $("#game-start").hide();
  $("#stats-show").hide();

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



});

