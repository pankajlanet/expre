require('../src/mongoose/tasksdb')
const Tasks = require('../src/db/tasks');

Tasks.deleteOne({_id : "61374c3557ee9f11bacc9b11"}).then((result) => {
    return(result.deletedCount)

}).then( (res)=> {
    console.log("item deleted" , res)
}
)