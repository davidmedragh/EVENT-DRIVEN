const EventEmitter = require('events');

timer = new EventEmitter();

function launchTimer() {
    setTimeout(() => timer.emit('1_seconde'), 1000);
    setTimeout(() => timer.emit('2_seconde'), 2000);
    setTimeout(() => timer.emit('3_seconde'), 3000);
}

exports.timer = timer;
exports.launchTimer = launchTimer;