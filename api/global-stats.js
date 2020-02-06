const connectToDatabase = require('../mongodb/connection');

/**
 * @api {get} /global-stats
 * @apiGroup Global Statistics
 * @apiName GlobalStats
 *
 * @apiSuccess {array} data Contains an array with global statistics
 * @apiSuccess {string} insert_date Upload date
 * @apiSuccess {string} _id unique id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "data":{
 *          [
 *            {
 *              "country_id":1,
 *              "country_name":"China",
 *              "county_id":1,
 *              "county_name":"Hubei province",
 *              "coordinates":[30.583332,114.283333],
 *              "cases":19665,
 *              "deaths":549,
 *              "serious":2328,
 *              "critical":756,
 *              "recovered":633
 *            }
 *          ]
 *        },
 *        "insert_date":"2020-02-06T09:00:04.798Z",
 *        "_id":"10e97470-48bf-11ea-828c-5168a5b9223a"
 *      }
 *
 */

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('active_global_stats')
  const globalStatsData = await collection.findOne({})
  delete globalStatsData.uuid;
  res.status(200).json(globalStatsData)
}