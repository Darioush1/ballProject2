// Get references to page elements

var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var playerText = '';
var playerData;
var firstName = '';
var lastName = '';
var completeName = '';
var teamAArray = [];
var teamBArray = [];


var tabTextClass = '';

$(document).ready(function () {
  $('#sideButtonD, .dataPageContent, .playerDataD, #afterSearch, .functionButton, .playerCardContainer').hide();

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
  $('#currentPlayer').text(playerText)
  function splitName() {
    var playerName = playerText;
   
    var splitPlayerName = playerName.split(' ');
    console.log(splitPlayerName);
    firstName = splitPlayerName[0];
    lastName = splitPlayerName[1];
    var firstNamea = '/' + firstName;
    var lastNamea = '/' + lastName;
    console.log(firstNamea);
    console.log(lastNamea);

    completeName = lastNamea + firstNamea;
    console.log(completeName);

  }
  getPlayers();
  splitName();

  function getPlayers() {
   // var playerName = $('#playerSelected2').val();
    $.get("/api/search/" + playerText, function (data) {
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

  $('#currentPlayer').text(playerText)
  $('.sideButtonD, .playerDataD, .dButton, #afterSearch').show();
  $('.header1').hide();
  getPlayers();
  $('#Player').slideDown('slow')
  


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
  var playerText = '';
  var completeNameA= '';
  playerText = $('#players').text();
  function splitName() {
    var playerName = playerText;
    console.log(playerName);
    var splitPlayerName = playerName.split(' ');
    console.log(splitPlayerName);
    firstName = splitPlayerName[0];
    lastName = splitPlayerName[1];
    var firstNamea = '/' + firstName;
    var lastNamea = '/' + lastName;
    console.log(firstNamea);
    console.log(lastNamea);

    completeNameA = lastNamea + firstNamea;
    console.log(completeNameA);

  }
  splitName();

  playerText = $('#players').text();
  playerTeam = $('#team').text();
  playerMin = $('#min').text();
  playerPPG = $('#ppg').text();
  playerOreb = $('#oreb').text();
  playerDreb = $('#dreb').text();
  playerReb = $('#reb').text();
  playerAst = $('#ast').text();
  playerStl = $('#stl').text();
  playerBlk = $('#blk').text();
  playerTo = $('#to').text();
  playerPf = $('#pf').text();
  playerFgm = $('#fgm').text();
  playerFga = $('#fga').text();
  playerPtm = $('#ptm').text();
  playerPta = $('#pta').text();
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



  $('.playerCardContainer, .functionButton').show();

  var playerText = '';
  playerText = $('#players').text();
  function addPlayerA(data) {

    $.post("/api/search/a/" + data, function () {

    }).then(
      "INSERT data INTO teamas"
    )
  };

  ;


  var newPlayerCardA = '<div class="playerCard">' +
    '<img src="sampleImages/lbjSample.jpg" alt="Avatar" class="playerPicA">' +
    '<div class="imageInfo" id="cardNameA">' +
    '<hr>' +
    '<span class="playerInfo" id="cost">' + '$0' + '</span>' + '<span class="playerInfo" id="realFrom">' + 'Team A' + '</span>'
    + '</div>' +
    '</div>'
    ;
  function getImageA() {
    $('.playerPicA').attr('src', 'https://nba-players.herokuapp.com/players' + completeNameA);

  };
  addPlayerA(playerText);
  $('.playerInfoA').append(newPlayerCardA)
  $('#cardNameA').html(playerText);
  getImageA();


});


var playerStatsb = {};
$('#addPlayerB').on('click', function () {
  var completeNameB = '';
  var playerText = '';
  playerText = $('#playerSelected').text();
  function splitName() {
    var playerName = playerText;
    console.log(playerName);
    var splitPlayerName = playerName.split(' ');
    console.log(splitPlayerName);
    firstName = splitPlayerName[0];
    lastName = splitPlayerName[1];
    var firstNamea = '/' + firstName;
    var lastNamea = '/' + lastName;
    console.log(firstNamea);
    console.log(lastNamea);

    completeNameB = lastNamea + firstNamea;
    console.log(completeNameB);

  }
  splitName();

  playerText = $('#players').text();
  playerTeam = $('#team').text();
  playerMin = $('#min').text();
  playerPPG = $('#ppg').text();
  playerOreb = $('#oreb').text();
  playerDreb = $('#dreb').text();
  playerReb = $('#reb').text();
  playerAst = $('#ast').text();
  playerStl = $('#stl').text();
  playerBlk = $('#blk').text();
  playerTo = $('#to').text();
  playerPf = $('#pf').text();
  playerFgm = $('#fgm').text();
  playerFga = $('#fga').text();
  playerPtm = $('#ptm').text();
  playerPta = $('#pta').text();
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


  
  $('.playerCardContainer, .functionButton').show();

  var playerText = '';
  playerText = $('#players').text();
  function addPlayerB(data) {

    $.post("/api/search/b/" + data, function () {

    }).then(
      "INSERT data INTO teambs"
    )
  };

  var newPlayerCardB = '<div class="playerCard">' +
    '<img src="sampleImages/lbjSample.jpg" alt="Avatar" class="playerPicB">' +
    '<div class="imageInfo" id="cardNameB">' +
    '<hr>' +
    '<span class="playerInfo" id="cost">' + '$0' + '</span>' + '<span class="playerInfo" id="realFrom">' + 'Team B' + '</span>'
    + '</div>' +
    '</div>'
    ;
  function getImageB() {
    $('.playerPicB').attr('src', 'https://nba-players.herokuapp.com/players' + completeNameB);

  };
  addPlayerB(playerText);
  $('.playerInfoB').append(newPlayerCardB)
  $('#cardNameB').html(playerText);
  getImageB();

});



function createPlayerRow(data) {

  console.log("create player row called with data? " + data)
  var newTr = $("<tr>");

  newTr.append(newRow);

  newTr.prepend("<button id='addPlayerA'>" + "Team A" + "</button>" + "<button id='addPlayerB'>" + "Team B" + "</button>");
  return newTr;
}



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
      playerA = playerA + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.ppg < playerStatsb.ppg) {
      playerB = playerB + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.ast > playerStatsb.ast) {
      console.log("no")
      playerA = playerA + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.ast < playerStatsb.ast) {
      playerB = playerB + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.reb > playerStatsb.reb) {
      console.log("no")
      playerA = playerA + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.reb < playerStatsb.reb) {
      playerB = playerB + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.blk > playerStatsb.blk) {
      console.log("no")
      playerA = playerA + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.blk < playerStatsb.blk) {
      playerB = playerB + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA + 'points', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.stl > playerStatsb.stl) {
      console.log("no")
      playerA = playerA + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.stl < playerStatsb.stl) {
      playerB = playerB + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerStats.to < playerStatsb.to) {
      console.log("no")
      playerA = playerA + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');

    } else if (playerStats.to > playerStatsb.to) {
      playerB = playerB + Number(1);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    } else {
      playerA;
      playerB;
      console.log(playerA, playerB);
      console.log('playerA has ' + playerA + ' points, ', 'playerB has ' + playerB + ' points');
    }

    if (playerA > playerB) {

      console.log(playerStats.players + ' wins with ' + playerA + ' points!');
      $('.playerInfoB, .playerInfo').remove();
      $('.playerInfoA').append('<h2>' + 'winner' + '</h2>');
      
    } else if (playerA < playerB) {
      console.log(playerStatsb.players + ' wins with ' + playerB + ' points!');
      $('.playerInfoA').remove();
      $('.playerInfoB').append('<h2>' + 'winner' + '</h2>');
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
  playerText = '';
  $('.playerCard').remove();
  $('.playerCardContainer').hide();
  $(tabTextClass).hide();
})

]
$('#newsButton').on('click', function () {
  var playerText = ''
  playerText = $('#playerSelected').val();
  var newsBox = $(`<div class=${playerText}></div>`);
  var newsUrl = 'https://newsapi.org/v2/everything?' +
    'q=' + playerText + '&' + 'pageSize=5&' +
    'sortBy=popularity&' +
    'apiKey=04246e4aed574328b298927d89b9985a';

  $.ajax({
    url: newsUrl,
    method: "GET"
  }).done(function (response) {
    console.log('this is the repsonse');
    console.log(response);
    newsBox.html('');
    $.each(response.articles, function (index, element) {
      var date = new Date(element.publishedAt).toISOString().slice(0, 10);
      var author = element.author ? element.author : ' ';
      var li = '<li><h3><a href="' + element.url + '" target="_blank">' + element.title + '</a></h3><span class="date">' + date + '</span><span class="author">' + author + '</span><p>' + element.description + '</p><img class="newsPic" src="' + element.urlToImage + '" /></li>'
      newsBox.append(li);
      $('#news-section').append(newsBox);
    });
  });
});

