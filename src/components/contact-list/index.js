/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactState from './contact-list-state';
import ctrl from './controller';
import capitalize from './capitalizeFilter';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-list-state-component', dependencies)
    .filter('capitalize', capitalize)
    .controller('ContactListController', ctrl)
    .config(contactState);
    