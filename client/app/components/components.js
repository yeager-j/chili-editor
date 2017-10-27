import angular from 'angular';
import Frame from './chiliframe';
import Editor from './editor';

let componentModule = angular.module('app.components', [Frame, Editor])
  .name;

export default componentModule;
