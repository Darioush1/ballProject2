var db = require("../models");


module.exports = function(app) {
  // Get all examples

  app.get("/api/players", function(req, res) {
    db.Nbastat.findAll({ 
    }).then(function(dbNbastat) {
      console.log(db.Nbastat)
      res.json(dbNbastat);
    });
  });

  app.get("/api/players/:id", function(req, res) {
    db.Nbastat.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbNbastat) {
      res.json(dbNbastat);
    });
  });

  app.get("/api/search/:players", function(req, res) {
    db.Nbastat.findOne({
      where: {
        players: req.params.players
      }
    }).then(function(dbNbastat) {
      res.json(dbNbastat);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

