var db = require("../models");
// var playByPlay = require('nba-play-by-play');



module.exports = function(app) {
  // Get all examples

  // app.get("/api/pbp"), function(req, res) {
  //   let teamRecordRequest = playByPlay.getTeamRecord("Warriors", "2018-19", "Regular+Season");
  //     teamRecordRequest.then(record => {
  // console.log(record)
  //   });
  // };

  app.get("/api/players", function(req, res) {
    db.Nbastat.findAll({ 
    }).then(function(dbNbastat) {
      console.log(db.Nbastat)
      res.json(dbNbastat);
    });
  });

  app.get("/api/players/a", function(req, res) {
    db.TeamA.findAll({ 
    }).then(function(dbTeamA) {
      console.log(db.TeamA)
      res.json(dbTeamA);
    });
  });

  app.get("/api/players/b", function(req, res) {
    db.TeamB.findAll({ 
    }).then(function(dbTeamB) {
      console.log(db.TeamB)
      res.json(dbTeamB);
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

  app.post("/api/search/a/:players", function(req, res) {
    db.Nbastat.findOne({
      where: {
        players: req.params.players
      }
    }).then(function(dbNbastat) {
      console.log(dbNbastat)
      var data = dbNbastat.dataValues
      db.TeamA.create({
        players: data.players,
        year: data.years,
        season: data.season,
        team: data.team,
        gp: data.gp,
        min: data.min,
        ppg: data.ppg,
        oreb: data.oreb,
        dreb: data.dreb,
        reb: data.reb,
        ast: data.ast,
        stl: data.stl,
        blk: data.blk,
        to: data.to,
        pf: data.pf,
        fgm: data.fgm,
        fga: data.fga,
        fg: data.fg,
        threePtm: data.threePtm,
        threePta: data.threePta,
        threePt: data.threePt,
        ftm: data.ftm,
        fta: data.fta,
        ft: data.ft
      })
    });
  });

  app.post("/api/search/b/:players", function(req, res) {
    db.Nbastat.findOne({
      where: {
        players: req.params.players
      }
    }).then(function(dbNbastat) {
      console.log(dbNbastat)
      var data = dbNbastat.dataValues
      db.TeamB.create({
        players: data.players,
        year: data.years,
        season: data.season,
        team: data.team,
        gp: data.gp,
        min: data.min,
        ppg: data.ppg,
        oreb: data.oreb,
        dreb: data.dreb,
        reb: data.reb,
        ast: data.ast,
        stl: data.stl,
        blk: data.blk,
        to: data.to,
        pf: data.pf,
        fgm: data.fgm,
        fga: data.fga,
        fg: data.fg,
        threePtm: data.threePtm,
        threePta: data.threePta,
        threePt: data.threePt,
        ftm: data.ftm,
        fta: data.fta,
        ft: data.ft
      })
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });


  // Delete an example by id
  app.delete("/api/players/a", function(req, res) {
    db.TeamA.destroy({where: {}}).then(function(dbTeamA) {
      res.json(dbTeamA);
    });
  });

  app.delete("/api/players/b", function(req, res) {
    db.TeamB.destroy({ where: {}  }).then(function(dbTeamB) {
      res.json(dbTeamB);
    });
  });
};

