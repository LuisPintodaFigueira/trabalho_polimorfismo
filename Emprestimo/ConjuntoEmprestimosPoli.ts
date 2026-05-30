import { ConjuntoEmprestimos } from './ConjuntoEmprestimos';
import { Emprestimo } from './Emprestimo';
import { EmprestimoComDesconto } from './EmprestimoComDesconto';
import { EmprestimoComFiador } from './EmprestimoComFiador';
import { EmprestimoComJurosProgressivo } from './EmprestimoComJurosProgressivo';
import { EmprestimoEducacional } from './EmprestimoEducacional';
import { EmprestimoMoradia } from './EmprestimoMoradia';
import { EmprestimoTA } from './EmprestimoTA';
import { EmprestimoVeiculo } from './EmprestimoVeiculo';

class ConjuntoEmprestimosPoli {
  public static main(): void {
    const ce = new ConjuntoEmprestimos(2);

    ce.adicionaEmprestimo(new Emprestimo(200, 3, 1));
    ce.adicionaEmprestimo(new EmprestimoTA(500, 4, 2, 15));
    ce.adicionaEmprestimo(new EmprestimoComDesconto(1000, 5, 3, 10));
    ce.adicionaEmprestimo(new EmprestimoComFiador(1500, 6, 4, true));
    ce.adicionaEmprestimo(new EmprestimoEducacional(2000, 7, 5, 2));
    ce.adicionaEmprestimo(new EmprestimoMoradia(2500, 8, 6, true));
    ce.adicionaEmprestimo(new EmprestimoComJurosProgressivo(3000, 9, 7, 1.5));
    ce.adicionaEmprestimo(new EmprestimoVeiculo(3500, 10, 8, "2020"));

    let status: boolean;
    do {
      status = ce.proximasParcelas();
    } while (status);
  }
}

// Executa o programa
ConjuntoEmprestimosPoli.main();