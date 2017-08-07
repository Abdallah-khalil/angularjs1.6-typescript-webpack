export class TopBarComponent implements ng.IComponentOptions {
    template: string;
    controller: ng.IControllerConstructor;

    constructor() {
        this.template = require('./topBar.tpl.html');
        this.controller = TopBarController;
    }
};

export class TopBarController implements ng.IComponentController {

    constructor() {
        "ngInject";
    }

    $onInit() {

    }
}