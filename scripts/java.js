function sendEmail() {
    window.location = "mailto:khatab.ahmed@uoz.edu.krd";
}

function callTel() {
    window.location = "tel:009647504186736";
}

function checkAddress() {
    window.open('https://goo.gl/maps/yxgLDEhwNtqi4Rft7', '_blank');
}

function uozWeb() {
    window.open('https://web.uoz.edu.krd/', '_blank');
}

function inkAgency() {
    window.open('https://inkoffice.me', '_blank');
}

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1975, 1, 1)));


