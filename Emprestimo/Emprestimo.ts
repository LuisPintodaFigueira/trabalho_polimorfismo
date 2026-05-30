export class Emprestimo {
  private n: number;
  private j: number;
  private corrente: number;
  private p: number;

  constructor(s: number, n: number, j: number) {
    this.n = n;
    this.j = j;
    this.corrente = 1;
    this.p = s;
  }

  public getN(): number {
    return this.n;
  }

  public getJ(): number {
    return this.j;
  }

  public getCorrente(): number {
    return this.corrente;
  }

  public getP(): number {
    return this.p;
  }

  public setP(valor: number): void {
  this.p = valor;
  }

  public setJ(valor: number): void {
  this.j = valor;
  }

  public setCorrente(valor: number): void {
  this.corrente = valor;
  }

  public proximaParcela(): number {

    let retorno = this.p;

    this.corrente++;

    if (this.corrente <= this.n) {
      this.p = this.p + (this.p * (this.j / 100));
    } else {
      this.p = 0;
    }

    return retorno;
  }  
}
