import * as $ from 'jquery';
import * as angular from 'angular';


export class toggleUserMenu implements angular.IDirective {
    static $inject: string[] = [''];
    restrict: string;

    constructor() {
        "ngInject";
        this.restrict = 'A';
    };


    link: angular.IDirectiveLinkFn = (scope: angular.IScope, elem: angular.IAugmentedJQuery, attributes: angular.IAttributes) => {
        /* Hide User & Search Sidebar */
        elem.on('click', (e:Event):void => {
            e.preventDefault();
            $('.sidebar .sidebar-top').slideToggle(300);
            if ($('.toggle-sidebar-top span')) {
                if ($('.toggle-sidebar-top span').hasClass('icon-user-following')) {
                    $('.toggle-sidebar-top span').removeClass('icon-user-following').addClass('icon-user-unfollow');
                } else {
                    $('.toggle-sidebar-top span').removeClass('icon-user-unfollow').addClass('icon-user-following');
                }
            };
        });
    }
}
