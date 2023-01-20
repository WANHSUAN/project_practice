// Require https module

const https = require("https");

function getDef(term) {
  try {
    // reqeust data
    const request = https.get(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=bb6900e0-2327-482b-98de-ddc3cfca3bd7`,
      (response) => {
        let body = "";
        // Read the data
        response.on("data", (data) => {
          body += data.toString();
        });

        response.on("end", () => {
          // Parse the data
          const defiintion = JSON.parse(body);
          // Print the data
          console.log(defiintion[0].shortdef);
        });
      }
    );
    request.on("error", (error) => console.error(error.message));
  } catch (error) {
    console.error(error.message);
  }
}

const query = process.argv.slice(2);
query.forEach(getDef);
