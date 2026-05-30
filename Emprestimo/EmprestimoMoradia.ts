import { Emprestimo } from "./Emprestimo";

export class EmprestimoMoradia extends Emprestimo {

    private temSeguroMoradia: boolean;

    constructor(
        s: number,
        n: number,
        j: number,
        temSeguroMoradia: boolean
    ) {
        super(s, n, j);

        this.temSeguroMoradia = temSeguroMoradia;
    }

    public temSeguro(): boolean {
        return this.temSeguroMoradia;
    }

    public override proximaParcela(): number {

        let jurosAjustado = this.getJ();

        if (this.getN() > 120) {
            jurosAjustado = this.getJ() * 0.85;
        }

        let retorno = this.getP();

        if (this.temSeguroMoradia) {
            retorno += 10;
        }

        this.setCorrente(this.getCorrente() + 1);

        if (this.getCorrente() <= this.getN()) {
            this.setP(this.getP() + (
                this.getP() * (jurosAjustado / 100)
            ));
        } else {
            this.setP(0);
        }

        return retorno;
    }
}