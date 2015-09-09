var libPath = process.env.JS_COV ? "../lib-cov" : "../lib";

var abhisekpFCCbasicBonfireSolutions = require(libPath +
        "/fcc-basic-bonfire-solutions"),
    apFCCbbfs = abhisekpFCCbasicBonfireSolutions;

var chai = require("chai"),
    should = chai.should,
    expect = chai.expect,
    assert = chai.assert;

describe("abhisekp Basic Bonfires", function() {
    describe("#01. Meet Bonfire", function() {

        it("meetBonfire() returns a boolean", function() {
            assert.isBoolean(apFCCbbfs.meetBonfire(1));
        });

        it("Always return true", function() {
            assert.isTrue(apFCCbbfs.meetBonfire('Empty'));
        });
    });

});
