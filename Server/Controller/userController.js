const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATEBASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const hasEmptyFields = (body, error_list) =>{

    for(let field in body)
    {
        if(!body[field]){
            error_list[field] = `${field} is required`;
        }
    }
    
    if(Object.keys(error_list).length > 0 )
    {
        return true;
    }
    return false;
}

exports.register = async(req, res) => {
    const {first_name, last_name, email, password, confirm_password} = req.body;

    let error_list = {};

    // Fields in the Errors
    if(hasEmptyFields(req.body, error_list)){
        return res.status(400).json(error_list);
    }

    if(password !== confirm_password)
    {
        error_list.confirm_password = "Password does not match";
        return res.status(400).json(error_list);
    }
    
    const hashpassword = await(bcrypt.hash(password, 10));

    db.query(
        `INSERT INTO users SET ?`,
        {
            first_name : first_name,
            last_name : last_name,
            email : email,
            password : hashpassword
        },
        (err) =>{
            if(err){
                return console.log(err.message);
            }
            console.log('Registration Successful');
            res.send('success');
        }
    );
};