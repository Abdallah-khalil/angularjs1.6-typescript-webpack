export class AppComponent implements ng.IComponentOptions {
    template: string;
    controller: ng.IControllerConstructor;

    constructor() {
        this.template = require('./app.tpl.html');
        this.controller = AppController;
    }

};

declare var window :any;

export class AppController implements ng.IController {
    constructor() {
        "ngInject";
    }

    $onInit() {
        window.loading_screen.finish();
    }

}