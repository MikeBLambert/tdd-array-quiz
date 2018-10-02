const assert = require('assert');
const replacer = require('../lib/dont-ask.js');

describe('replacer', () => {

    it('removes words with "y" from array', done => {
        
        let arr = ['sky', 'hot', 'green', 'Yeti'];
        const transformed = replacer(arr);
   
        assert.deepEqual(transformed.length, 2);
        done();
    });

    it('replaces words without "y" with "Is it <word>?"', done => {
        
        let arr = ['sky', 'hot', 'green', 'Yeti'];
        const transformed = replacer(arr);
   
        assert.deepEqual(transformed, ['Is it hot?', 'Is it green?']);
        done();
    });
});
