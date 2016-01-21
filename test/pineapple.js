/**
 * Created by Bunchhieng on 1/18/2016.
 */
var login = require("facebook-chat-api"),
    fs = require("fs"),
    request = require('request'),
    Cleverbot = require('cleverbot-node'),
    cleverEnabled = {};

// Create simple echo bot
login({email: "rohitkrishnan101@gmail.com", password: ""}, function callback(err, api) {
    if (err) {
        return console.error(err);
    }
    api.setOptions({selfListen: true});

    api.listen(function callback(err, message) {
        console.log(message);
        if (message.body.indexOf("is a pineapple") >= 0 && message.body.indexOf("Proof") == -1) {
            var name = message.body.replace(" is a pineapple", "");
            var i;
            var found = false;
            if (name.indexOf("roger") >= 0) {
                console.log("Roger picture");
                makePic("roger", function () {
                    var msg = {
                        body: "Proof " + name + " is a pineapple:",
                        attachment: fs.createReadStream(__dirname + '/tesOutput.png')
                    };
                    api.sendMessage(msg, message.threadID);
                });
            }
            else {
                for (i = 0; i < message.participantNames.length; i++) {
                    if (message.participantNames[i].toLowerCase().indexOf(name.toLowerCase()) >= 0) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    api.sendMessage("Uhh, " + name + " was not found. Best check yo self.", message.threadID);
                    return;
                }
                var userID = message.participantIDs[i];

                download('http://graph.facebook.com/' + userID + '/picture?type=large', 'carlos.jpg', function () {
                    makePic(name, function () {
                        var msg = {
                            body: "Proof " + name + " is a pineapple:",
                            attachment: fs.createReadStream(__dirname + '/tesOutput.png')
                        };
                        api.sendMessage(msg, message.threadID);
                    });
                });
            }

        }
        else if (message.body.toLowerCase().indexOf("sup nigga") == 0) {
            if (!cleverEnabled[message.threadID]) {
                cleverEnabled[message.threadID] = {
                    clever: true,
                    ready: false,
                    bot: new Cleverbot
                };
                console.log(cleverEnabled[message.threadID].bot);
                Cleverbot.prepare(function () {
                    api.sendMessage("Hey " + message.senderName.split(" ")[0] + ", im gonna be extra clever with you now. You can stop this by saying 'stfu bruh'", message.threadID);
                });
            }
            else {
                api.sendMessage("Im already clever now. Hold your pants.", message.threadID);
            }
        }
        else if (message.senderName.indexOf("Rohit") != 0 && cleverEnabled[message.threadID] && cleverEnabled[message.threadID].clever == true) {
            cleverEnabled[message.threadID].bot.write(message.body, function (response) {
                api.sendMessage(response.message, message.threadID);
            });
        }
        else if (message.body.toLowerCase().indexOf("stfu bruh") == 0) {
            cleverEnabled[message.threadID] = null;
            api.sendMessage("Okey :(", message.threadID);
        }
    });
});

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

function makePic(name, cb) {
    if (name.indexOf("roger") >= 0) {
        var gm = require('gm');
        gm('roger.jpg')
            .resize('100', '100').write('roger_small.jpg', function () {
            gm()
                .in('-page', '+0+0')
                .in('pineapple.jpeg')
                .in('-page', '+150+20') // location of smallIcon.jpg is x,y -> 10, 20
                .in('roger_small.jpg')
                .mosaic()
                .write('tesOutput.png', function (err) {
                    cb();
                });
        });
    }
    else {
        var gm = require('gm');
        gm('carlos.jpg')
            .resize('100', '100').write('carlos_small.jpg', function () {
            gm()
                .edge(3)
                .in('-page', '+0+0')
                .in('pineapple.jpeg')
                .in('-page', '+150+20') // location of smallIcon.jpg is x,y -> 10, 20
                .in('carlos_small.jpg')
                .mosaic()
                .write('tesOutput.png', function (err) {
                    cb();
                });
        });
    }
}