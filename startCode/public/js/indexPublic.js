// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

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
  labels: ["Player", "Year", "Season", "Team", "GP", "Min", "PPG",
    "Orb", "Dreb", "Reb", "Ast", "Stl", "Blk", "TO", "PF", "FGM", "FGA",
    "3PTM", "3PTA", "FTM", "FTA"],
  datasets: [{
    data: ["Aaron Gordon", "2018-2019", "REG", "Magic",
      78, 33.75, 15.97, 1.65, 5.71, 7.36, 3.71, 0.73, 0.72, 2.08, 2.21,
      6.03, 13.41, 1.55, 4.45, 2.37, 3.24],
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







