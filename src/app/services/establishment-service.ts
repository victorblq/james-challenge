import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Establishment} from '../models/establishment';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EstablishmentService {

    public establishments: Array<Establishment>;
    public establishmentsLoaded: EventEmitter<Array<Establishment>> = new EventEmitter<Array<Establishment>>();

    constructor(public httpClient: HttpClient) {
        if (localStorage.getItem('establishments') == null) {
            this.listEstablishmentsFromServer()
                .then((establishmentsFromServer: any) => {
                    localStorage.setItem('establishments', JSON.stringify(establishmentsFromServer.establishments));
                    this.establishments = JSON.parse(localStorage.getItem('establishments'));
                    this.establishmentsLoaded.emit(this.establishments);
                })
                .catch((e) => console.error(e));
        }else{
            this.establishments = JSON.parse(localStorage.getItem('establishments'));
        }
    }

    public listEstablishmentsFromServer(): Promise<Array<Establishment>>{
        return this.httpClient.get<Array<Establishment>>(environment.serverBaseUrl).toPromise();
    }

    public listEstablishments(): Array<Establishment> {
        return this.establishments;
    }

    public findEstablishmentById(id: string): Establishment {
        return this.establishments.find((establishment: Establishment) => establishment.id === id);
    }

    public updateEstablishment(establishment: Establishment): void{
        this.establishments.splice(this.establishments.indexOf(this.findEstablishmentById(establishment.id)), 1, establishment);
        localStorage.setItem('establishments', JSON.stringify(this.establishments));
    }

    public insertEstablishment(establishment: Establishment): void{
        establishment.id = uuid();
        establishment.guid = establishment.id;
        establishment.registered = new Date().toString();
        establishment.index = Math.max(...this.establishments.map((e) => e.index), 0) + 1;

        this.establishments.push(establishment);
        localStorage.setItem('establishments', JSON.stringify(this.establishments));
    }
}
