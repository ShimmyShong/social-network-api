const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(), //TODO: format this later
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

thoughtSchema.virtual('formattedDate').get(function () {
    const formattedDate = `${this.createdAt.toLocaleDateString()} at ${this.createdAt.toLocaleTimeString()}`
    return formattedDate;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;