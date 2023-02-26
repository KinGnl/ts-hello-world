"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
// Routes
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// Listen
var port = process.env.PORT || 3000;
console.log("Starting hello-world server");
app.listen(port, function () { return console.log('Listening on localhost:' + port); });
//# sourceMappingURL=app.js.map