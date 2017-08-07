export class FooterComponent implements ng.IComponentOptions {
    template: string;
    controller: ng.IControllerConstructor;

    constructor() {
        this.template = require('./footer.tpl.html');
        this.controller = FooterController;
    }
};

export class FooterController implements ng.IComponentController {

    constructor() {
        "ngInject";
    }

    $onInit() {

    }
}