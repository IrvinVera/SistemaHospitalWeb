import {MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule,
  MatTooltipModule, MatDialogModule, MatAutocompleteModule, MatInputModule, MatSnackBarModule} from '@angular/material';
  import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
     MatCardModule, MatTooltipModule, MatDialogModule, MatAutocompleteModule, 
     MatFormFieldModule, MatInputModule, MatSnackBarModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
     MatCardModule, MatTooltipModule, MatDialogModule, MatAutocompleteModule, 
     MatFormFieldModule, MatInputModule, MatSnackBarModule],
})
export class MaterialModule { 

}