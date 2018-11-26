module.exports = function (app) {
  
    app.get('/auth', function(req, res) {
      res.json({ message: "Hello World" });
    });
  };