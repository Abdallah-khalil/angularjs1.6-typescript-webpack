import * as $ from 'jquery';
import * as angular from 'angular';

export class collapseSideBar implements angular.IDirective {
    static $inject: string[] = ['$timeout', '$window'];
    restrict: string;

    constructor(private $timeout: angular.ITimeoutService,
        private $window: angular.IWindowService) {
        "ngInject";
        this.restrict = 'A';
    };

    createSideScroll(): void {
        if ($.fn.mCustomScrollbar) {
            this.destroySideScroll();
            if (!$('body').hasClass('sidebar-collapsed') && !$('body').hasClass('sidebar-collapsed') &&
                !$('body').hasClass('submenu-hover') && $('body').hasClass('fixed-sidebar')) {
                $('.sidebar-inner').mCustomScrollbar({
                    scrollButtons: {
                        enable: false
                    },
                    autoHideScrollbar: true,
                    scrollInertia: 150,
                    theme: "light-thin",
                    advanced: {
                        updateOnContentResize: true
                    }
                });
            }
            if ($('body').hasClass('sidebar-top')) {
                this.destroySideScroll();
            }
        }
    };


    destroySideScroll(): void {
        $('.sidebar-inner').mCustomScrollbar("destroy");
    };

    link: angular.IDirectiveLinkFn = (scope: angular.IScope, elem: angular.IAugmentedJQuery) => {

        var $body = $('body');

        /* Toggle Sidebar Collapsed */
        let collapsedSidebar = () => {
            if ($body.css('position') != 'relative') {
                if (!$body.hasClass('sidebar-collapsed'))
                    createCollapsedSidebar();
                else
                    removeCollapsedSidebar();
            } else {
                if ($body.hasClass('sidebar-show'))
                    $body.removeClass('sidebar-show');
                else
                    $body.addClass('sidebar-show');
            }

        };

        let createCollapsedSidebar = () => {
            $body.addClass('sidebar-collapsed');
            $('.sidebar').css('width', '').resizable().resizable('destroy');
            $('.nav-sidebar ul').attr('style', '');
            $(this).addClass('menu-collapsed');
            this.destroySideScroll();
            $('#switch-sidebar').prop('checked');
            $.cookie('sidebar-collapsed', 1, { path: '/' });
        };

        let removeCollapsedSidebar = () => {
            $body.removeClass('sidebar-collapsed');
            if (!$body.hasClass('submenu-hover'))
                $('.nav-sidebar li.active ul').css({
                    display: 'block'
                });
            $(this).removeClass('menu-collapsed');
            if ($body.hasClass('sidebar-light') && !$body.hasClass('sidebar-fixed')) {
                $('.sidebar').height('');
            }
            this.createSideScroll();
            $.removeCookie('sidebar-collapsed', { path: '/' });
        };

        elem.on('click', collapsedSidebar);

    }
}
