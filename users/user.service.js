const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = {
    authenticate,
    forgot,
    getAll,
    getById,
    bounce,
    // isPresent,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {

    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function bounce(stuff) {  // to test whether the JSON submitted via a form is arriving intact.
    return console.log("#########  RECEIVED  ###########  \n",stuff)
}

async function forgot(username) {
    // validate
    if (await User.findOne({ username: username })) {

            // let content=encodeURIComponent(username);
          
            let transporter = nodemailer.createTransport({  // 
                host:process.env.DL_HOST,
                // port: 587,
                auth: {
                  user:process.env.DL_EMAIL,
                  pass:process.env.DL_PASS
                },
                tls: {rejectUnauthorized: false},
                debug:true,
                name: "mail.developerlevel.com"
            })
            console.log("1. Transporter ready. username =",username)

            let mailOptions = {
                from: `"DeveloperLevel Support" <${process.env.DL_EMAIL}>`, // sender email address
                to: username, //email address you want to send email to.
                subject: "Password Reset", 
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://DeveloperLevel.com/reset/ \n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
          
          console.log("2. MailOptions ready",mailOptions)
            let info = await transporter.sendMail(mailOptions);
            console.log('3. Message sent:', info);
            console.log(nodemailer.getTestMessageUrl(info));
        
            // only needed when using pooled connections
            // transporter.close();
        }

        // console.log("############### req.headers.host", req.headers.host)
        // const sgMail = require('@sendgrid/mail');
        // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        // const msg = {
        // to: username,
        // from: 'support@paladinarcher.com',
        // subject: 'DeveloperLevel password reset',
        // text: 'and easy to do anywhere, even with Node.js',
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>'
        // };
        // console.log("############### req.headers.host", req.headers.host)
        // sgMail.send(msg)
        // .catch(console.log("Caught an error:", err));
}

async function getAll() {
    return await User.find().select('-hash');
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(userParam) {
    
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw `Username ${userParam.username} is already taken`;
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user 
    await user.save();
    throw `User ${userParam.username} has been created`
}

async function update(id, userParam) {
    console.log("id",id)
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
    throw `User ${id} has been deleted`;
}