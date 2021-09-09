const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description : {
        required : true,
        type :String,
        validate : (value)=> {
            if(value.length === 0)
            {
                throw 'please enter some description'
            }
        }
    },
    completed : {
        type : Boolean,
        default : false

    }
})

const Tasks = mongoose.model( 'Tasks' , taskSchema)

module.exports = Tasks