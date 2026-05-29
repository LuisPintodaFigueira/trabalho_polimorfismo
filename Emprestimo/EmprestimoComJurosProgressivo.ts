import { Emprestimo } from './Emprestimo';

export class EmprestimoComJurosProgressivo extends Emprestimo {
  private acrescimoJuros: number;
  private jurosAtual: number;
  private saldoAtual: number;
  private parcelaAtual: number;
  private totalParcelas: number;

  constructor(
    saldo: number,
    parcelas: number,
    jurosInicial: number,
    acrescimoJuros: number
  ) {
    super(saldo, parcelas, jurosInicial);

    this.acrescimoJuros = acrescimoJuros;
    this.jurosAtual = jurosInicial;
    this.saldoAtual = saldo;
    this.parcelaAtual = 1;
    this.totalParcelas = parcelas;
  }

  public getAcrescimoJuros(): number {
    return this.acrescimoJuros;
  }

  public proximaParcela(): number {
    if (this.parcelaAtual > this.totalParcelas) {
      return 0;
    }

    const parcela = this.saldoAtual;

    this.saldoAtual = this.saldoAtual + (
      this.saldoAtual * (this.jurosAtual / 100)
    );

    this.jurosAtual += this.acrescimoJuros;

    this.parcelaAtual++;

    return parcela;
  }
}