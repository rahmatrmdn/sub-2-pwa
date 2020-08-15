var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BIMSub_ga0ZgUP_aI3aCoz8vuIIWUTtqb7EHBqhrNTNb_2dXY4bWNNrngKFXai3EpZ-70rn-K4iX90xDd07Oumk",
    "privateKey": "nt-7u2il1wwPEyHTrAnX3gEoGZCha_p_J-al3r_iOHU"
};


webPush.setVapidDetails(
    'mailto:rahmat.rama98@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eU_jGe_vFhE:APA91bGZI_J4jqmyGxy7DpRlbdz3iAeozojYB73i9Fdcp1nuCsfL6ZYk9ukrt92wcEEkSJArXBFsWBwikNw2Snlh-0aw0p598kD-PQtRuDEPjbS_KYN2axPRuPQ68kRatfy9loL-qh-B",
    "keys": {
        "p256dh": "BCpTN5FZ/jRht9Pq1A/mzrra6BGgSHNNkPLSee6prWcJ4KHosx4MleEntTb0DXTy+nGIFHmJLKOCIsoIqpmqTh0=",
        "auth": "BOL4I2pvj7MQcya6s6PqBQ=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '403108446847',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);