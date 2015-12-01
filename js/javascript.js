
var userName;
var girlZombie;
var boyZombie;
var active = false;
var lifeBar = document.getElementById("life-bar");
var lifeTimer;

function playerStats (life, strength, name) {
  this.life = life;
  this.strength = strength;
  this.name = name;
}

$(function(){

  $("#begin").hover(
    function() {
      $(this).animate({ color: "#700000" }, 'slow');
    },function() {
      $(this).animate({ color: "#FFFFFF" }, 'slow');
  });

  $("#intro").hide();
  $("#goals").hide();
  $("#game-start").hide();

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
    active = false;
  })
  //need to fix pause button

  $("#stats-show").hide();

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

  function minusLife() {
    if (active == true) {
      if (girlZombie != undefined) {
        lifeBar.value -= 2;
      } else {
        lifeBar.value -= 5;
      }
    }
  }

  lifeTimer = setInterval(function(){ minusLife() }, 2000);
  //play around with timing - test out situations;

});


  function emptyLifeBar() {
    if (lifeBar.value == 0) {
      clearInterval(lifeTimer);
      alert("Your zombie has died of hunger... Game over :(");
      active = false;
    }
  }

  emptyLifeBar();

/*function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 100);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}*/


