import * as angular from 'angular';
import { StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import { ProductService } from './product.service';
//import { UniqueValueFilter } from './unique.pipe';

export const ProductModule = angular.module('app.product', [

])
    .service('productSvc', ($http: angular.IHttpService) => new ProductService($http))
    .filter('unique', () => {
        return function (arr, field) {
            if (arr) {
                var o = {}, i, l = arr.length, r = [];
                for (i = 0; i < l; i += 1) {
                    o[arr[i][field]] = arr[i];
                }
                for (i in o) {
                    r.push(o[i]);
                }
                return r;
            }
        };
    })
    .name;

