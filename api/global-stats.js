const connectToDatabase = require('../mongodb/connection');

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('test_active_global_stats')
  const globalStatsData = await collection.findOne({})
  delete globalStatsData._id;
  res.status(200).json(globalStatsData)
}