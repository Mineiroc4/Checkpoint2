// 1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

function maiormenor(n1,n2,n3){
  if ( n1 > n2 && n2 > n3){                                              // Teste com n1 maior e n3 menor.
    return "O Valor " + n1 + " é o maior! E o valor "+ n3 + " é o menor!";    
  }else if (n1 > n3 && n3 > n2){                                         // Teste com n1 maior e n2 menor.
    return "O valor " + n1 + " é o maior! E o valor " + n2 + " é o menor!";   
  }else if (n2 > n1 && n1 > n3){                                         // Teste com n2 maior e n3 menor.      
    return "O valor " + n2 + " é o maior! E o valor " + n3 + " é o menor!";
  }else if (n2 > n3 && n3 > n1){                                         // Teste com n2 maior e n1 menor.
    return "O valor " + n2 + " é o maior! E o valor " + n1 + " é o menor!";
  }else if (n3 > n1 && n1 > n2){                                         // Teste com n3 maior e n2 menor.
    return "O valor " + n3 + " é o maior! E o valor " + n2 + " é o menor!";
  }else if (n3 > n2 && n2 > n1){                                         // Teste com n3 maior e n1 menor.
    return "O valor " + n3 + " é o maior! E o valor " + n1 + " é o menor!";
  }
}
console.log(maiormenor(300,200,100))

/* 2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&).
*/
function doarsangue(idade){
  console.log("Qual a sua idade?");
  if (idade > 18 && idade < 67){                                         // Teste para saber se é permitido doar sangue.
    return "Você está apto a doar sangue!"
  }else{
    return "Você não está apto a doar sangue!"
  }
}
console.log(doarsangue(23))

// 3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo
function checador(valor){
  if (valor > 0){                                                       // Teste para verificar o sinal do valor
    return "Positivo!"
  }else{
    return "Negativo!"
  }
}
console.log(checador(100))

/*
4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;
*/
function aluno(n1,n2){
   let media = (n1 + n2) / 2;                                           // Definição da variável média do aluno.
   if (media >= 7 && media < 10){                                       // Teste para aprovação.
    return "Aprovado!"
  }else if (media == 10){                                               // Teste para aprovação com distinção.
    return "Aprovado com Distinção!"
  }else if (media < 7 && media > 0){                                    // Teste para reprovação.
    return "Reprovado!"
  }else{
    return "Valor de nota invalído!"                                    
  }
}
console.log(aluno(10,10))
