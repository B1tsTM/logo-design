import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestLoaderComponent }   from './test-loader.component';

@NgModule({
  imports: [CommonModule],
  exports: [TestLoaderComponent],
  declarations: [TestLoaderComponent],
  providers: [],
})
export class SharedModule { }
