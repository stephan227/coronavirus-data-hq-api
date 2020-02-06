const connectToDatabase = require('../mongodb/connection');

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('test_active_suspected')
  const suspectedCases = await collection.findOne({})
  delete suspectedCases._id;
  res.status(200).json(suspectedCases)
}