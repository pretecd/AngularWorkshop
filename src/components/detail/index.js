/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detailState from './detail-state';
import ctrlDetail from './detailController';

const dependencies = [
    uiRouter
];

export default angular
    .module('detail-state-component', dependencies)
    .controller('DetailController', ctrlDetail)
    .config(detailState);
    