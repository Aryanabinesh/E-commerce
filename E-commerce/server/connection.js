const mongoose = require ('mongoose');

const connection = ()=>{
    mongoose.connect('mongodb+srv://abinesh22052001:abinesh2024@cluster1.qzkcn.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
}

module.exports = connection