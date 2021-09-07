// Ref : internet

var amount = 1251;
var a = amount / 1000;
var b = 500;
var c = 100;
var d = 50;
var _1000 = 0;
var _500 = 0;
var _100 = 0;
var _50 = 0;

a = Math.floor(a);
_1000 = a;
a = 1000 * a;
a = amount - a;

a = a / b;
a = Math.floor(a);
_500 = a;
a = 500 * a;
a = amount - (_1000 * 1000) - a;

a = a / c;
a = Math.floor(a);
_100 = a;
a = 100 * a;
a = amount - (_1000 * 1000) - (_500 * 500) - a;

a = a / d;
a = Math.floor(a);
_50 = a;
a = 50 * a;
a = amount - (_1000 * 1000) - (_500 * 500) - (_100 * 100) - a;

console.log(a);

console.log(a + "\r\n" + "_1000: " + _1000 + "\r\n" + "_500: " + _500 + "\r\n" + "_100: " + _100 + "\r\n" + "_50: " + _50);

/**
alert(a + "\r\n" + "_1000: " + _1000 + "\r\n" + "_500: " + _500 + "\r\n" + "_100: " + _100 + "\r\n" + "_50: " + _50);
*/