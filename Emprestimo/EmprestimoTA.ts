import { Emprestimo } from './Emprestimo';

export class EmprestimoTA extends Emprestimo {
  private ta: number;

  constructor(saldo: number, parcelas: number, juros: number, ta: number) {
    super(saldo, parcelas, juros);
    this.ta = ta;
  }

  public getTa(): number {
    return this.ta;
  }

  public proximaParcela(): number {
    let pp = super.proximaParcela();
    if (pp > 0) {
      pp += this.ta;
    }
    return pp;
  }
}
