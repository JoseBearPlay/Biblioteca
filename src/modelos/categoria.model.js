'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaSchema = Schema({
    nombre: String,
    informacion: String,
});

module.exports = mongoose.model("categorias", CategoriaSchema); 