const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    permissions: [String], // Array of permissions like ['create_user', 'delete_post']
});

module.exports = mongoose.model("Role", roleSchema);
