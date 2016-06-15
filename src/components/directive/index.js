import angular from 'angular';
import RoboDirectiveController from './robodirective-controller';
import roboDirective from './robo'

const dependencies = [];

export default angular
   .module('robo-directive', dependencies)
   .controller('RoboDirectiveController', RoboDirectiveController)
   .directive('robo', roboDirective);