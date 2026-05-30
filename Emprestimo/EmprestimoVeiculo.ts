import { Emprestimo } from "./Emprestimo";

export class EmprestimoVeiculo extends Emprestimo {

    private tipo: string;

    constructor(
        s: number,
        n: number,
        j: number,
        tipo: string
    ) {
        super(s, n, j);

        this.tipo = tipo;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public override proximaParcela(): number {

        let jurosAjustado = this.getJ();

        if (this.getTipo() === "usado") {
            jurosAjustado += 1;
        }

        let retorno = this.getP();

        if (this.getN() > 60) {
            retorno += retorno * 0.02;
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