import { Emprestimo } from "./Emprestimo";

export class EmprestimoEducacional extends Emprestimo {

    private periodoIsencao: number;

    constructor(
        s: number,
        n: number,
        j: number,
        periodoIsencao: number
    ) {
        super(s, n, j);

        this.periodoIsencao = periodoIsencao;
    }

    public getPeriodoIsencao(): number {
        return this.periodoIsencao;
    }

    public override proximaParcela(): number {

        let retorno = this.getP();

        this.setCorrente(this.getCorrente() + 1);

        if (this.getCorrente() <= this.getN()) {

            if (this.getCorrente() <= this.getPeriodoIsencao() + 1) {
                this.setP(this.getP());
            } else {
                this.setP(this.getP() + (this.getP() * (this.getJ() / 100)));
            }

        } else {
            this.setP(0);
        }

        return retorno;
    }
}