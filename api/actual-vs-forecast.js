const connectToDatabase = require('../mongodb/connection');

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('test_active_actual_vs_forecast')
  const actualVsForecast = await collection.findOne({})
  delete actualVsForecast._id;
  res.status(200).json(actualVsForecast)
}