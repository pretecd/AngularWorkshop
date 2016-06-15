/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import template from './detail.html';
        function detailRoute($stateProvider) {
        return $stateProvider
                .state('app.detail', {
                url: '/detail/:name',
                        views: {
                        main: {
                        template: template,
                        controller: 'DetailController as ctrlDetail'
                        }
                        }
                });
        }

export default [
        '$stateProvider',
        detailRoute
        ];
