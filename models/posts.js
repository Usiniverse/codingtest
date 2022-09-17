const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
    {
        userId : String,
        nickname: String,
        title : String,
        content: String,
    },
    { timestamps: true }
);

PostSchema.virtual('postId').get(function () { 
    return this._id.toHexString(); 
});

PostSchema.set('toJSON', { virtuals: true });

const post = mongoose.model('post', PostSchema);

module.exports = post;