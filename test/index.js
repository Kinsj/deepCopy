const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
chai.use(sinonChai)

const assert = chai.assert;
const deepClone = require('../src/index')

describe('deepCopy', () => {
    it('是一个函数', () => {
        assert.isFunction(deepClone)
    })
    it('能够复制基本类型', () => {
        const n = 123;
        const n2 = deepClone(n)
        assert(n === n2)
        const s = 'staradwd';
        const s2 = deepClone(s)
        assert(s === s2)
        const b = true;
        const b2 = deepClone(b)
        assert(b === b2)
        const u = undefined;
        const u2 = deepClone(u)
        assert(u === u2)
        const empty = null;
        const empty2 = deepClone(empty)
        assert(empty === empty2)
    })
})