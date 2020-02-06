/**
 * @api {get} /echart-confirmed
 * @apiVersion 0.0.0
 * @apiGroup Echart Confirmed Infections
 * @apiName GetEchartConfirmedInfections
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
 *                "data":["Infected","Forecast"]
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
 *                    "name":"Infected",
 *                    "type":"line",
 *                    "data":[0]
 *                }
 *            ]
 *        },
 *        "insert_date":"2020-02-06T09:00:04.798Z",
 *        "_id":"10e97470-48bf-11ea-828c-5168a5b9223a"}
 *
 */
const connectToDatabase = require('../mongodb/connection');

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('active_echart_confirmed')
  const echartConfirmedData = await collection.findOne({})
  delete echartConfirmedData.uuid;
  res.status(200).json(echartConfirmedData)
}