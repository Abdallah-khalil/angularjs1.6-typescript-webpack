import * as $ from 'jquery';
import * as angular from 'angular';


export class fullScreen implements angular.IDirective {
    static $inject: string[] = [''];
    restrict: string;

    constructor() {
        "ngInject";
        this.restrict = 'A';
    };


    link: angular.IDirectiveLinkFn = (scope: angular.IScope, elem: angular.IAugmentedJQuery) => {
        let $body = $('body');
        let toggleFullSceen = (e: Event): void => {
            if (!$body.hasClass("full-screen")) {
                $body.addClass("full-screen");
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen();
                }
            } else {
                $body.removeClass("full-screen");
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        };

        elem.on('click', toggleFullSceen);
    }
}
