import { Emprestimo } from './Emprestimo';

export class EmprestimoComFiador extends Emprestimo {
  private temFiador: boolean;

  constructor(saldo: number, parcelas: number, juros: number, temFiador: boolean) {
    const jurosAjustado = temFiador ? juros * 0.80 : juros * 1.05;
    
    super(saldo, parcelas, jurosAjustado);
    
    this.temFiador = temFiador;
  }

  public proximaParcela(): number {
    return super.proximaParcela();
  }
}