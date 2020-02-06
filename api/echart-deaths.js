const connectToDatabase = require('../mongodb/connection');

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('test_active_echart_deaths')
  const echartDeathsData = await collection.findOne({})
  delete echartDeathsData._id;
  res.status(200).json(echartDeathsData)
}