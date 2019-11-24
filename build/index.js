"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var request_1 = __importDefault(require("request"));
dotenv_1.default.config();
var app = express_1.default();
var port = 8080;
var webhookURL = process.env.WEBHOOK_URL;
if (!webhookURL) {
    console.log("You must enter a URL for the WEBHOOK_URL in the .env file!");
    process.exit();
}
app.use(express_1.default.json());
app.post('/', function (req, res) {
    request_1.default.post(webhookURL, {
        json: req.body,
    });
    res.end('POST sent successfully');
});
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
//# sourceMappingURL=index.js.map