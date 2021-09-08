/* ********************************************************************************************************/
                                    //BASIC SETUP
/* ********************************************************************************************************/

// const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27018/task-manager-api", {
//     useNewUrlParser: true,
//     //useCreateIndex : true
// });


// const User = mongoose.model('User', {
//     name: {
//         type: String,
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'anish yadav',
//     age: "RAJAT"
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log(err)
// })

/* ********************************************************************************************************/
                                    //PRATICE SETUP
/* ********************************************************************************************************/

// const mongoose = require('mongoose');
// mongoose.connect( 'mongodb://127.0.0.1:27018/Tasks' )

// const Tasks = mongoose.model('Tasks' , {
//     description  : {
//         type : String
//     },
//     completed : 
//     {
//         type : Boolean
//     }
// })

// const me = new Tasks({
//     description : 'Cook Food',
//     completed : false
// })

// me.save().then( ()=> [
//     console.log("data saved")
// ]).catch( ()=> {
//     console.log("Not saved")
// })

/* ********************************************************************************************************/
                                    //BUILD IN VALIDATION
/* ********************************************************************************************************/

// const mongoose = require('mongoose');
// const validator = require('validator')

// mongoose.connect("mongodb://127.0.0.1:27018/Email", {
//     useNewUrlParser: true,
//     //useCreateIndex : true
// });


// const User = mongoose.model('User', {
//     Email: {
//         trim :true,
//         type: String,
//         required : true,
//         validate : (value)=> {
//             if(!validator.isEmail(value))
//             {
//                throw 'invalid email'
//             }
             


//         }
       
//     },
//     Password: {
        
//         type: String,
//         default : 'test@123',
//         validate : (value)=> {
//             if(value.length < 8  )
//             {
//                 throw 'must must be greater than 8 letters'
//             }

//             return value.trim()
//         }
      
//     }
// })

// const me = new User({
//     Email : 'tsssfsdv@fsadf.com',
//     Password  :'k$        a s   1fd6   5f  18'
    
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log(err)
// })



/* ********************************************************************************************************/
                                    //BASIC VALIDATION AND SANITAZATION
/* ********************************************************************************************************/

const mongoose = require('mongoose');
mongoose.connect( 'mongodb://127.0.0.1:27018/task-manager-api' )


const Tasks = mongoose.model('Tasks' , {
        description  : {
            trim : true,
            type : String,
            required : true
        },
        completed : 
        {   
            default : false,
            type : Boolean
        }
    })

    const me = new Tasks({
      
    })

me.save().then( ()=> {
    console.log("response is : " , me)
}).catch( ()=> {
    console.log("cannot save the file")
})