import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chiliframeComponent from './chiliframe.component';

let chiliframeModule = angular.module('chiliframe', [
  uiRouter
])

.component('chiliframe', chiliframeComponent)

.name;

export default chiliframeModule;
