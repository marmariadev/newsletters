const emailService = require('../services/emailService');

const addEmail = async (req, res) => {
    try {
        const email = await emailService.addEmail(req.body.email);
        res.status(201).json(email);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const listEmails = async (req, res) => {
    try {
        const emails = await emailService.listEmails();
        res.status(200).json(emails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addEmail,
    listEmails
};
