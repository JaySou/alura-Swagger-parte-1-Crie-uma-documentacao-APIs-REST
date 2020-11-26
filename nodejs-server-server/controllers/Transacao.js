'use strict';

var utils = require('../utils/writer.js');
var Transacao = require('../service/TransacaoService');

module.exports.alteraValorTransacao = function alteraValorTransacao (req, res, next) {
  var codigo = req.swagger.params['codigo'].value;
  var valor = req.swagger.params['valor'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Transacao.alteraValorTransacao(codigo,valor,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cadastraTransacao = function cadastraTransacao (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var transacao = req.swagger.params['transacao'].value;
  var tipo = req.swagger.params['tipo'].value;
  Transacao.cadastraTransacao(authorization,transacao,tipo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.excluiTransacao = function excluiTransacao (req, res, next) {
  var codigo = req.swagger.params['codigo'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Transacao.excluiTransacao(codigo,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
