import { Emprestimo } from "./Emprestimo";

export class EmprestimoComDesconto extends Emprestimo {

    private percentualDesconto: number;

    constructor(
        s: number,
        n: number,
        j: number,
        percentualDesconto: number
    ) {
        super(s, n, j);

        this.percentualDesconto = percentualDesconto;
    }

    public getPercentualDesconto(): number {
        return this.percentualDesconto;
    }

    public override proximaParcela(): number {

        let retorno = this.getP();

        if (this.getCorrente() == this.getN()) {
            retorno =
                retorno - (retorno * this.percentualDesconto / 100);
        }

        this.setCorrente(this.getCorrente() + 1);

        if (this.getCorrente() <= this.getN()) {
            this.setP(this.getP() + (this.getP() * (this.getJ() / 100)));
        } else {
            this.setP(0);
        }

        return retorno;
    }
}