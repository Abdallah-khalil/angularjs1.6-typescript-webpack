import * as $ from 'jquery';
import * as angular from 'angular';
import { SteakyHeader } from './stickyHeader.directive';

export const StickyHeaderModule = angular.module('stickyHeader', [

])

    .directive('cmeloSticky', ($timeout: angular.ITimeoutService, $window: angular.IWindowService) => new SteakyHeader($timeout, $window))
    .name;