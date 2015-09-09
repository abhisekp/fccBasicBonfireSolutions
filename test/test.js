var libPath = process.env.JS_COV ? "../lib-cov" : "../lib";
var srcPath = "../src";

var abhisekpFCCbasicBonfireSolutions = require(srcPath +
        "/fcc-basic-bonfire-solutions"),
    apFCCbbfs = abhisekpFCCbasicBonfireSolutions;

var chai = require("chai"),
    should = chai.should,
    expect = chai.expect,
    assert = chai.assert;

describe("# abhisekp Basic Bonfires", function() {
    describe("## 01. Bonfire: Meet Bonfire", function() {

        describe("### Using meetBonfire()", function() {
            it("meetBonfire() returns a boolean", function() {
                assert.isBoolean(apFCCbbfs.meetBonfire(1));
            });

            it("always returns true", function() {
                assert.isTrue(apFCCbbfs.meetBonfire("Empty"));
            });
        });

    });

    describe("## 02. Bonfire: Reverse a String", function() {

        describe("### Using reveseString()", function() {
            it("reverseString() returns a string", function() {
                assert.isString(apFCCbbfs.reverseString(""));
            });

            it("reverses given strings", function() {
                assert.strictEqual(apFCCbbfs.reverseString("hello"), "olleh",
                    "'hello' reverses to 'olleh");
                assert.strictEqual(apFCCbbfs.reverseString("Howdy"), "ydwoH",
                    "'Howdy' reverses to 'ydwoH");
                assert.strictEqual(apFCCbbfs.reverseString("Greetings from Earth"),
                    "htraE morf sgniteerG",
                    "'Greetings from Earth' reverses to 'htraE morf sgniteerG");
            });
        });

    });

    describe("## 03. Bonfire: Factorialize a Number", function() {
        describe("### Using factorializeRecursive()", function() {
            it("factorializeRecursive() returns a number", function() {
                assert.isNumber(apFCCbbfs.factorializeRecursive(1));
            });

            it("factorializes given values", function() {
                assert.strictEqual(apFCCbbfs.factorializeRecursive(5), 120,
                    "5! factorial results 120");
                assert.strictEqual(apFCCbbfs.factorializeRecursive(10), 3628800,
                    "10! factorial results 3628800");
                assert.strictEqual(apFCCbbfs.factorializeRecursive(20),
                    2432902008176640000,
                    "20! factorial results 2432902008176640000");
            });
        });
    });

});
