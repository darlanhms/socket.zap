var crypto = require('crypto');

const nSalt = 'D!@#D$1!@#$vF#%5vEY&&*&+_`^Ç';

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
function sha512 (password, salt) {
    return crypto.createHmac('sha512', salt).update(password).digest('hex');
};

exports.saltHashPassword = (userpassword) => {
    return sha512(userpassword, nSalt);
}