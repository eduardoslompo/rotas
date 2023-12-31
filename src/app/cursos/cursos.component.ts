import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos!:any[];
  pagina!: number;
  inscricao!: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();

    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy(){
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }  

  proximaPagina(){
    // this.pagina++;
    this.router.navigate(['/cursos'], 
  {queryParams: {'pagina': ++this.pagina}});
  }

}
