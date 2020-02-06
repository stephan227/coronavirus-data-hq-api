const connectToDatabase = require('../mongodb/connection');

/**
 * @api {get} /suspected
 * @apiGroup Suspected Infections
 * @apiName Suspected Infections
 *
 * @apiSuccess {object} data Suspected Infections count
 * @apiSuccess {string} insert_date Upload date
 * @apiSuccess {string} _id unique id
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        {
 *          "data":{
 *            "suspected":24702
 *          }
 *        },
 *        "insert_date":"2020-02-06T09:00:04.798Z",
 *        "_id":"10e97470-48bf-11ea-828c-5168a5b9223a"
 *      }
 *    }
 *
 */

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('active_suspected')
  const suspectedCases = await collection.findOne({})
  delete suspectedCases.uuid;
  res.status(200).json(suspectedCases)
}