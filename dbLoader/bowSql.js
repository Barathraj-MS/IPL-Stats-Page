const fs = require("fs");
const mysql = require("mysql2");
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("ball.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();
    // create a new connection to the database
    const connection = mysql.createConnection({
      host: "localhost",
      user: 'root',
    password: '0040',
      database: "ipl"
    });
    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
          "INSERT INTO bowlers(Name,Wickets,Maiden,DotBalls,BowlingAvg,EcoRate,StrikeRate,HatTrick,FourWickets) VALUES ?";
        connection.query(query, [csvData], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });
stream.pipe(csvStream);
