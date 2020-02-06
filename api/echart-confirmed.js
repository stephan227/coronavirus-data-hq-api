const connectToDatabase = require('../mongodb/connection');

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('active_echart_confirmed')
  const echartConfirmedData = await collection.findOne({})
  delete echartConfirmedData._id;
  res.status(200).json(echartConfirmedData)
}