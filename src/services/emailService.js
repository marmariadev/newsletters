const Email = require('../models/email');

const addEmail = async (email) => {
    try {
        return await Email.create({ email });
    } catch (error) {
        throw error;
    }
};

const listEmails = async () => {
    try {
        return await Email.find();
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addEmail,
    listEmails
};
