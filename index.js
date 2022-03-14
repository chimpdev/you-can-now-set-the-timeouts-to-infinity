const node = require('node:timers');

/**
 * @class Timeout
 * @author can#0002
 * @param {number} ms
 * @param {function} callback
 * @returns {Timeout}
 * @example
 * const interval = new Timeout(() => console.log('Hi!'), 1000);
 */

class Timeout {
  constructor(callback, time) {
    if(typeof callback !== 'function') throw new TypeError('Callback must be a function', 'Timeout');
    if(typeof time !== 'number') throw new TypeError('Time must be a number', 'Timeout');

    this.callback = callback;
    this.time = time;

    if(time >= 2147483647) {
      return node.setTimeout(() => {
        const newTime = time - 2147483647;
        return new Timeout(callback, newTime);
      }, 2147483647);
    } else return node.setTimeout(() => this.callback(), time);
  };
};

/**
 * @class Interval
 * @author can#0002
 * @param {number} ms
 * @param {function} callback
 * @returns {Interval}
 * @example
 * const interval = new Interval(() => console.log('Hi!'), 1000);
 */

class Interval {
  constructor(callback, time) {
    if(typeof callback !== 'function') throw new TypeError('Callback must be a function', 'Interval');
    if(typeof time !== 'number') throw new TypeError('Time must be a number', 'Interval');

    this.callback = callback;
    this.time = time;

    if(time >= 2147483647) {
      node.setInterval(() => {
        const newTime = time - 2147483647;
        return new Interval(callback, newTime);
      }, 2147483647);
    } else return node.setInterval(() => this.callback(), time);
  }; 
};

class TypeError extends Error {
  constructor(message, type) {
    super(message, type);
    this.name = type+'Error';
  };
};

module.exports = {
  Timeout,
  Interval
};