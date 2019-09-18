// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var playerText = '';
var name = '';
var team = '';
var gp = 0;
var min = 0;
var ppg = 0;
var oreb = 0;
var dreb = 0;
var reb = 0;
var ast = 0;
var stl = 0;
var blk = 0;
var to = 0;
var pf = 0;
var fgm = 0;
var fga = 0;
var fgp = 0;
var ptm = 0;
var pta = 0;
var ptp = 0;
var ftm = 0;



var tabTextClass = '';

$(document).ready(function () {
  $('.sideButtonD, .dataPageContent, .playerDataD, #afterSearch').hide();

});

//Start Side Bar functions
function openBar() {
  $(".dSideBar").width('250px');
  $(".container").css({ 'margin-left': '250px' });
  console.log('open nav')
}

function closeBar() {
  $('.dSideBar').width('0px');
  $('.container').css({ 'margin-left': '0px' });
}

$('.sideButtonD').on('click', function () {
  openBar();
});

$('.closeBar').on('click', function () {
  closeBar();
});
//End Side Bar Functions



//function that switches between tabs
$('.dataPage').on('click', function () {

  $(tabTextClass).hide();
  var tabText = jQuery(this).text();
  tabTextClass = "#" + tabText;
  console.log(tabTextClass);
  console.log(tabText);
  $(tabTextClass).show(function () {
    $('.tabTextClass').slideDown('slow')
  });
});


var colors = ['#007bff', '#28a745', '#444444', '#c3e6cb', '#dc3545', '#6c757d'];
var chBar = $("chBar");
var chartData = {
  labels: ["Player", "Team", "GP", "Min", "PPG",
    "Orb", "Dreb", "Reb", "Ast", "Stl", "Blk", "TO", "PF", "FGM", "FGA", "3PTM", "3PTA", "FTM", "FTA"],
  datasets: [{
    data: [name, team, gp, min, ppg, oreb, dreb, reb, ast, stl, blk, to, pf, fgm, fgp, ptm, pta, ptp, ftm],
    backgroundColor: colors[0]
  }]
};

if (chBar) {
  new Chart(chBar, {
    type: "bar",
    data: chartData,
    options: {
      scales: {
        xAxes: [{
          barPercentage: 0.4,
          categoryPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });
};


$('#searchButton').on('click', function () {
  playerText = $('#playerSelected').val();
  console.log('player Text = ' + playerText)
  var chosenPlayer = '';


  $('.sideButtonD, .playerDataD, #afterSearch').show();
  $('.header1').hide();
  getPlayers();

  function getPlayers() {
    var playerName = $('#playerSelected').val();
    $.get("/api/search/" + playerName, function (data) {
      console.log(data)
     

      for (var i = 0; i < data.length; i++) {
        if (playerText == data[i].players) {
          
          var realTeam = data[i].Team;
          chosenPlayer = data[i].id;
          console.log(data[i] + ' id');


          var newPlayerCard = '<div class="playerCard">' +
            '<img src="sampleImages/lbjSample.jpg" alt="Avatar" class="playerPic">' +
            '<div class="imageInfo">' + 'j' +
            '<hr>' +
            '<span class="playerInfo" id="cost">' + '$0' + '</span>' + '<span class="playerInfo" id="realFrom">' + 'realTeam' + '</span>'
            + '</div>' +
            '</div>'
            ;;


        } else {
        }
      }

    });

  }
});

function userChoice(playerData) {
  console.log('userChoice called');
  console.log("This is player Data " + playerData)
  $.post('/api/players/players', playerData)
    .then(getPlayers)
};

function enterPlayerChoiceA(playerData) {
  console.log('enterPlayerChoiceA')
  $.post("/api/players", playerData)
    .then(getPlayers);
};
var newPlayerCard = '<div class="playerCard">' +
  '<img src="sampleImages/lbjSample.jpg" alt="Avatar" class="playerPic">' +
  '<div class="imageInfo">' + 'j' +
  '<hr>' +
  '<span class="playerInfo" id="cost">' + '$0' + '</span>' + '<span class="playerInfo" id="realFrom">' + 'placegolder' + '</span>'
  + '</div>' +
  '</div>'
  ;;

