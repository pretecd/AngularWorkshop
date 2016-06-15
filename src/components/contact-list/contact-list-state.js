/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import template from './contact-list.html';
        function contactListRoute($stateProvider) {
        return $stateProvider
                .state('app.contactList', {
                url: 'contactList',
                        views: {
                        main: {
                        template: template,
                        controller: 'ContactListController as ctrl'
                        }
                        }
                });
        }

export default [
        '$stateProvider',
        contactListRoute
        ];
