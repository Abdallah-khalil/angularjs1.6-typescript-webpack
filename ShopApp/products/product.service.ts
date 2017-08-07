import * as angular from 'angular';
import { IProduct } from './product';

export class ProductService {
    static $inject: string[] = ['$http'];
    constructor(private $http: angular.IHttpService) {
        'ngInject';

    }
    getProducts() {
        return this.$http.get('/Assets/jsonData/products.json').then(response =>  response.data );
    }
}
