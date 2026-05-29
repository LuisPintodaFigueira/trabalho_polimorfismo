import { Emprestimo } from './Emprestimo';

export class EmprestimoVeiculo extends Emprestimo {
  private tipo: string;
  private taxaAdministrativa: boolean;

  constructor(saldo: number, parcelas: number, juros: number, tipo: string) {
    const jurosAjustado = tipo === 'usado' ? juros + 1 : juros;

    super(saldo, parcelas, jurosAjustado);
    
    this.tipo = tipo;
    this.taxaAdministrativa = parcelas > 60;
  }

  public proximaParcela(): number {
    let parcela = super.proximaParcela();
    
    if (parcela > 0 && this.taxaAdministrativa) {
      parcela = parcela + (parcela * 0.02);
    }
    
    return parcela;
  }
}