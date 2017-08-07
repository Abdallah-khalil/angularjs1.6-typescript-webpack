import * as angular from 'angular';
import { TopBarComponent } from './topBar/topBar.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { FooterComponent } from './footer/footer.component';

export const CommonModule = angular.module('common', [

])
    .component('topBar', new TopBarComponent)
    .component('sideBar', new SideBarComponent)
    .component('footer', new FooterComponent)
    .name;

