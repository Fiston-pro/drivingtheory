
var admin = require("firebase-admin");

var serviceAccount = require("./drivingtheorytest-43736-firebase-adminsdk-oxt5u-147c295d57.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
