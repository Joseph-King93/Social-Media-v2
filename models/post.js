const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const commentSchema = new Schema({
    textContent: {
        type: String
    }, 
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    }    
}, {
    timestamps: true,
    }
);

const postSchema = new Schema({
    textContent: {
        type: String
    }, 
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    comments: [commentSchema]
}, {
    timestamps: true,
    }
);

module.exports = mongoose.model('Post', postSchema);

