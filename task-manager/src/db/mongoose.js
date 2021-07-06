const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-mamager-api',
{useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:true,
    useUnifiedTopology:true
})