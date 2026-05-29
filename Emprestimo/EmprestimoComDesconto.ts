import { Emprestimo } from './Emprestimo';

export class EmprestimoComDesconto extends Emprestimo {
  private percentualDesconto: number;
  private totalParcelas: number;

  constructor(saldo: number, parcelas: number, juros: number, percentualDesconto: number) {
    super(saldo, parcelas, juros);

    this.percentualDesconto = percentualDesconto;
    this.totalParcelas = parcelas;
  }

  public proximaParcela(): number {
    let parcela = super.proximaParcela();
    
    if (parcela > 0 && this.getParcelaAtual() - 1 === this.totalParcelas) {
      parcela = parcela - (parcela * this.percentualDesconto / 100);
    }
    
    return parcela;
  }

    public getParcelaAtual(): number {
        return this.corrente;
    }

}