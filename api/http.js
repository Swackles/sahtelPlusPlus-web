const http = require("http");

exports.get = (path, callback) => {
    http.get(`http://${path}`, (res) => {
        let data = "";

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            callback(data, null);
        });
    }).on("error", (err) => {
        console.log(err);
        callback(null, err);
    });
}