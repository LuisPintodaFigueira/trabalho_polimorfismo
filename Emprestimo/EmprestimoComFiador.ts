import { Emprestimo } from "./Emprestimo";

export class EmprestimoComFiador extends Emprestimo {

    private temFiador: boolean;

    constructor(
        s: number,
        n: number,
        j: number,
        temFiador: boolean
    ) {
        super(s, n, j);
        this.temFiador = temFiador;
    }

    public verificarFiador(): boolean {
        return this.temFiador;
    }

    public override proximaParcela(): number {

        let jurosAjustado: number;

        if (this.temFiador) {
            jurosAjustado = this.getJ() * 0.80;
        } else {
            jurosAjustado = this.getJ() * 1.05;
        }

        let retorno = this.getP();

        this.setCorrente(this.getCorrente() + 1);

        if (this.getCorrente() <= this.getN()) {
            this.setP(this.getP() + (this.getP() * (jurosAjustado / 100)));
        } else {
            this.setP(0);
        }

        return retorno;
    }
}