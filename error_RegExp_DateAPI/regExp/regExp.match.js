const REGEXP = /<\w+\s+[^>]*>/g;

let str = '<> <a href="/"> <input type="radio" checked> <b>';

let result = str.match(REGEXP);

console.log(result);
//'<a href="/">', '<input type="radio" checked>', "<b>";
