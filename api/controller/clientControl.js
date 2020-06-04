// CRUD function for client
const mongoose = require('mongoose');
const Client = require('../models/Client');

exports.getClient = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json({ clients: clients });
    } catch(err) {
        res.status(200).json({ error: err });
    };
};

exports.findClient = async (req, res) => {
    try {
        const clientId = req.params.clientId;
        const client = await Client.findById(clientId);
        res.status(200).json({ client: client });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.addClient = async (res, req) => {
    try {
        const client = new Client({
            clientName: req.body.clientName,
            email: req.body.email,
            number: req.body.number
        });
        const result = await client.save();
        res.status(200).json({ result: result });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.deleteClient = async (res, req) => {
    try {
        const clientId = req.params.clientId;
        const result = await Client.findByIdAndDelete(clientId);
        res.status(200).json({ result: result });
    } catch(err) {
        res.status(500).json({ error: err });
    };
};

exports.updateClient = async (req, res) => {
    try {
        const clientId = req.params.clientId;
        const result = await Client.findByIdAndUpdate(clientId, req.body);
        res.status(200).json({ result: result });
    } catch(err) {
        res.status(500).json({ error: err });
    }
}