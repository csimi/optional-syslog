const { facility, severity, flag } = require('syslog-constants');

const reduceValues = (props, values) => Object.entries(props).reduce((memo, [key, value]) => {
	if (value && values[key]) {
		return memo | values[key];
	}
	
	return memo;
}, 0);

module.exports = ({ log, open, close, setmask }) => ({
	openlog (id, opt, fac) {
		return open(id, reduceValues(opt, flag), Number.isInteger(fac) ? fac : facility[fac]);
	},
	closelog () {
		return close();
	},
	setlogmask (mask) {
		return setmask(reduceValues(mask, severity));
	},
	syslog (prio, message) {
		return log(Number.isInteger(prio) ? prio : severity[prio], message);
	},
});

