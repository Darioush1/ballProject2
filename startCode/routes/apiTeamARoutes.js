var db = require("../models");


module.exports = function(app) {
  // Get all examples

  app.get("/api/players", function(req, res) {
    db.TeamA.findAll({}).then(function(dbTeamA) {
      console.log(db.TeamA)
      res.json(dbTeamA);
    });
  });

  app.get("/api/id", function(req, res) {
    db.TeamA.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbNbastat) {
      res.json(dbNbastat);
    });
  });

  app.get("/api/players", function(req, res) {
    db.TeamA.findOne({
      where: {players: ''},
      attributes: ['players', ['players']]
    }).then(function(dbTeamA) {
      res.json(dbTeamA);
    });
  });

  // Create a new example
  app.post("/api/players", function(req, res) {
    db.TeamA.create({
        Players: req.players.players,
    }).then(function(dbTeamA) {
      
    }).then(function(dbTeamA) {
        res.json(dbTeamA);
      });;
  });

  // Delete an example by id
  app.delete("/api/players", function(req, res) {
    db.TeamA.destroy({ 
        where: { 
            id: req.params.id 
        } 
    }).then(function(dbTeamA) {
      res.json(dbTeamA);
    });
  });
};


app.delete("/api/players/a", function(req, res) {
  db.TeamA.destroy({ 
      where: { 
          id: req.params.id 
      } 
  }).then(function(dbTeamA) {
    res.json(dbTeamA);
  });
});

app.delete("/api/players/b", function(req, res) {
  db.TeamA.destroy({ 
      where: { 
          id: req.params.id 
      } 
  }).then(function(dbTeamA) {
    res.json(dbTeamA);
  });
});
};
