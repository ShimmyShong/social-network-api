const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            max: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(), // TODO: format this later
        }
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

reactionSchema.virtual('formattedDate').get(function () {
    const formattedDate = this.createdAt.toLocaleDateString();
    return formattedDate
})

module.exports = reactionSchema;