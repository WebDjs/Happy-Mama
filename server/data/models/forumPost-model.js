const modelRegistrator = require("./utils/model-registrator");

module.exports = modelRegistrator.register("Ad", {
    title: {
        type: String,
        min: 10,
        max: 100,
        required: true,
        unique: true
    },
    postedOn: {
        type: Date,
        required: true,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    author: {},
    category: {},
    comments: [{
        author: {},
        created: {
            type: Date,
            required: true,
            default: Date.now
        },
        content: {
            type: String,
            required: true,
            min: 10,
            max: 500
        }
    }],
    isDeleted: {
        type: Boolean,
        default: false
    }
});