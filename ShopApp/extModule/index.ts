import * as angular from 'angular';
//import { NgCart } from './ngCart';
import { StickyHeaderModule } from './stickyHeader';
import { ActionsModule } from './actions';

export const ExtModule = angular.module('extModule', [
    StickyHeaderModule,
    ActionsModule
])
    .name;

