const config = require('config');
const axios = require('axios');
const address = `${config.get('api.address')}:${config.get('api.port')}`;

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
        return await get(`${address}/tunniplaan`);
    } else {
        post(`${address}/tunniplaan`, args);
    }
}

exports.auth = (args, callback) => {
    post(args, `${address}/user/auth`, callback);
}

exports.subjects = async () => {
    return await get(`${address}/subject`);
}

exports.teachers = async () => {
    return await get(`${address}/teacher`);
}

exports.rooms = async () => {
    return await get(`${address}/room`);
}

exports.classes = async () => {
    return await get(`${address}/class`);
}