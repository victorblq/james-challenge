import {Component, Input} from '@angular/core';
import {Establishment} from '../../../../models/establishment';
import {EstablishmentService} from '../../../../services/establishment-service';
import {DeleteDialogComponent} from '../../../dialogs/delete-dialog/delete-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-establishment-card',
    templateUrl: './establishment-card.component.html',
    styleUrls: ['./establishment-card.component.scss']
})
export class EstablishmentCardComponent {

    @Input() establishment: Establishment;

    constructor(private dialog: MatDialog,
                private establishmentService: EstablishmentService) {}

    deleteEstablishment(event): void{
        event.stopPropagation();
        const dialogRef = this.dialog.open(DeleteDialogComponent);

        dialogRef.afterClosed().subscribe((result) => {
            if (result === true) {
                this.establishmentService.deleteEstablishment(this.establishment);
            }
        });
    }
}
