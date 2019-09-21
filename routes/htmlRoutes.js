var db = require("../models/example.js");
var path = require("path");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log()
    //db.model.findAll({}).then(function(dbPlayers) {
      res.render("index", {
        msg: "Welcome!",
        //examples: dbPlayers
      });
    //});
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/watch", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/nba_game_visualizer/index.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

//use static file to serve up 