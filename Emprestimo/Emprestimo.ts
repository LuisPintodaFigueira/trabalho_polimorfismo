export class Emprestimo {
  protected saldo: number;
  protected parcelas: number;
  protected corrente: number;
  protected juros: number;
  protected p: number;

  constructor(saldo: number, parcelas: number, juros: number) {
    this.saldo = saldo;
    this.parcelas = parcelas;
    this.juros = juros;
    this.corrente = 1;
    this.p = saldo;
  }

  public proximaParcela(): number {
    let retorno = this.p;
    this.corrente++;
    if (this.corrente <= this.parcelas) {
      this.p = this.p + (this.p * (this.juros / 100));
    } else {
      this.p = 0;
    }
    return retorno;
  }
}
