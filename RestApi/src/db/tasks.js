const mongoose = require('mongoose');

const Tasks = mongoose.model( 'Tasks' , 
    {
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
    }
)

module.exports = Tasks