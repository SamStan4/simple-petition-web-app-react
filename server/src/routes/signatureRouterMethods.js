const sqlite3 = require("sqlite3");

//*********************************************************************************************************************************//

const db = new sqlite3.Database("./data/signatures.db", (err) => {
    if (err) {
        throw new Error("FATAL ERROR: could not connect to database inside signature method module")
    } else {
      console.log("admin secure method module connected to database");
    }
  });

//*********************************************************************************************************************************//

async function getSignatures() {
  const sqlString = "SELECT * FROM SignatureTable;";
  return new Promise((resolve, reject) => {
    db.all(sqlString, [], function (err, rows) {
      if (err) {
        return reject(err);
      } else if (!rows) {
        return reject(new Error("rows undefined"));
      }
      return resolve(rows);
    });
  });
}

//*********************************************************************************************************************************//

module.exports = {
  getSignatures
};