const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const dateFormat = require('../utils/dateFormat');
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'You need to leave a thought!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: { getters: true },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
    // return Array.isArray(this.reactions) ? this.reactions.length : 0
});

const Thought = model('Thought', thoughtSchema);


module.exports = Thought;