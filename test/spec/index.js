const assert = require('assert')
const context = require('../context/')
const testPackage_55 = require('../../src/')

const testPackage_55TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_55, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_55()
        })
    },
}

module.exports = testPackage_55TestSuite
