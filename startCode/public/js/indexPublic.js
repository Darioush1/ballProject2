// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
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
var fgp =0;
var ptm = 0;
var pta = 0;
var ptp = 0;
var ftm = 0;


                    // <th id = 'oreb'>Oreb</th>
                    // <th id = 'dreb'>Dreb</th>
                    // <th id = 'reb'>Reb</th>
                    // <th id = 'ast'>Ast</th>
                    // <th id = 'stl'>Stl</th>
                    // <th id = 'blk'>Blk</th>
                    // <th id = 'to'>TO</th>
                    // <th id = 'pf'>PF</th>
                    // <th id = 'fgm'>FGM</th>
                    // <th id = 'fga'>FGA</th>
                    // <th id = 'fgp'>FG%</th>
                    // <th id = '3ptm'>3PTM</th>
                    // <th id = '3pta'>3PTA</th>
                    // <th id = '3ptp'>3PT%</th>
                    // <th id = 'ftm'>FTM</th>
                    // <th id = 'fta'>FTA</th>
                    // <th id = 'ftp'>FT%</th>

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);


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
    $('.dataPageContent').slidedown('slow')
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
  var playerText = $('#playerSelected').val();
  var chosenPlayer = '';


  $('.sideButtonD, .dataPageContent, .playerDataD, #afterSearch').show();
  $('.header1').hide();
  $.ajax({
    url: "./api/players",
    method: "GET"
  }).done(function (response) {
    console.log(response[0])
    for (var i = 0; i < response.length; i++) {
      if (playerText == response[i].players) {
        chosenPlayer = response[i].id;
        console.log(chosenPlayer + ' id');
        $('#name').text(response[i].players);
        $('#team').text(response[i].team);
        $('#gp').val(gp);  
        $('#min').val();
        $('#ppg').val();
        addPlayerCard();

      } else {

      }


    }
  });

});

var newPlayerCard = '<div class="playerCard">' +
  '<img src="sampleImages/lbjSample.jpg" alt="Avatar" class="playerPic">' +
  '<div class="imageInfo">' + 'jake' +
  '<hr>' +
  '<span class="playerInfo" id="cost">' + '$0' + '</span>' + '<span class="playerInfo" id="position">' + 'PF' + '</span>'
  + '</div>' +
  '</div>'
  ;;

function addPlayerCard() {
  console.log('player card button')
  $('.playerInfo').append(newPlayerCard)
};

function populateTable() {
  // $(th).html()
}







