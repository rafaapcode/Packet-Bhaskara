module.exports.resultDelta = function(a, b, c) {

    let bQ = b * b;
    let ac = a * c;
    let solve = -4 * ac;
    let delta = bQ + solve;

    if(delta <= 0){
        console.log("Não existe Raiz de número Negativo.");
    }else{
        console.log(delta);
    }
};


