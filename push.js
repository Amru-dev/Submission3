var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BCi1qAWKXr7O0VmnMUoXwiOXRf_V7hfjJu7I7FgYcdxTzFYVq6umNTR62ql3h5IRpiyGrrwpC0nTxTxP_csA0iU",
   "privateKey": "zJqqEq-aGv3fPjobfezEl41EpT2VXvYghcIF9fl9dHA"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cBL1P7obWZ4:APA91bFJGy34iE59tauBf42TINL8ZGvzCi1Sin9vrMM04uQG0z1TqQVwfG2GUfrKBeX9zz47PIbw8yVsGP4ZAbYCeTGCIh6bBrDbnerNxZRXJ54mHGvF9iFTK2uFoKrAZ3KioT8b7xcB",
   "keys": {
       "p256dh": "BPrE9ShmRQcddtNRHSoyKOSZHJF01S9F9PpIKIdQYjNbITeTPV8qi5YNKW6rZtI3M+EctxG5A7QDRbUsKWUw908=",
       "auth": "NtvMC7aQEHJdf0SO7+SbUA=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: "437726145113",
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);