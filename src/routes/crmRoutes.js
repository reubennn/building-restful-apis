import {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact
} from "../controllers/crmController";

const routes = (app) => {
    // ---------- Endpoints ---------- //
    app.route("/contact")
        // Get all contacts
        .get((req, res, next) => {
            // Middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)

        // Add a new contact
        .post(addNewContact);

    app.route("/contact/:contactId")
        // Get a specific contact
        .get(getContactWithId)

        // Update a specific contact
        .put(updateContact)

        // Delete a specific contact
        .delete(deleteContact);
}

export default routes;