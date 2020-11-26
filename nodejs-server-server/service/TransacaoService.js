'use strict';


/**
 * Altera Valor da Transação
 * Altera o valor da transação existente na conta do cliente
 *
 * codigo Long 
 * valor Double 
 * authorization String 
 * no response value expected for this operation
 **/
exports.alteraValorTransacao = function(codigo,valor,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cadastra Transacao na conta
 * cadastra uma nova transacao ou deposito na conta
 *
 * authorization String 
 * transacao Transacao 
 * tipo String 
 * returns Transacao
 **/
exports.cadastraTransacao = function(authorization,transacao,tipo) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tipo" : "debito",
  "data" : "2000-01-23T04:56:07.000+00:00",
  "valor" : 6.027456183070403,
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Exclui a transação
 * Exclusão da Transacao existente na conta do cliente
 *
 * codigo Long 
 * authorization String 
 * no response value expected for this operation
 **/
exports.excluiTransacao = function(codigo,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

