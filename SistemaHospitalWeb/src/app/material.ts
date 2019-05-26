import {MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule,
  MatTooltipModule, MatDialogModule, MatAutocompleteModule, MatInputModule} from '@angular/material';
  import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
     MatCardModule, MatTooltipModule, MatDialogModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule,
     MatCardModule, MatTooltipModule, MatDialogModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule { 

}