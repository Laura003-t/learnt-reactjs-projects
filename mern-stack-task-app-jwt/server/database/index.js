const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lorabrus35:pimEEtIIWFpc8kxq@cluster0.jofpidq.mongodb.net/').then(()=>
console.log('MongoDB Connection successful')).catch(error=> console.log('Error occured: ${error}'));