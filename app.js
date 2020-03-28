const exemple = require('./events/limite-callbacks-exemple');
const exmple2 = require('./events/eventEmitter_exmple');

console.log('exemple with limite-callbacks-exemple lancée');
exemple.timer(undefined,undefined, () => console.log('3 secondes écoulées. '));

console.log('eventEmitter_exmple lancée');
exmple2.timer.on('3_seconde', () => console.log('3 secondes ecoulées.'));
exmple2.launchTimer();