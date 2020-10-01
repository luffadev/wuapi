const models = require('../models/index');

exports.insertBook = async (req, res, next) => {
    try {
        let { title, auth, isbnissn, publisher, edition, pubyear } = req.body;
        let strSQL = `INSERT INTO books(title,auth,isbnissn,publisher, edition,pubyear)`;
        strSQL += ` VALUES ('${title}' ,'${auth}','${isbnissn}','${publisher}','${edition}','${pubyear}')`;

        const books = await models.sequelize.query(strSQL, {
            type: models.sequelize.QueryTypes.INSERT
        });
        if (books[1] == 1) {
            res.status(201).json({
                id: books[0]
            })
        } else {
            const error = new Error('เพิ่มข้อมูลไม่สำเร็จ');
            error.statusCode = 500;
            throw error;
        }

    } catch (error) {
        res.status(error.statusCode || 500).json({
            error: {
                message: error.message
            }
        })
    }
}