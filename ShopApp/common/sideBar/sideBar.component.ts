export class SideBarComponent implements ng.IComponentOptions {
    template: string;
    controller: ng.IControllerConstructor;

    constructor() {
        this.template = require('./sideBar.tpl.html');
        this.controller = SideBarController;
    }
};

export class SideBarController implements ng.IComponentController {

    constructor() {
        "ngInject";
    }

    $onInit() {

    }

    changeView() {

    }
}