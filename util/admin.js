var admin = require("firebase-admin");

var serviceAccount = require("travelman-3fe85-firebase-adminsdk-euqrd-9d43a19d99.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };