import angular from 'angular';
import uiRouter from 'angular-ui-router';
import editorComponent from './editor.component';

let editorModule = angular.module('editor', [
  uiRouter
])

.component('editor', editorComponent)

.name;

export default editorModule;
