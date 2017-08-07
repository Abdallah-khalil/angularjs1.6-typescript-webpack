import * as $ from 'jquery';
import * as angular from 'angular';

export class scrollUp implements angular.IDirective {
    static $inject: string[] = ["$window"];
    restirct: string;

    constructor(private $window: angular.IWindowService) {
        this.restirct = 'A';
    }


    link: angular.IDirectiveLinkFn = (scope: angular.IScope, elem: angular.IAugmentedJQuery) => {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        elem.on('click', () => {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });


    }

}