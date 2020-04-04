const mongoose = require('../../db/conexao');

const Acoes = mongoose.model('acoes',{
    nome_empresa : {type: String, required: true},
    cod_empresa : {type: Number, required: true},
    taxa_juros : {type: Number, required: true},
    tipo: {
        type: String,
        enum: ['ordinaria', 'preferencial'],
        required: true,
        message: 'Investidor deve escolher qual tipo de ação ordinaria/preferencial'
    }
    
    
});

module.exports = Acoes;