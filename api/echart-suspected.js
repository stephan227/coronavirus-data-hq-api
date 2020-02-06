const connectToDatabase = require('../mongodb/connection');

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('active_echart_suspected')
  const echartSuspectedData = await collection.findOne({})
  delete echartSuspectedData._id;
  res.status(200).json(echartSuspectedData)
}