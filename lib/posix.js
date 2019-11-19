const { facility, severity, flag } = require('syslog-constants');

const identity = (value) => value;
const createMask = (value) => Math.pow(2, value);

const reduceValues = (props, values, map) => Object.entries(props).reduce((memo, [key, value]) => {
	if (value && Number.isInteger(values[key])) {
		return memo | map(values[key]);
	}
	
	return memo;
}, 0);

module.exports = ({ log, open, close, setmask }) => ({
	openlog (id, opt, fac) {
		return open(id, reduceValues(opt, flag, identity), Number.isInteger(fac) ? fac : facility[fac]);
	},
	closelog () {
		return close();
	},
	setlogmask (mask) {
		return setmask(reduceValues(mask, severity, createMask));
	},
	syslog (prio, message) {
		return log(Number.isInteger(prio) ? prio : severity[prio], message);
	},
});
