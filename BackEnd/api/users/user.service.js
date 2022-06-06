const pool = require("../../config/db");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registration(fName,lName,email,password,number)
                values(?,?,?,?,?)`, [
                data.fName,
                data.lName,
                data.email,
                data.password,
                data.number,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select id,fName, lName, email, number from registration`, [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserbyUserId: (id, callBack) => {
        pool.query(
            `select id,fName, lName, email, number from registration where id =?`, [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    UpdateUser: (data, callBack) => {
        pool.query(
            `update registration set fName=?, lName=?, email=?,password=?, number=? where id =?`, [
                data.fName,
                data.lName,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from registration where id =?`, [
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
};