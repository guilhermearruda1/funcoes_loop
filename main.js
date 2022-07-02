// tras um valor aleatorio dentro do numero maximo passado pelo usuario
function randomico(limite) {
    let valor = Math.round(Math.random() * limite);
    console.log('O valor arredondado é ' + valor);
   
}

randomico(100);

// soma ou subtrai um valor aleatorio até que chegue ao valor passado pelo usuario
function numeroAleatorio(num) {
    
    let valor = Math.round(Math.random() * num);

    console.log('O valor randomico é ' + valor + ' e o limite é ' + num);
    if (valor > num) {
        for (let i = valor; valor >= num; valor--) {
            console.log(`Diminuindo o valor ${valor} até ficar igual a ${num} `);
        };
    } else if (valor < num) {
        for (let i = valor; valor <= num; valor++) {
            console.log(`Aumentando o valor ${valor} até ficar igual a ${num}`);
        };
    } else {
        console.log('O valor sem modificação é ' + valor);
    }
    
}

numeroAleatorio(5);
numeroAleatorio(20);
numeroAleatorio(0);

// soma ou subtrai um valor até que chegue ao valor passado pelo usuario. Se não houver valor de limite use default

function calculo (n, limite = 2) {

    if (n > limite) {
        for (let i = n; n >= limite; n-- ) {
            console.log(`Diminuindo o valor ${n} até chegar a ${limite}`);
        }
    } else if (n < limite) {
        for (let i = n; n <= limite; n++) {
            console.log(`Aumentando o valor ${n} até chegar a ${limite}`);
        }
    } else {
        console.log('Valores iguais')
    }

}

calculo(0,10);
calculo(1,-5);
calculo(0,0);
calculo(5);
