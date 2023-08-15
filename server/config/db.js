const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MoNGODB_URL);
        console.log('Database Connected: ${conn.connection.host}');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;