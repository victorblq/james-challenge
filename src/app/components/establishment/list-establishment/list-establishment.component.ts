import {Component, OnDestroy, OnInit} from '@angular/core';
import {EstablishmentService} from '../../../services/establishment-service';
import {Establishment} from '../../../models/establishment';

@Component({
    selector: 'app-list-establishment',
    templateUrl: './list-establishment.component.html',
    styleUrls: ['./list-establishment.component.scss']
})
export class ListEstablishmentComponent implements OnInit {

    public establishments: Array<Establishment>;

    constructor(private establishmentService: EstablishmentService) {}

    ngOnInit(): void {
        this.establishmentService.establishmentsLoaded.subscribe((establishments: Array<Establishment>) => {
            this.establishments = establishments;
        });

        this.establishments = this.establishmentService.listEstablishments()
            .sort((a, b) => {
                if (a.index > b.index) {
                    return 1;
                } else {
                    return -1;
                }
            });
    }

}
