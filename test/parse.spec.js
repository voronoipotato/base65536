/** Tests for the command line parser, which was a bit annoying */
'use strict';
exports.__esModule = true;
var action_1 = require("./../bin/action");
var parse_1 = require("./../bin/parse");
// base65536 (-d|--decode (-i|--ignoreGarbage)?)? (FILEN|--(FILE)?)?
// FILEN: a file which isn't a flag (-.+)
fdescribe('parse', function () {
    it('helps', function () {
        expect(parse_1["default"](['--help'])).toEqual({ action: action_1["default"].help, ignoreGarbage: false, fileName: undefined });
    });
    it('versions', function () {
        expect(parse_1["default"](['--version'])).toEqual({ action: action_1["default"].version, ignoreGarbage: false, fileName: undefined });
    });
    it('encodes', function () {
        expect(parse_1["default"]([])).toEqual({ action: action_1["default"].encode, ignoreGarbage: false, fileName: undefined });
        expect(parse_1["default"](['fileName'])).toEqual({ action: action_1["default"].encode, ignoreGarbage: false, fileName: 'fileName' });
        expect(parse_1["default"](['-'])).toEqual({ action: action_1["default"].encode, ignoreGarbage: false, fileName: undefined });
        expect(parse_1["default"](['--'])).toEqual({ action: action_1["default"].encode, ignoreGarbage: false, fileName: undefined });
        expect(parse_1["default"](['--', 'fileName'])).toEqual({ action: action_1["default"].encode, ignoreGarbage: false, fileName: 'fileName' });
        expect(parse_1["default"](['--', '-'])).toEqual({ action: action_1["default"].encode, ignoreGarbage: false, fileName: '-' });
        expect(parse_1["default"](['--', '--'])).toEqual({ action: action_1["default"].encode, ignoreGarbage: false, fileName: '--' });
    });
    it('decodes', function () {
        expect(parse_1["default"](['-d'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: undefined });
        expect(parse_1["default"](['-d', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: 'fileName' });
        expect(parse_1["default"](['-d', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: undefined });
        expect(parse_1["default"](['-d', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: undefined });
        expect(parse_1["default"](['-d', '--', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: 'fileName' });
        expect(parse_1["default"](['-d', '--', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: '-' });
        expect(parse_1["default"](['-d', '--', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: '--' });
        expect(parse_1["default"](['--decode'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: undefined });
        expect(parse_1["default"](['--decode', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: 'fileName' });
        expect(parse_1["default"](['--decode', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: undefined });
        expect(parse_1["default"](['--decode', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: undefined });
        expect(parse_1["default"](['--decode', '--', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: 'fileName' });
        expect(parse_1["default"](['--decode', '--', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: '-' });
        expect(parse_1["default"](['--decode', '--', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: false, fileName: '--' });
    });
    it('ignores garbage', function () {
        expect(parse_1["default"](['-d', '-i'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['-d', '-i', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: 'fileName' });
        expect(parse_1["default"](['-d', '-i', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['-d', '-i', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['-d', '-i', '--', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: 'fileName' });
        expect(parse_1["default"](['-d', '-i', '--', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: '-' });
        expect(parse_1["default"](['-d', '-i', '--', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: '--' });
        expect(parse_1["default"](['--decode', '-i'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['--decode', '-i', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: 'fileName' });
        expect(parse_1["default"](['--decode', '-i', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['--decode', '-i', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['--decode', '-i', '--', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: 'fileName' });
        expect(parse_1["default"](['--decode', '-i', '--', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: '-' });
        expect(parse_1["default"](['--decode', '-i', '--', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: '--' });
        expect(parse_1["default"](['-d', '--ignore-garbage'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['-d', '--ignore-garbage', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: 'fileName' });
        expect(parse_1["default"](['-d', '--ignore-garbage', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['-d', '--ignore-garbage', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['-d', '--ignore-garbage', '--', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: 'fileName' });
        expect(parse_1["default"](['-d', '--ignore-garbage', '--', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: '-' });
        expect(parse_1["default"](['-d', '--ignore-garbage', '--', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: '--' });
        expect(parse_1["default"](['--decode', '--ignore-garbage'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['--decode', '--ignore-garbage', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: 'fileName' });
        expect(parse_1["default"](['--decode', '--ignore-garbage', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['--decode', '--ignore-garbage', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: undefined });
        expect(parse_1["default"](['--decode', '--ignore-garbage', '--', 'fileName'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: 'fileName' });
        expect(parse_1["default"](['--decode', '--ignore-garbage', '--', '-'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: '-' });
        expect(parse_1["default"](['--decode', '--ignore-garbage', '--', '--'])).toEqual({ action: action_1["default"].decode, ignoreGarbage: true, fileName: '--' });
    });
    it('throws', function () {
        expect(function () { return parse_1["default"](['--help', '-']); }).toThrow();
        expect(function () { return parse_1["default"](['--help', '--decode']); }).toThrow();
        expect(function () { return parse_1["default"](['--help', '--help']); }).toThrow();
        expect(function () { return parse_1["default"](['--help', '--ignore-garbage']); }).toThrow();
        expect(function () { return parse_1["default"](['--help', '--version']); }).toThrow();
        expect(function () { return parse_1["default"](['--help', '-d']); }).toThrow();
        expect(function () { return parse_1["default"](['--help', '-i']); }).toThrow();
        expect(function () { return parse_1["default"](['--help', 'fileName']); }).toThrow();
        expect(function () { return parse_1["default"](['--version', '-']); }).toThrow();
        expect(function () { return parse_1["default"](['--version', '--decode']); }).toThrow();
        expect(function () { return parse_1["default"](['--version', '--help']); }).toThrow();
        expect(function () { return parse_1["default"](['--version', '--ignore-garbage']); }).toThrow();
        expect(function () { return parse_1["default"](['--version', '--version']); }).toThrow();
        expect(function () { return parse_1["default"](['--version', '-d']); }).toThrow();
        expect(function () { return parse_1["default"](['--version', '-i']); }).toThrow();
        expect(function () { return parse_1["default"](['--version', 'fileName']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '--help']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '--version']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '-d']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '--decode']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '-i', '-i']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '-i', '--ignore-garbage']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '--ignore-garbage', '-i']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '--ignore-garbage', '--ignore-garbage']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '--help']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '--version']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '-d']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '--decode']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '-i', '-i']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '-i', '--ignore-garbage']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '--ignore-garbage', '-i']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '--ignore-garbage', '--ignore-garbage']); }).toThrow();
        expect(function () { return parse_1["default"](['-i']); }).toThrow();
        expect(function () { return parse_1["default"](['--ignore-garbage']); }).toThrow();
        expect(function () { return parse_1["default"](['fileName', '--help']); }).toThrow();
        expect(function () { return parse_1["default"](['fileName', '--version']); }).toThrow();
        expect(function () { return parse_1["default"](['fileName', '-d']); }).toThrow();
        expect(function () { return parse_1["default"](['fileName', '--decode']); }).toThrow();
        expect(function () { return parse_1["default"](['fileName', '-i']); }).toThrow();
        expect(function () { return parse_1["default"](['fileName', '--ignore-garbage']); }).toThrow();
        expect(function () { return parse_1["default"](['fileName', '--']); }).toThrow();
        expect(function () { return parse_1["default"](['fileName', 'fileName']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', 'fileName', 'fileName']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '-i', 'fileName', 'fileName']); }).toThrow();
        expect(function () { return parse_1["default"](['-d', '--ignore-garbage', 'fileName', 'fileName']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', 'fileName', 'fileName']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '-i', 'fileName', 'fileName']); }).toThrow();
        expect(function () { return parse_1["default"](['--decode', '--ignore-garbage', 'fileName', 'fileName']); }).toThrow();
        expect(function () { return parse_1["default"](['--', 'fileName', 'fileName']); }).toThrow();
    });
});