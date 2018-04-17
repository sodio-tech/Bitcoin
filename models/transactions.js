
const https = require('https');

module.exports.totaltrans = function (req, res) {
    var id = req.params.id;
    var base_URL = "https://blockchain.info/rawaddr/";
    var main_URL = "https://blockchain.info/rawaddr/" + id;

https.get(main_URL, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
      //console.log("Bitcon currency=====1======", data);
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      //Remove the below comment to get all bitcoin prises
      console.log(JSON.parse(data));//For all countries data
      res.send(data);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

}