$('#graphButton').on('click', function () {
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


    function getPlayers() {

      var playerName = $('#playerSelected').val();
      console.log(playerName);
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
        fga = data.fga;
        fgm = data.fgm;
        fgp = data.fgp;
        ptm = data.ptm;
        pta = data.pta;
        ptp = data.ptp;
        ftm = data.ftm;
      });
    }
  
      getPlayers();



      var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        labelWrap: true,

        title: {
          text: ""
        },
        axisY: {
          includeZero: false,
          title: 'stats'
        },
        toolTip: {
          shared: "true"
        },
        legend: {
          cursor: "pointer",
          itemclick: toggleDataSeries
        },
        data: [{
          type: "spline",
          visible: false,
          showInLegend: true,
          yValueFormatString: "###.####",
          name: name,
          dataPoints: [
            { label: "PPG", y: 5 },
            { label: "OREB", y: 4 },
            { label: "DREB", y: 5 },
            { label: "REB", y: 6 },
            { label: "AST", y: 3 },
            { label: "STL", y: 0 },
            { label: "BLK", y: 0 },
            { label: "TO", y: 0 },
            { label: "PF", y: 0 },
            { label: "FGA", y: 0 },
            { label: "FGM", y: 0 },
            { label: "FG%", y: 0 },
            { label: "3PTM", y: 0 },
            { label: "3PTA", y: 0 },
            { label: "3PTP", y: 0 },
            { label: "FTM", y: 0 }
            // { label: "FTA", y: 3.04 },
            // { label: "FT%", y: 3.04 }

          ]
        }]
      });


      chart.render();

      function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart.render();
      };


    
    // var length = chart.options.data[0].dataPoints.length;
    // chart.options.title.text = "Last DataPoint Updated";
    // console.log(ppg)

  });

function clearTable() {
  $('#players').text('');
  $('#team').text('');
  $('#min').text('');
  $('#ppg').text('');
  $('#oreb').text('');
  $('#dreb').text('');
  $('#reb').text('');
  $('#ast').text('');
  $('#stl').text('');
  $('#blk').text('');
  $('#to').text('');
  $('#pf').text('');
  $('#fgm').text('');
  $('#fga').text('');
  $('#ptm').text('');
  $('#pta').text('');
  $('#ptp').text('');
  $('#ftm').text('');
};


  function updateGraph() {
    // var playerName = $('#playerSelected2').val();
     $.get("/api/search/:" + playerText, function (req, res) {
     db.Nbastat.findOne({
       where: {
         players:req.params.players
       }
     })
     }).then(function(data){
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
      chart.options.data[0].dataPoints[0]
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
    //  chart.options.data[0].dataPoints[]
   }




  // chart.options.data[0].dataPoints[3].y = 27







