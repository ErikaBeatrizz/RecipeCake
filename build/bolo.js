"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bolo = void 0;
var Bolo = /** @class */ (function () {
    function Bolo(_a) {
        var tamanho = _a.tamanho, sabor = _a.sabor, formato = _a.formato, recheio = _a.recheio, cobertura = _a.cobertura, valor = _a.valor;
        this.qntFatias = 0;
        // ^^ desestruturação de informações do bolo // 
        this.tamanho = tamanho;
        this.sabor = sabor;
        this.formato = formato;
        this.recheio = recheio;
        this.cobertura = cobertura;
        this.valor = valor;
    }
    Object.defineProperty(Bolo.prototype, "fatias", {
        get: function () {
            return this.qntFatias;
        },
        enumerable: false,
        configurable: true
    });
    Bolo.prototype.fatiar = function (qtdFatias) {
        this.qntFatias = qtdFatias;
    };
    Bolo.prototype.tirarfatia = function () {
        // TODO TIRAR UMA FATIA DO BOLO
        this.qntFatias--;
    };
    return Bolo;
}());
exports.Bolo = Bolo;
