[![npm version](https://img.shields.io/npm/v/optional-syslog.svg?logo=npm)](https://www.npmjs.com/package/optional-syslog)

# About

This package installs [modern-syslog](https://www.npmjs.com/package/modern-syslog) as an optional dependency for ease of use on Windows (via a stub) and exposes some of its API.

There is also a compatiblity layer for users of the [posix](https://www.npmjs.com/package/posix) package (syslog related functions, drop-in replacement).

Constants are provided by [syslog-constants](https://www.npmjs.com/package/syslog-constants) and are always available.

# Usage

Install using npm:

```
$ npm install optional-syslog
```

Replace
```
require('modern-syslog');
```
or
```
require('posix');
```

with
```
require('optional-syslog');
```

# Exported properties and methods

## syslog-constants (except named as in modern-syslog)

* facility
* level
* option

Documentation at https://www.npmjs.com/package/syslog-constants#properties

## modern-syslog

* log
* open
* close
* upto
* setmask

Documentation at https://www.npmjs.com/package/modern-syslog#api

Not provided are:
* formatted versions of `log()`
* streaming API
* curmask (since it's a read operation and can't be noop'd)

## posix

* openlog
* closelog
* setlogmask
* syslog

Documentation at https://www.npmjs.com/package/posix#syslog
