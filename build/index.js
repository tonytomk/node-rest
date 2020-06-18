"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    res.send("<div>\n<h1>Welcome</h1>\n<p>API Details</p>\n<a href=\"https://rest-node-t.herokuapp.com/data.json\" target=\"_blank\">Set 1</a>\n</div>");
});
// app.set('json spaces', 4)
app.get(('/data.json'), function (req, res) {
    var data = fs_1.default.readFileSync('./data/football.csv', {
        encoding: 'utf-8',
    }).split('\n');
    var result = [];
    var headers = data[0].split(",");
    for (var i = 1; i < data.length; i++) {
        var obj = {};
        var currentline = data[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4));
    // res.json(result);
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
});
