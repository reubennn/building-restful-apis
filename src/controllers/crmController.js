import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => { // param must match with the one specified in crmRoutes
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate(
        { _id: req.params.contactId },
        req.body,
        { new: true, useFindAndModify: false },
        // new: true - tells MongoDB to return the updated contact (false returns the old object)
        // useFindAndModify: false - no errors in message with deprecated warnings
        (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
};

export const deleteContact = (req, res) => {
    Contact.deleteOne({ _id: req.params.contactId }, (err, contact) => { // param must match with the one specified in crmRoutes
        if (err) {
            res.send(err);
        }
        res.json({message: "Successfully deleted contact"});
    });
};