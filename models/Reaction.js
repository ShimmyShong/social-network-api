const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
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
            default: Date.now(),
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