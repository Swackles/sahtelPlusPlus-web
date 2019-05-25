const config = require('config');
const axios = require("axios");

async function get(path) {
    let response = await axios.get(path);
    return response.data
}

async function post(path, data) {
    let response = await axios.post(path, data);
    return response.data
}

exports.schedule = async (args) => {
    if (args == undefined) {
        return await get(`${config.get("api.host")}/tunniplaan`);
    } else {
        post(`${config.get("api.host")}/tunniplaan`, args);
    }
}

exports.auth = (args, callback) => {
    post(args, `${config.get("api.host")}/user/auth`, callback);
}

exports.subjects = async () => {
    return await get(`${config.get("api.host")}/subject`);
}

exports.teachers = async () => {
    return await get(`${config.get("api.host")}/teacher`);
}

exports.rooms = async () => {
    return await get(`${config.get("api.host")}/room`);
}

exports.classes = async () => {
    return await get(`${config.get("api.host")}/class`);
}