const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_url, {
            
            useUnifiedTopology: true,
        });
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

module.exports = connectDB;
