var evaluate = require('../');
var parse = require('esprima').parse;

var src = '[1,2,3+4*10]';
var ast = parse(src).body[0].expression;

console.log(evaluate(ast));
