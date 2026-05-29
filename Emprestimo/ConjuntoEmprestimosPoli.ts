import { ConjuntoEmprestimos } from './ConjuntoEmprestimos';
import { Emprestimo } from './Emprestimo';
import { EmprestimoTA } from './EmprestimoTA';
import { EmprestimoComDesconto } from './EmprestimoComDesconto';
import { EmprestimoEducacional } from './EmprestimoEducacional';
import { EmprestimoComJurosProgressivo } from './EmprestimoComJurosProgressivo';
import { EmprestimoMoradia } from './EmprestimoMoradia';
import { EmprestimoVeiculo } from './EmprestimoVeiculo';
import { EmprestimoComFiador } from './EmprestimoComFiador';

class ConjuntoEmprestimosPoli {
  public static main(): void {
    const ce = new ConjuntoEmprestimos(11);

    ce.adicionaEmprestimo(new Emprestimo(200, 3, 1));
    ce.adicionaEmprestimo(new EmprestimoTA(500, 4, 2, 15));
    ce.adicionaEmprestimo(new Emprestimo(300, 2, 1));
    ce.adicionaEmprestimo(new Emprestimo(450, 3, 2));
    ce.adicionaEmprestimo(new EmprestimoTA(700, 2, 3, 10));
    
    ce.adicionaEmprestimo(new EmprestimoComDesconto(1000, 4, 2, 20));

    ce.adicionaEmprestimo(new EmprestimoEducacional(800, 5, 3, 2));

    ce.adicionaEmprestimo(new EmprestimoComJurosProgressivo(1200, 4, 2, 1));

    ce.adicionaEmprestimo(new EmprestimoMoradia(50000, 180, 1.5, true));

    ce.adicionaEmprestimo(new EmprestimoVeiculo(30000, 72, 2, 'usado'));

    ce.adicionaEmprestimo(new EmprestimoComFiador(1500, 5, 4, true));

    let status: boolean;
    do {
      status = ce.proximasParcelas();
    } while (status);
  }
}

// Executa o programa
ConjuntoEmprestimosPoli.main();
