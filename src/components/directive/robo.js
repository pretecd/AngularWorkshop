import template from './robo-template.html';

function roboDirective() {
    return {
        template: template,
        restrict: 'E',
        scope: {
        	email: '=',
        	width: '@',
        	height: '@'},
        controller: 'RoboDirectiveController as ctrl',
        bindToController: true
    };
}

export default [roboDirective];