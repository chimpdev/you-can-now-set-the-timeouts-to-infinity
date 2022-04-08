## Hi! Welcome to Home Page. 👋
<div align="left">
  <p>
    <a href="https://www.npmjs.com/package/you-can-now-set-the-timeouts-to-infinity"><img src="https://img.shields.io/npm/v/you-can-now-set-the-timeouts-to-infinity.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/you-can-now-set-the-timeouts-to-infinity"><img src="https://img.shields.io/npm/dt/you-can-now-set-the-timeouts-to-infinity.svg?maxAge=3600" alt="npm downloads" /></a>
  </p>
This package allows you to set the timeouts and intervals to infinity.

# Installation

**Node.js 16.6.0 or newer is required.**

```sh-session
npm install you-can-now-set-the-timeouts-to-infinity@latest
```

# Simple Instance
```js
const { Timeout, Interval } = require('you-can-now-set-the-timeouts-to-infinity');
new Timeout(() => console.log('Hi! after 30 days..'), 2592000000);
new Interval(() => console.log('Hi! again..'), 2592000000);
```

# News
- Published.

# Contact
[![Discord Badge](https://img.shields.io/badge/can-white?style=social&logo=Discord)](https://discord.com/users/613700645173592086)<br>
[![Discord Badge](https://img.shields.io/badge/thiskyhan-white?style=social&logo=Instagram)](https://instagram.com/thiskyhan)
