const { expect } = require('chai');
const optional = require('../..');

const facility = 184;
const severity = 3;

describe('modern-syslog', () => {
	it('calls open without throwing', () => {
		const fn = optional.open.bind(undefined, 'id', 0, facility);
		return expect(fn).to.not.throw();
	});
	
	it('calls upto without throwing', () => {
		const fn = optional.upto.bind(undefined, severity);
		return expect(fn).to.not.throw();
	});
	
	it('calls log without throwing', () => {
		const fn = optional.log.bind(undefined, severity, 'foo', () => {});
		return expect(fn).to.not.throw();
	});
	
	it('calls close without throwing', () => {
		const fn = optional.close.bind(undefined);
		return expect(fn).to.not.throw();
	});
});
