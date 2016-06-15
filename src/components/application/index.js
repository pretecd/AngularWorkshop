import angular from 'angular';
import ngCookies from 'angular-cookies';
import welcomeComponent from 'components/welcome/index';
import contactListComponent from 'components/contact-list/index';
import detailComponent from 'components/detail/index';
import config from './config';
import errorHandling from './error-handling';
import applicationState from './application-state';
import httpProvider from './http-provider';

const dependencies = [
    'ngCookies',
    welcomeComponent.name,
    contactListComponent.name,
    detailComponent.name
];

export default angular
    .module('Application', dependencies)
    .config(config)
    .config(applicationState)
    .provider('http', httpProvider)
    .run(errorHandling);

