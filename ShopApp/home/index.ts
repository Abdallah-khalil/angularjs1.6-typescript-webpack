import * as angular from 'angular';
import { StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import { HomeComponent } from './home.component';

export const HomeModule = angular.module('app.home', [
        'ui.router'
    ])
    .component('home', new HomeComponent)
    .config(
    (
        $stateProvider: StateProvider
    ) => {
        "ngInject";
      
        $stateProvider
            .state('app.home', {
                url: '/Main',
                component: 'home'
            });
    })
    .name;

