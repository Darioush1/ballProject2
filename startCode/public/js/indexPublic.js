// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
//var playerText = '';
var playerData;

var teamAArray = [];
var teamBArray = [];


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

$('#searchButton2').on('click', function () {
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
  var playertext = '';
  playerText = $('#playerSelected2').val();
  getPlayers();
  function getPlayers() {
    var playerName = $('#playerSelected2').val();
    $.get("/api/search/" + playerName, function (data) {
      console.log(data);
      name = data.players;
      team = data.team;
      gp = data.gp;
      min = data.min;
      ppg = data.ppg;
      oreb = data.oreb;
      dreb = data.dreb;
      reb = data.reb;
      ast = data.ast;
      stl = data.stl;
      blk = data.blk;
      to = data.to;
      pf = data.pf;
      fgm = data.fgm;
      fga = data.fga;
      fgp = data.fgp;
      ptm = data.ptm;
      pta = data.pta;
      ptp = data.ptp;
      ftm = data.ftm;
      $('#players').text(name);
      $('#team').text(team);
      $('#min').text(min);
      $('#ppg').text(ppg);
      $('#oreb').text(oreb);
      $('#dreb').text(dreb);
      $('#reb').text(reb);
      $('#ast').text(ast);
      $('#stl').text(stl);
      $('#blk').text(blk);
      $('#to').text(to);
      $('#pf').text(pf);
      $('#fgm').text(fgm);
      $('#fga').text(fga);
      $('#ptm').text(ptm);
      $('#pta').text(pta);
      $('#ptp').text(ptp);
      $('#ftm').text(ftm);

    });
  }
});

$('#searchButton').on('click', function () {
  var playerText = ''
  playerText = $('#playerSelected').val();
  var chosenPlayer = '';


  $('.sideButtonD, .playerDataD, #afterSearch').show();
  $('.header1').hide();
  getPlayers();

  function getPlayers() {
    var playerName = $('#playerSelected').val();
    $.get("/api/search/" + playerName, function (data) {
      createPlayerRow
      console.log(data);
      name = data.players;
      team = data.team;
      gp = data.gp;
      min = data.min;
      ppg = data.ppg;
      oreb = data.oreb;
      dreb = data.dreb;
      reb = data.reb;
      ast = data.ast;
      stl = data.stl;
      blk = data.blk;
      to = data.to;
      pf = data.pf;
      fga = data.fga;
      fgm = data.fgm;
      fgp = data.fgp;
      ptm = data.ptm;
      pta = data.pta;
      ptp = data.ptp;
      ftm = data.ftm;
      $('#players').text(name);
      $('#team').text(team);
      $('#min').text(min);
      $('#ppg').text(ppg);
      $('#oreb').text(oreb);
      $('#dreb').text(dreb);
      $('#reb').text(reb);
      $('#ast').text(ast);
      $('#stl').text(stl);
      $('#blk').text(blk);
      $('#to').text(to);
      $('#pf').text(pf);
      $('#fgm').text(fgm);
      $('#fga').text(fga);
      $('#ptm').text(ptm);
      $('#pta').text(pta);
      $('#ptp').text(ptp);
      $('#ftm').text(ftm);

    });

  }
});

var playerStats = {};

