const config = require('config');
const axios = require('axios');
const address = `${config.get('api.address')}:${config.get('api.port')}`;

async function get(path) {
    try {
        let {data} = await axios.get(path);
        return data;
    } catch(e) {
        return [];
    }
}

async function post(path, reqData) {
    try {
        let {data} = await axios.post(path, reqData);
        return data;
    } catch (e) {
        return [];
    }
}

exports.schedule = async (args) => {
    if (args == undefined) {
        return await get(`${address}/tunniplaan`);
    } else {
        return await post(`${address}/tunniplaan`, args);
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