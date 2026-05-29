import { Emprestimo } from './Emprestimo';

export class EmprestimoMoradia extends Emprestimo {
  private temSeguroMoradia: boolean;
  private jurosAjustado: number;

  constructor(saldo: number, parcelas: number, juros: number, temSeguroMoradia: boolean) {
    const jurosAjustado = parcelas > 120 ? juros * 0.85 : juros;

    super(saldo, parcelas, jurosAjustado);
    
    this.temSeguroMoradia = temSeguroMoradia;
    this.jurosAjustado = jurosAjustado;
  }

  public proximaParcela(): number {
    let parcela = super.proximaParcela();
    
    if (parcela > 0 && this.temSeguroMoradia) {
      parcela += 10;
    }
    
    return parcela;
  }
}