    interface newBolo {  // forma de transferir informações //msg que vou enviar pro construtor
        tamanho: number
        sabor: string
        formato: string
        recheio: string
        cobertura: string
        valor: number

    }
    
    class Bolo { // caracteriscas do bolo // 
        private tamanho: number;
        private sabor: string;
        private formato: string;
        private recheio: string;
        private cobertura: string;
        private valor: number;
        private qntFatias = 0;

        public get fatias () {
            return this.qntFatias;
        }

        constructor ({tamanho, sabor, formato, recheio, cobertura, valor}: newBolo){ 
                        // ^^ desestruturação de informações do bolo // 
            this.tamanho = tamanho;
            this.sabor = sabor;
            this.formato = formato;
            this.recheio = recheio;
            this.cobertura = cobertura;
            this.valor = valor;
        }
        public fatiar (qtdFatias: number){
            this.qntFatias = qtdFatias;
        }
        public tirarfatia () {
            // TODO TIRAR UMA FATIA DO BOLO
            this.qntFatias--;
        }

    }

    export { Bolo };
