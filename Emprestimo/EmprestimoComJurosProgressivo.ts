import { Emprestimo } from "./Emprestimo";

export class EmprestimoComJurosProgressivo extends Emprestimo {

    private acrescimoJuros: number;

    constructor(
        s: number,
        n: number,
        jurosInicial: number,
        acrescimoJuros: number
    ) {
        super(s, n, jurosInicial);

        this.acrescimoJuros = acrescimoJuros;
    }

    public getAcrescimoJuros(): number {
        return this.acrescimoJuros;
    }

    public override proximaParcela(): number {

        let retorno = this.getP();

        this.setCorrente(this.getCorrente() + 1);

        if (this.getCorrente() <= this.getN()) {

            this.setP(this.getP() + (
                this.getP() * (this.getJ() / 100)
            ));

            this.setJ(this.getJ() + this.acrescimoJuros);

        } else {
            this.setP(0);
        }

        return retorno;
    }
}