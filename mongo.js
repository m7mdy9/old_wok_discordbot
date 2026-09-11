const mongoose = require('mongoose')

module.exports = async () => {
  await mongoose.connect("REMOVED_OUT_IN_9-11-2026", { //i removed this cause it contained a mongodb uri key, man 11-12 year old me was something else
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  return mongoose
}