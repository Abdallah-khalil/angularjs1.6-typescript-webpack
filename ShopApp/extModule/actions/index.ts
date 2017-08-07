import * as $ from 'jquery';
import * as angular from 'angular';
import { collapseSideBar } from './collapseSideBar.directive';
import { fullScreen } from './fullScreen.directive';
import { toggleUserMenu } from './toggleUserMenu.directive';
import {scrollUp } from './scrollUp.directive';
import {sidebarItemHover } from './sidebarItemHover.directive';

export const ActionsModule = angular.module('actions', [])
    .directive('collapseSidebar', ($timeout: angular.ITimeoutService, $window: angular.IWindowService) => new collapseSideBar($timeout, $window))
    .directive('fullScreen', () => new fullScreen())
    .directive('toggleUserMenu', () => new toggleUserMenu())
    .directive('scrollUp', ($window:angular.IWindowService) => new scrollUp($window))
    .directive('sidebarItemHover', () => new sidebarItemHover)
    .name;