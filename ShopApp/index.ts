
// import main angular modules 
import * as jquery from 'jquery';
import * as angular from 'angular';
import { UrlRouterProvider, StateProvider } from 'angular-ui-router';
import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { CommonModule } from './common';
import { ExtModule } from './extModule';
import { ProductModule } from './products';
import * as smartTable from 'angular-smart-table';

//@require "./**/*.html"

export const App = angular.module("ShopApp",
    [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap',
        'angular-loading-bar',
        smartTable,
        HomeModule, CommonModule, ExtModule ,
        ProductModule
    ])
    .config(
    (
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: UrlRouterProvider,
        $stateProvider: StateProvider,
        cfpLoadingBarProvider
    ) => {
        'ngInject';

        $stateProvider
            .state('app', {
                redirectTo: 'app.home',
                abstract: true,
                component: 'app'
            });

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/Main');

        cfpLoadingBarProvider.includeSpinner = true;
        cfpLoadingBarProvider.latencyThreshold = 100;
    })
    .component('app', new AppComponent)
    .name;
