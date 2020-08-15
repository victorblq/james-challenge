import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/home/header/header.component';
import {ListEstablishmentComponent} from './components/establishment/list-establishment/list-establishment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EstablishmentCardComponent} from './components/establishment/list-establishment/establishment-card/establishment-card.component';
import {MatCardModule} from '@angular/material/card';
import {EstablishmentService} from './services/establishment-service';
import {HttpClientModule} from '@angular/common/http';
import {EstablishmentFormComponent} from './components/establishment/establishment-form/establishment-form.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {DeleteDialogComponent} from './components/dialogs/delete-dialog/delete-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ListEstablishmentComponent,
        EstablishmentCardComponent,
        EstablishmentFormComponent,
        DeleteDialogComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,

        //Material modules
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule
    ],
    providers: [EstablishmentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
