// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information 
// ===============================================================================

var numberData = require("../data/numbers");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/numbers", function(req, res) {
    res.json(numberData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the numberData array)
  // ---------------------------------------------------------------------------

  app.post("/api/numbers", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know about the current number pairs.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware

    /*************************************************************************8
    if (numberData.length < 5) {  /////*********************************** */
      numberData.push(req.body);
      res.json(true);
    // }

  });
}
