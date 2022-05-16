class BusInfo {
    constructor(empresa, localInicio, localFinal, horaIncio, horaFim, paragens, preco) {
        this.empresa        =   empresa;
        this.localInicio    =   localInicio;
        this.localFinal     =   localFinal;
        this.horaIncio      =   horaIncio;
        this.horaFim        =   horaFim;
        this.paragens       =   paragens;
        this.preco          =   preco
    }
    getEmpresa() {
        return this.empresa;
    }
    getLocalIncio() {
        return this.localInicio;
    }
    getLocalFim() {
        return this.localFinal;
    }
    getHoraIncio() {
        return this.horaIncio;
    }
    getHoraFim() {
        return this.horaFim;
    }
    getParagens() {
        return this.paragens;
    }
    getPreco() {
        return this.preco;
    }
}