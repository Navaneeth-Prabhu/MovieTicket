const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    Genre:{
        type:Array,  
    },
    director:{
        type:String,  
    },
    // Duration:{
    //     type:String,  
    // },
    // startDate:{
    //     type:Date,  
    // },
    
    youtubeLink:{
        type:String,  
    },
    Review:{
      type:Array,
    },
    Language:{
      type:Array,
    },
    PosterImg:{
      type:String,
    }
  },
  {
    timestamps: true,
  }
);


const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;