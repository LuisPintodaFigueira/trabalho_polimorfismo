import { Emprestimo } from './Emprestimo';

export class EmprestimoEducacional extends Emprestimo {
  private periodoIsencao: number;
  private parcelaAtual: number;
  private saldoAtual: number;

  constructor(
    saldo: number,
    parcelas: number,
    juros: number,
    periodoIsencao: number
  ) {
    super(saldo, parcelas, juros);

    this.periodoIsencao = periodoIsencao;
    this.parcelaAtual = 1;
    this.saldoAtual = saldo;
    this.juros = juros;
    this.parcelas = parcelas;
  }

  public getPeriodoIsencao(): number {
    return this.periodoIsencao;
  }

  public proximaParcela(): number {
    if (this.parcelaAtual > this.parcelas) {
      return 0;
    }

    const parcela = this.saldoAtual;

    if (this.parcelaAtual > this.periodoIsencao) {
      this.saldoAtual = this.saldoAtual + (
        this.saldoAtual * (this.juros / 100)
      );
    }

    this.parcelaAtual++;

    return parcela;
  }
}