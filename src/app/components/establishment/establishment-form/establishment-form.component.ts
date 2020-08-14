import { Component, OnInit } from '@angular/core';
import {Establishment} from '../../../models/establishment';
import {EstablishmentService} from '../../../services/establishment-service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-establishment-form',
    templateUrl: './establishment-form.component.html',
    styleUrls: ['./establishment-form.component.scss']
})
export class EstablishmentFormComponent implements OnInit {

    public oldEstablishmentName: string;
    public establishment: Establishment;

    constructor(private router: Router,
                private snackBar: MatSnackBar,
                private activatedRoute: ActivatedRoute,
                private establishmentService: EstablishmentService) { }

    ngOnInit(): void {
        if (this.activatedRoute.snapshot.params.id != null) {
            this.establishment = this.establishmentService.findEstablishmentById(this.activatedRoute.snapshot.params.id);
            this.oldEstablishmentName = this.establishment.name;
        } else {
            this.establishment = new Establishment();
        }
    }

    saveEstablishment(): void {
        if (this.validatEstablishment()) {
            if (this.establishment.id == null) {
                this.insertEstablishment();
            } else {
                this.updateEstablishment();
            }

            this.snackBar.open('Estabelecimento salvo com sucesso');
            this.router.navigate(['/']);
        }else{
            this.snackBar.open('O campo nome é obrigatório', null, {
                duration: 2000,
            });
        }
    }

    private insertEstablishment(): void{
        this.establishmentService.insertEstablishment(this.establishment);
    }

    private updateEstablishment(): void{
        this.establishmentService.updateEstablishment(this.establishment);
    }

    private validatEstablishment(): boolean {
        return this.establishment.name != null && this.establishment.name !== '';
    }

}
