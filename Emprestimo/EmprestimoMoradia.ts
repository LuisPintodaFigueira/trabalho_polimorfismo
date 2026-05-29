import { Emprestimo } from './Emprestimo';

export class EmprestimoMoradia extends Emprestimo {
  private temSeguroMoradia: boolean;
  private jurosAjustado: number;
  private saldoAtual: number;
  private parcelaAtual: number;
  private totalParcelas: number;

  constructor(
    saldo: number,
    parcelas: number,
    juros: number,
    temSeguroMoradia: boolean
  ) {
    super(saldo, parcelas, juros);

    this.temSeguroMoradia = temSeguroMoradia;

    this.jurosAjustado =
      parcelas > 120
        ? juros * 0.85
        : juros;

    this.saldoAtual = saldo;
    this.parcelaAtual = 1;
    this.totalParcelas = parcelas;
  }

  public temSeguro(): boolean {
    return this.temSeguroMoradia;
  }

  public proximaParcela(): number {
    if (this.parcelaAtual > this.totalParcelas) {
      return 0;
    }

    let parcela = this.saldoAtual;

    this.saldoAtual = this.saldoAtual + (
      this.saldoAtual * (this.jurosAjustado / 100)
    );

    if (this.temSeguroMoradia) {
      parcela += 10;
    }

    this.parcelaAtual++;

    return parcela;
  }
}