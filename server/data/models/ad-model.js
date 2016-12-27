const modelRegistrator = require("./utils/model-registrator");

module.exports = modelRegistrator.register("Ad", {
    title: {
        type: String,
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
    isDeleted: {
        type: Boolean,
        default: false
    }
});