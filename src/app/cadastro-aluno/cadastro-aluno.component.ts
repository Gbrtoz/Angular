import { Component } from '@angular/core';

@Component({
  selector: 'cad-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  ra!: string;
  nome!: string;
  email!: string;
  celular!: string;
}
