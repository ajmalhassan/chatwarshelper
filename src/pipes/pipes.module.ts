import { NgModule } from '@angular/core';
import { ArraySortPipe } from './array-sort/array-sort';
import { KformatPipe } from './kformat/kformat';
@NgModule({
	declarations: [ArraySortPipe,
    KformatPipe],
	imports: [],
	exports: [ArraySortPipe,
    KformatPipe]
})
export class PipesModule {}
