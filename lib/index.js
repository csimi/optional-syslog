const { facility, 'severity': level, 'flag': option } = require('syslog-constants');
const posix = require('./posix');
let modern;
try {
	modern = require('modern-syslog');
}
catch (err) {
	modern = require('./stub');
}

const { log, open, close, upto, setmask } = modern;
const { openlog, closelog, setlogmask, syslog } = posix(modern);

module.exports = {
	/* constants */
	facility,
	level,
	option,
	/* modern-syslog compatibility */
	log,
	open,
	close,
	upto,
	setmask,
	/* posix compatiblity */
	openlog,
	closelog,
	setlogmask,
	syslog,
};
