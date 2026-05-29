export class Emprestimo {
    protected saldo: number;
    protected parcelas: number;
    protected corrente: number;
    protected juros: number;

    constructor(saldo: number, parcelas: number, juros: number) {
        this.saldo = saldo;
        this.parcelas = parcelas;
        this.juros = juros;
        this.corrente = 0;
    }

    public proximaParcela(): number {
        if (this.corrente >= this.parcelas) {
            return 0;
        }

        const parcela = this.saldo;
        
        this.corrente++;

        if (this.corrente < this.parcelas) {
            this.saldo = this.saldo + (this.saldo * (this.juros / 100));
        } else {
            this.saldo = 0;
        }
        
        return parcela;
    }
}
