const http = require("./http");
const config = require("config");

module.exports = (args, callback) => {
    if (args == undefined) {
        http.get(`${config.get("api.host")}/tunniplaan`, callback);
    } else {

    }
}