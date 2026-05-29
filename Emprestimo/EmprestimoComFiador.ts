import { Emprestimo } from './Emprestimo';

export class EmprestimoComFiador extends Emprestimo {
  private temFiador: boolean;
  private jurosAjustado: number;
  private saldoAtual: number;
  private parcelaAtual: number;
  private totalParcelas: number;

  constructor(
    saldo: number,
    parcelas: number,
    juros: number,
    temFiador: boolean
  ) {
    super(saldo, parcelas, juros);

    this.temFiador = temFiador;

    this.jurosAjustado =
      temFiador
        ? juros * 0.80
        : juros * 1.05;

    this.saldoAtual = saldo;
    this.parcelaAtual = 1;
    this.totalParcelas = parcelas;
  }

  public verificarFiador(): boolean {
    return this.temFiador;
  }

  public proximaParcela(): number {
    if (this.parcelaAtual > this.totalParcelas) {
      return 0;
    }

    const parcela = this.saldoAtual;

    this.saldoAtual = this.saldoAtual + (
      this.saldoAtual * (this.jurosAjustado / 100)
    );

    this.parcelaAtual++;

    return parcela;
  }
}