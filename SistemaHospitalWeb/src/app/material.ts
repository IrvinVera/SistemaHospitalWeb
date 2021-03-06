import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
     MatCardModule, MatTooltipModule, MatDialogModule, MatAutocompleteModule, 
     MatFormFieldModule, MatInputModule, MatSnackBarModule, MatMenuModule, MatGridListModule, MatSelectModule,
     MatDatepickerModule, MatBadgeModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
     MatCardModule, MatTooltipModule, MatDialogModule, MatAutocompleteModule, 
     MatFormFieldModule, MatInputModule, MatSnackBarModule, MatMenuModule, MatGridListModule, MatSelectModule,
     MatDatepickerModule, MatBadgeModule],
})
export class MaterialModule { 

}