import {Component, Input, OnInit} from '@angular/core';
import {Establishment} from '../../../../models/establishment';

@Component({
    selector: 'app-establishment-card',
    templateUrl: './establishment-card.component.html',
    styleUrls: ['./establishment-card.component.scss']
})
export class EstablishmentCardComponent implements OnInit {

    @Input() establishment: Establishment;

    constructor() { }

    ngOnInit(): void {

    }

}
