import angular from 'angular';
import ngCookies from 'angular-cookies';
import welcomeComponent from 'components/welcome/index';
import config from './config';
import errorHandling from './error-handling';
import applicationState from './application-state';
import httpProvider from './http-provider';
import ContactService from 'components/contact-list/contact-service';
import contactListComponent from 'components/contact-list/index';
import contactDetailComponent from 'components/contact-detail/index';
import roboDirectiveComponent from 'components/directive/index'

const dependencies = [
    'ngCookies',
    welcomeComponent.name,
    contactListComponent.name,
    contactDetailComponent.name,
    roboDirectiveComponent.name
];

export default angular
    .module('Application', dependencies)
    .service('ContactService',ContactService)
    .config(config)
    .config(applicationState)
    .provider('http', httpProvider)
    .run(errorHandling);

