import { NgModule } from '@angular/core';

import {
  IgxGridModule,
  IgxRippleModule,
  IgxSwitchModule,
  IgxSelectModule,
  IgxDialogModule,
  IgxButtonModule,
} from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from '../../directives/prevent-scroll.directive';

import { GridRoutingModule } from './grid-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OneComponent, TwoComponent, ThreeComponent, FourComponent],
  imports: [
    CommonModule,
    GridRoutingModule,
    FormsModule,
    IgxPreventDocumentScrollModule,
    IgxGridModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxSelectModule,
    IgxDialogModule,
    IgxButtonModule,
  ],
  providers: [],
})
export class GridModule {}
