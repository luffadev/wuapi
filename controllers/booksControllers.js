const models = require('../models/index');

exports.getAllBooks = async (req, res, next) => {
    try {
        let strSql = 'SELECT id,title, auth, isbnissn,publisher, edition,pubyear  FROM books'
        const books = await models.sequelize.query(strSql, {
            type: models.sequelize.QueryTypes.SELECT
        });
        if (books.length === 0) {
            const error = new Error('ไม่พบข้อมูล');
            error.statusCode = 404;
            throw error;
        } else {
            res.status(200).json({
                books
            });
        }

    } catch (error) {
        res.status(error.statusCode || 500).json({
            error: {
                message: error.message
            }
        });
    }
}
exports.insertBook = async (req, res, next) => {
    try {
        const { title, auth, isbnissn, publisher, edition, pubyear } = req.body;
        let strSql = 'Insert into books(title, auth, isbnissn,publisher,edition,pubyear)';
        strSql += ` values('${title}','${auth}','${isbnissn}','${publisher}','${edition}','${pubyear}')`;
        const books = await models.sequelize.query(strSql, {
            type: models.sequelize.QueryTypes.INSERT
        });
        
        if (books[1]==1) {
            res.status(201).json({
                id: books[0]
            });
        } else {
            const error = new Error('เพิ่มข้อมูลไม่สำเร็จ');
            error.statusCode = 400;
            throw error;
            
        }
       
    } catch (error) {
        res.status(error.statusCode || 500).json({
            error: {
                message: error.message
            }
        });
    }
}