$('#addPlayerA').on('click', function () {

  playerText = $('#players').text();
  playerTeam = $('#team').text();
  playerMin = $('#min').text();
  playerPPG = $('#ppg').text();
  playerOreb = $('#oreb').text();
  playerDreb = $('#dreb').text();
  playerReb = $('#reb').text();
  playerAst = $('#ast').text();
  playerStl =  $('#stl').text();
  playerBlk = $('#blk').text();
  playerTo = $('#to').text();
  playerPf = $('#pf').text();
  playerFgm =  $('#fgm').text();
  playerFga = $('#fga').text();
  playerPtm =  $('#ptm').text();
  playerPta =  $('#pta').text();
  playerPtp = $('#ptp').text();
  playerFtm = $('#ftm').text();
  playerStats.players = playerText;
  playerStats.team = playerTeam;
  playerStats.min = playerMin;
  playerStats.ppg = playerPPG;
  playerStats.orb = playerOreb;
  playerStats.dreb = playerDreb;
  playerStats.reb = playerReb;
  playerStats.ast = playerAst;
  playerStats.stl = playerStl;
  playerStats.blk = playerBlk;
  playerStats.to = playerTo;
  playerStats.pf = playerPf;
  playerStats.fgm = playerFgm;
  playerStats.ptm = playerPtm;
  playerStats.pta = playerPta;
  playerStats.ptp = playerPtp;
  playerStats.ftm = playerFtm;


  console.log(playerStats);

  
  function addPlayerA(data) {

    $.post("/api/search/a/" + data, function () {

    }).then(
      "INSERT data INTO teamas"
    )
  };

  var newPlayerCardA = '<div class="playerCard">' +
    '<img src="sampleImages/lbjSample.jpg" alt="Avatar" class="playerPic">' +
    '<div class="imageInfo" id="cardName">' +
    '<hr>' +
    '<span class="playerInfo" id="cost">' + '$0' + '</span>' + '<span class="playerInfo" id="realFrom">' + 'Team A' + '</span>'
    + '</div>' +
    '</div>'
    ;
  addPlayerA(playerText);
  $('.playerInfoA').append(newPlayerCardA)
  $('#cardName').html(playerText);

});


var playerStatsb = {};
$('#addPlayerB').on('click', function () {

  playerText = $('#players').text();
  playerTeam = $('#team').text();
  playerMin = $('#min').text();
  playerPPG = $('#ppg').text();
  playerOreb = $('#oreb').text();
  playerDreb = $('#dreb').text();
  playerReb = $('#reb').text();
  playerAst = $('#ast').text();
  playerStl =  $('#stl').text();
  playerBlk = $('#blk').text();
  playerTo = $('#to').text();
  playerPf = $('#pf').text();
  playerFgm =  $('#fgm').text();
  playerFga = $('#fga').text();
  playerPtm =  $('#ptm').text();
  playerPta =  $('#pta').text();
  playerPtp = $('#ptp').text();
  playerFtm = $('#ftm').text();
  playerStatsb.players = playerText;
  playerStatsb.team = playerTeam;
  playerStatsb.min = playerMin;
  playerStatsb.ppg = playerPPG;
  playerStatsb.orb = playerOreb;
  playerStatsb.dreb = playerDreb;
  playerStatsb.reb = playerReb;
  playerStatsb.ast = playerAst;
  playerStatsb.stl = playerStl;
  playerStatsb.blk = playerBlk;
  playerStatsb.to = playerTo;
  playerStatsb.pf = playerPf;
  playerStatsb.fgm = playerFgm;
  playerStatsb.ptm = playerPtm;
  playerStatsb.pta = playerPta;
  playerStatsb.ptp = playerPtp;
  playerStatsb.ftm = playerFtm;


  console.log(playerStatsb);
  function addPlayerB(data) {

    $.post("/api/search/b/" + data, function () {

    }).then(
      "INSERT data INTO teambs"
    )
  };

  var newPlayerCardB = '<div class="playerCard">' +
    '<img src="sampleImages/lbjSample.jpg" alt="Avatar" class="playerPic">' +
    '<div class="imageInfo" id="cardName">' +
    '<hr>' +
    '<span class="playerInfo" id="cost">' + '$0' + '</span>' + '<span class="playerInfo" id="realFrom">' + 'Team B' + '</span>'
    + '</div>' +
      console.log(teamAArray)
      '</div>'
    ;
  addPlayerB(playerText);
  $('.playerInfoB').append(newPlayerCardB)
  $('#cardName').html(playerText);

});



