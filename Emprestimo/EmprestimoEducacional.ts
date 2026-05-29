import { Emprestimo } from './Emprestimo';

export class EmprestimoEducacional extends Emprestimo {
  private periodoIsencao: number;

  constructor(saldo: number, parcelas: number, juros: number, periodoIsencao: number) {
    super(saldo, parcelas, juros);

    this.periodoIsencao = periodoIsencao;
  }

  public proximaParcela(): number {
    const jurosOriginal = this.juros;
    
    if (this.getParcelaAtual() <= this.periodoIsencao) {
      this.juros = 0;
    }
    
    const parcela = super.proximaParcela();
    
    this.juros = jurosOriginal;
    
    return parcela;
  }
}