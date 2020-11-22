import { describe, it } from 'mocha';
import { expect } from 'chai';
import { deepDefaults } from '../src/utils';

describe('utils', function () {

    describe('deepDefaults', function () {

        it('handles missing arguments', function () {
            expect(deepDefaults()).to.be.undefined;
        });

        it('handles non-obj dest by returning dest', function () {
            expect(deepDefaults(undefined)).to.be.eql(undefined);
            expect(deepDefaults(null)).to.be.eql(null);
            expect(deepDefaults(1)).to.be.eql(1);
            expect(deepDefaults(3.14)).to.be.eql(3.14);
            expect(deepDefaults('12')).to.be.eql('12');
            expect(deepDefaults([ 1, 2 ])).to.be.eql([ 1, 2 ]);
        });

        it('handles non-obj src by returning dest', function () {
            expect(deepDefaults({}, undefined)).to.be.eql({});
            expect(deepDefaults({}, null)).to.be.eql({});
            expect(deepDefaults({}, 1)).to.be.eql({});
            expect(deepDefaults({}, 3.14)).to.be.eql({});
            expect(deepDefaults({}, '12')).to.be.eql({});
            expect(deepDefaults({}, [ 1, 2 ])).to.be.eql({});
        });

        it('handles flat obj', function () {
            expect(deepDefaults({}, { 1: 2 })).to.be.eql({ 1: 2 });
            expect(deepDefaults({}, { key: 'value' })).to.be.eql({ key: 'value' });
            expect(deepDefaults({}, { key: 'value', 1: {} })).to.be.eql({ key: 'value', 1: {} });
            expect(deepDefaults({}, { key: 'value', 1: [ 2, 3 ] })).to.be.eql({ key: 'value', 1: [ 2, 3 ] });
        });

        it('handles key replacement', function () {
            expect(deepDefaults({ 1: 0 }, { 1: 2 })).to.be.eql({ 1: 2 });
            expect(deepDefaults({ key: 'old' }, { key: 'value' })).to.be.eql({ key: 'value' });
            expect(deepDefaults({ key: 'old', 1: [] }, { key: 'value', 1: {} })).to.be.eql({ key: 'value', 1: {} });
            expect(deepDefaults({ key: 'old', 1: 4 }, { key: 'value', 1: [ 2, 3 ] })).to.be.eql({
                key: 'value',
                1: [ 2, 3 ],
            });
        });

    });

});
