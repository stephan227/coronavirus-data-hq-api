const connectToDatabase = require('../mongodb/connection');

/**
 * @api {get} /actual-vs-forecast
 * @apiName GetActualVSForecast
 * @apiGroup Forecasts
 *
 * @apiSuccess {data} array of Actual vs. Forecast data
 * @apiSuccess {insert_date} date when data was created
 * @apiSuccess {_id} record unique id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "data":[
 *          {
 *              "date":"1/22/20",
 *              "confirmed_forecast":495,
 *              "deaths_forecast":10",
 *              "confirmed_actual":651,
 *              "deaths_actual":25,
 *              "suspected_actual":257
 *          }
 *        ],
 *        "insert_date":"2020-02-04T14:54:22.184Z",
 *        "_id": "5e369cc1058a17a2430ff097"
 *      }
 *
 */

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('active_actual_vs_forecast')
  const actualVsForecast = await collection.findOne({})
  delete actualVsForecast.uuid;
  res.status(200).json(actualVsForecast)
}