"use strict";angular.module("examplesApp",["ngResource","ngRoute","ngCsvImport","hljs"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("examplesApp").controller("MainCtrl",["$scope","$parse",function(a,b){a.csv={content:null,header:!0,separator:",",result:null};var c="";a.toPrettyJSON=function(a,d){var e=null;try{e=b(a)({})}catch(f){return c}var g=JSON.stringify(e,null,Number(d));return c=g,g}}]),angular.module("examplesApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);