const db = require("../db/dbConfig.js");


const authUser = async(user_name, password) => {
    try {
        const uid = await db.one("SELECT uid FROM users WHERE user_name=$1 AND password=$2",[user_name, password]);
        return uid;
    } catch (error) {
        return error;
    }
}

module.exports = {authUser};