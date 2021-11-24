const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment-prefix")

const userMode =mongoose.Schema({

    name: {type:String,},
    lastname: {type:String},
    age:{type:Number}

});

autoIncrement.initialize(mongoose.connection);
userMode.plugin(autoIncrement.plugin, {
  model: "post", // collection or table name in which you want to apply auto increment
  field: "uid", // field of model which you want to auto increment
  prefix: 'uno', //
  // resetCount: 'reset',
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});

module.exports = mongoose.model ("updatdemo", userMode)