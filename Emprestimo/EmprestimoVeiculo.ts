import { Emprestimo } from './Emprestimo';

export class EmprestimoVeiculo extends Emprestimo {
  private tipo: string;
  private jurosAjustado: number;
  private saldoAtual: number;
  private parcelaAtual: number;
  private totalParcelas: number;

  constructor(
    saldo: number,
    parcelas: number,
    juros: number,
    tipo: string
  ) {
    super(saldo, parcelas, juros);

    this.tipo = tipo;

    this.jurosAjustado =
      tipo === 'usado'
        ? juros + 1
        : juros;

    this.saldoAtual = saldo;
    this.parcelaAtual = 1;
    this.totalParcelas = parcelas;
  }

  public getTipo(): string {
    return this.tipo;
  }

  public proximaParcela(): number {
    if (this.parcelaAtual > this.totalParcelas) {
      return 0;
    }

    let parcela = this.saldoAtual;

    this.saldoAtual = this.saldoAtual + (
      this.saldoAtual * (this.jurosAjustado / 100)
    );

    if (this.totalParcelas > 60) {
      parcela = parcela + (parcela * 0.02);
    }

    this.parcelaAtual++;

    return parcela;
  }
}