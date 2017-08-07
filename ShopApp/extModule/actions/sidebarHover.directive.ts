import * as $ from 'jquery';
import * as angular from 'angular';


export class sidebarHover implements angular.IDirective {
    static $inject: string[] = [''];
    restrict: string;

    constructor() {
        "ngInject";
        this.restrict = 'A';
    };


    compile: angular.IDirectiveCompileFn = (elem: angular.IAugmentedJQuery, attributes: angular.IAttributes) => {
       
    }
}