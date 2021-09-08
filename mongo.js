// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const connectionURL = "mongodb://127.0.0.1:27018";
// const dataBaseName = "task-manager";
// //connecting to the database
// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
//     if (err) {
//         console.log(err);
//         return console.log("Unable to connect with database");
//     }

//     //getting the database to make CRUD operations
//     const db = client.db(dataBaseName);

//     //   db.collection("users").insertOne(
//     //     {
//     //       name: "ajay digwal",
//     //       age: 55,
//     //     },
//     //     (err, result) => {
//     //       console.log(result.ops);
//     //     }
//     //   );

//     //sending mulitple data to database

//     db.collection("users").insertMany(
//         [
//             {
//                 name: "zaid",
//                 age: 11,
//             },
//             {
//                 name: "zabbar",
//                 age: 12,
//             },
//         ],
//         (err, result) => {
//             if (err) {
//                 return console.log(err);
//             }

//             console.log(result);
//         }
//     );
// });

//******************************************************************************************************** */
                        // db.insert many (Create operation)
//******************************************************************************************************** */

// const mongodb  = require('mongodb');
// const {ObjectId} = require("mongodb")
// const MongoClient =  mongodb.MongoClient;

// const Url = 'mongodb://127.0.0.1:27018'
// const dataBaseName = "task-manager";

// const id = new ObjectId();
// console.log(id)
// console.log(id.getTimestamp())
// MongoClient.connect(Url , {useNewUrlParser  : true} ,(err , client)=> {
//     const db =  client.db(dataBaseName)
//     db.collection('users').insertMany( [
//         {name : 'sunil',
//         age : 22
//         },
//         {
//             _id : id,
//             name : "yadav",
//             age : 66
//         }
//     ] , ( err ,result) => 
//     {
//         console.log(result)
//     })
// } )


//******************************************************************************************************** */
                        // Read operation for mongodb
//******************************************************************************************************** */


// const mongodb  = require('mongodb');
// const MongoClient =  mongodb.MongoClient;

// const connectionURL = "mongodb://127.0.0.1:27018";
// const databaseName = "task-manager"

// MongoClient.connect(connectionURL , { useNewUrlParser : true} , (err , client)=> {
//     if(err)
//     {
//         return console.log("unable to connect to server")
//     }


//     //read operation reading the detials by findOne method 
//     const db = client.db(databaseName);
//     db.collection('users').findOne({_id : "6135da704864cb80eadc086f"} , (error ,result)=> {
//         console.log(result)
//     } )



// })


//******************************************************************************************************** */
                        // Read operation for mongodb searching by _id
//******************************************************************************************************** */



// const { ObjectID } = require('bson');
// const mongodb  = require('mongodb');

// const MongoClient =  mongodb.MongoClient;

// const connectionURL = "mongodb://127.0.0.1:27018";
// const databaseName = "task-manager"

// MongoClient.connect(connectionURL , { useNewUrlParser : true} , (err , client)=> {
//     if(err)
//     {
//         return console.log("unable to connect to server")
//     }


//     //read operation reading the detials by findOne method  by id
//     const db = client.db(databaseName);
//     // db.collection('users').findOne({_id : new ObjectID("6135da704864cb80eadc086f")} , (error ,result)=> {
//     //     console.log(result)
//     // } )


//     //reading mulitple data with find method

//     // db.collection('users').find({age : 55} ).toArray((e,r) => {
//     //     console.log(r);
//     // } )



//******************************************************************************************************** */
                        // updating the value in the data base using the "updateOne" method
//******************************************************************************************************** */

// const { ObjectID } = require("bson");
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const connectionURL = "mongodb://127.0.0.1:27018";
// const databaseName = "task-manager";


// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
//   if (err) {
//     return console.log("Unable to connect with database");
//   }
//   const db = client.db(databaseName);
// //   const updatePromise = db.collection("users").updateOne(
// //     { name: "zaid" },
// //     {
// //       //we have to use set to update the values you want to update in your database
     
// //      //setting age
// //     //   $set : {
// //     //       age : 6
// //     //   }

// //     // increment some value
// //         // $inc :
// //         // {
// //         //     age : 1
// //         // }
// //     }
// //   );

//   const updatePromise = db.collection("users").updateMany({
//       age : 55
//   }, 
//   {
//    $
//   })

//   updatePromise.then((result) => {
//     console.log(result);
//   });
// });


//******************************************************************************************************** */
                        //  delete operation on database
//******************************************************************************************************** */

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const Url  = 'mongodb://127.0.0.1:27018'
const dataBaseName = 'task-manager'

MongoClient.connect(Url , { useNewUrlParser : true} , (err,client) =>
{
    if(err)
    {
       return  console.log("error encountered")
    }
    const db = client.db("task-manager");
    

    //         DELETE ONE
    // const deletePromise = db.collection('users').deleteOne({
    //     name : 'rocky'
    // })

    //         DELETE MANY
    const deletePromise = db.collection('users').deleteMany(
        {
            age : 22
        }
    ).then((res) => {
        console.log(res);
    }).catch(
        (err)=> [
            console.log(err)
        ]
    )
    

    // deletePromise.then( (res)=> {
    //     console.log(res)
    // }).catch(
    //     (err)=> {
    //         console.log(err)
    //     }
    // )



})