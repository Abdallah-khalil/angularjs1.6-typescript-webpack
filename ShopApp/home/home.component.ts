import * as ng from 'angular';
import { ProductService } from '../products/product.service';
import { IProduct } from '../products/product';
export class HomeComponent implements ng.IComponentOptions {
    controller: ng.IControllerConstructor;
    template: string


    constructor() {
        this.template = require('./home.tpl.html');
        this.controller = HomeController;
    }
};


export class HomeController implements ng.IComponentController {
    static $inject: string[] = ['productSvc'];
    productsGrid: IProduct[];
    displayProducts: IProduct[];
    availableOptions: object[];
    itemsPerPage: {};

    constructor(private ProductService: ProductService) {
        "ngInject";

    }

    $onInit() {
        this.ProductService.getProducts().then(response => {
           
            this.productsGrid = <IProduct[]>response;
            this.displayProducts = [].concat(this.productsGrid);
            this.availableOptions = [
                { id: 1, num: 5 },
                { id: 2, num: 20 },
                { id: 3, num: 30 },
                { id: 4, num: 50 },
                { id: 5, num: 100 }];
            this.itemsPerPage = { id: 1, num: 5 };
        });
    }
}