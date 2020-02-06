const connectToDatabase = require('../mongodb/connection');
/**
 * @api {get} /echart-confirmed
 * @apiVersion 0.0.0
 * @apiName GetEchartDeaths
 * @apiGroup Echart Deaths
 *
 * @apiSuccess {object} data Object used to create an echart
 * @apiSuccess {string} insert_date Upload date
 * @apiSuccess {string} _id unique id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "data":{
 *            "tooltip":{
 *                "trigger":"axis"
 *            },
 *            "legend":{
 *                "data":["Deaths","Forecast"]
 *            },
 *            "grid":{
 *                "left":"3%",
 *                "right":"4%",
 *                "bottom":"3%",
 *                "containLabel":true
 *             },
 *            "xAxis":{
 *                "type":"category",
 *                "boundaryGap":false,
 *                "data":[
 *                    "1/22/20"
 *                ]},
 *            "yAxis":{
 *                "type":"value",
 *                "position":"right"
 *            },
 *            "series":[
 *                {
 *                    "name":"Deaths",
 *                    "type":"line",
 *                    "data":[0]
 *                }
 *            ]
 *        },
 *        "insert_date":"2020-02-06T09:00:04.798Z",
 *        "_id":"10e97470-48bf-11ea-828c-5168a5b9223a"}
 *
 */

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('active_echart_deaths')
  const echartDeathsData = await collection.findOne({})
  delete echartDeathsData.uuid;
  res.status(200).json(echartDeathsData)
}