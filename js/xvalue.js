module.exports.xvalue = function(a, b, delta) {

    let aDiv = 2 * a;
    let x1 = (-b + Math.sqrt(delta)) / aDiv;

    let x2 = (-b - Math.sqrt(delta)) / aDiv;

    let result = `X1 é igual a : ${x1}, e o X2 é igual a : ${x2}`;

    console.log(result);

};