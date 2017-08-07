import * as $ from 'jquery';
import * as angular from 'angular';


export class sidebarItemHover implements angular.IDirective {
    static $inject: string[] = [''];
    restrict: string;

    constructor() {
        "ngInject";
        this.restrict = 'A';
    };


    link: angular.IDirectiveLinkFn = (scope: angular.IScope, elem: angular.IAugmentedJQuery, attributes: angular.IAttributes) => {
        var hoverTimeout;
        $('.nav-sidebar > li').hover(function () {
            clearTimeout(hoverTimeout);
            $(this).siblings().removeClass('nav-hover');
            $(this).addClass('nav-hover');
        }, function () {
            var $self = $(this);
            hoverTimeout = setTimeout(function () {
                $self.removeClass('nav-hover');
            }, 200);
        });

        $('.nav-sidebar > li .children').hover(function () {
            clearTimeout(hoverTimeout);
            $(this).closest('.nav-parent').siblings().removeClass('nav-hover');
            $(this).closest('.nav-parent').addClass('nav-hover');
        }, function () {
            var $self = $(this);
            hoverTimeout = setTimeout(function () {
                $(this).closest('.nav-parent').removeClass('nav-hover');
            }, 200);
        });
    }
}