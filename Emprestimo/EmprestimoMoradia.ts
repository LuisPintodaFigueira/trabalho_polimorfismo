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

        // Se já pagou todas as parcelas, retorna 0 (encerra)
        if (this.getCorrente() > this.getN()) {
            return 0;
        }

        let jurosAjustado = this.getJ();

        if (this.getN() > 120) {
            jurosAjustado = this.getJ() * 0.85;
        }

        // Calcula o valor da parcela atual
        let valorParcela = this.getP();

        if (this.temSeguroMoradia) {
            valorParcela += 10;
        }

        // Prepara a PRÓXIMA parcela (se houver)
        this.setCorrente(this.getCorrente() + 1);

        if (this.getCorrente() <= this.getN()) {
            this.setP(this.getP() + (
                this.getP() * (jurosAjustado / 100)
            ));
        } else {
            this.setP(0);
        }

        // Retorna o valor da parcela ATUAL
        return valorParcela;
    }
}