function createPlayerRow(data) {

  console.log("create player row called with data? " + data)
  var newTr = $("<tr>");

  newTr.append(newRow);

  newTr.prepend("<button id='addPlayerA'>" + "Team A" + "</button>" + "<button id='addPlayerB'>" + "Team B" + "</button>");
  return newTr;
}


// var newPlayerCardA = '<div class="playerCard">' +
//   '<img src="sampleImages/lbjSample.jpg" alt="Avatar" class="playerPic">' +
//   '<div class="imageInfo" id="name">' + name +
//   '<hr>' +
//   '<span class="playerInfo" id="cost">' + '$0' + '</span>' + '<span class="playerInfo" id="realFrom">' + 'Team A' + '</span>'
//   + '</div>' +
//   '</div>'
//   ;

//   var newPlayerCardB = '<div class="playerCard">' +
//   '<img src="sampleImages/lbjSample.jpg" alt="Avatar" class="playerPic">' +
//   '<div class="imageInfo" id = "name">' + name +
//   '<hr>' +
//   '<span class="playerInfo" id="cost">' + '$0' + '</span>' + '<span class="playerInfo" id="realFrom">' + 'Team B' + '</span>'
//   + '</div>' +
//   '</div>';

var newRow = "<tr>" + "<td id='players'>" + "</td>" + "<td id='team'>" + "</td>" + "<td id='gp'>" + "</td>" + "<td id='min'>" + "</td>" + "<td id='ppg'>" + "</td>" + "<td id='oreb'>" + "</td>" + "<td id='dreb'>" + "</td>" + "<td id='reb'>" + "</td>" + "<td id='ast'>" + "</td>" + "<td id='stl'>" + "</td>" + "<td id='blk'>" + "</td>" + "<td id='to'>" + "</td>" + "<td id='pf'>" + "</td>" + "<td id='fgm'>" + "</td>" + "<td id='fga'>" + "</td>" + "<td id='fgp'>" + "</td>" + "<td id='ptm'>" + "</td>" + "<td id='pta'>" + "</td>" + "<td id='ptp'>" + "</td>" + "<td id='ftm'>" + "</td>" + "</tr>";

function appendRow() {
  $('tbody').append(newRow)
}

$('#ballDontLie').on('click', function () {
  console.log(playerStats, playerStatsb)

  function bdl() {
    var playerA = 0;
    var playerB = 0;

    if (playerStats.ppg > playerStatsb.ppg) {
      console.log("no")
      playerA = playerA+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.ppg < playerStatsb.ppg) {
      playerB = playerB+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.ast > playerStatsb.ast) {
      console.log("no")
      playerA = playerA+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.ast < playerStatsb.ast) {
      playerB = playerB+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.reb > playerStatsb.reb) {
      console.log("no")
      playerA = playerA+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.reb < playerStatsb.reb) {
      playerB = playerB+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.blk > playerStatsb.blk) {
      console.log("no")
      playerA = playerA+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.blk < playerStatsb.blk) {
      playerB = playerB+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA +  'points', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.stl > playerStatsb.stl) {
      console.log("no")
      playerA = playerA+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.stl < playerStatsb.stl) {
      playerB = playerB+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.to < playerStatsb.to) {
      console.log("no")
      playerA = playerA+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.to > playerStatsb.to) {
      playerB = playerB+Number(1);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA +  ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerA > playerB) {
      console.log(playerStats.players + ' wins with ' + playerA + ' points!');
    } else if (playerA < playerB) {
      console.log(playerStatsb.players + ' wins with ' + playerB + ' points!');
    } else {
      console.log("nobody wins!");
    }


  }
  bdl();

})


$('#runItBack').on('click', function () {
  $.ajax({
    url: '/api/players/a',
    type: 'DELETE',
    success: function (response) {
      console.log(response)
    }
  });
  $.ajax({
    url: '/api/players/b',
    type: 'DELETE',
    success: function (response) {
      console.log(response)
    }
  });
})

