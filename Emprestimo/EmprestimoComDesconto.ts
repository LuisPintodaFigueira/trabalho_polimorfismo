import { Emprestimo } from './Emprestimo';

export class EmprestimoComDesconto extends Emprestimo {
  private percentualDesconto: number;
  private parcelaAtual: number;
  private totalParcelas: number;

  constructor(
    saldo: number,
    parcelas: number,
    juros: number,
    percentualDesconto: number
  ) {
    super(saldo, parcelas, juros);

    this.percentualDesconto = percentualDesconto;
    this.parcelaAtual = 1;
    this.totalParcelas = parcelas;
  }

  public getPercentualDesconto(): number {
    return this.percentualDesconto;
  }

  public proximaParcela(): number {
    let parcela = super.proximaParcela();

    if (parcela > 0) {
      if (this.parcelaAtual === this.totalParcelas) {
        parcela = parcela - (
          parcela * this.percentualDesconto / 100
        );
      }

      this.parcelaAtual++;
    }

    return parcela;
  }
}