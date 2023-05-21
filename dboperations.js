var config = require("./dbconfig");
const sql = require("mssql");

async function getOrders() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * from TK_LCD");
    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getResults(date) {
    try {
      let pool = await sql.connect(config);
      let query = `SELECT CAST(date_time AS DATE) AS date, status, COUNT(*) AS count
                   FROM TK_LCD
                   WHERE CAST(date_time AS DATE) = '${date}'
                   GROUP BY CAST(date_time AS DATE), status`;
  
      let results = await pool.request().query(query);
      return results.recordsets;
    } catch (error) {
      console.log(error);
    }
  }
  

async function getTKLCD() {
    try {
      let pool = await sql.connect(config);
      let products = await pool.request().query("SELECT * from TK_LCD");
      return products.recordsets;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function getTKLCDResults(date) {
    try {
      let pool = await sql.connect(config);
      let query = `SELECT CAST(date_time AS DATE) AS date, status, COUNT(*) AS count
                   FROM TK_LCD
                   WHERE CAST(date_time AS DATE) = '${date}'
                   GROUP BY CAST(date_time AS DATE), status`;
  
      let results = await pool.request().query(query);
      return results.recordsets;
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
  getOrders: getOrders,
  // getOrder: getOrder,
  // addOrder: addOrder,
  getResults: getResults,
  getTKLCD: getTKLCD,
  getTKLCDResults: getTKLCDResults,
};
