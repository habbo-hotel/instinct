"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../user");
exports.examplePhoto = {
    id: 1,
    createdAt: +new Date() / 1000,
    userID: user_1.exampleUser.id,
    user: user_1.exampleUser,
    roomID: 1,
    imagePath: '/photos/1.png',
};
//# sourceMappingURL=Photo.js.map