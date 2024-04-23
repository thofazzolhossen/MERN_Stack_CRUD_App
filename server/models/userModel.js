import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    fname : {
        type : String,
        require : true
    },
    lname : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    pass : {
        type : String,
        require : true
    },
    

})

export default mongoose.model("User",userSchema);