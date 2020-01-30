const url = require('url')
const MongoClient = require('mongodb').MongoClient

let cachedDb = null

// A function for connecting to MongoDB,
// taking a single paramater of the connection string
async function connectToDatabase(uri) {
    if (cachedDb) {
      return cachedDb
    }

    const client = await MongoClient.connect(uri, { useNewUrlParser: true })
    const db = await client.db(url.parse(uri).pathname.substr(1))
    cachedDb = db
    return db
}


module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = await db.collection('active_actual_vs_forecast')
  const actualVsForecast = await collection.findOne({})
  delete actualVsForecast._id;
  res.status(200).json(actualVsForecast)
}