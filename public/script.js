'use strict';
    angular.module('directiveEx',['ngRoute'])
     .config(['$routeProvider',function($routeProvider){
      $routeProvider.
      when('/basic',{
        templateUrl:'main.html',
        controller:'basicCtrl'  
      }).
      when('/datePicker',{
        templateUrl:'datePicker.html',
        controller:'datePickerCtrl'  
      }).
      otherwise({
               redirectTo: '/main.html'
            });
      }])
     .controller('basicCtrl',['$scope',function($scope){
         $scope.customer={
             name:'Vamsi',
             address:'Vizag'
         };
         $scope.customer1={
             name:'Krishna',
             address:'Vizag'
         };
         $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
         $scope.igor = { name: 'Igor', address: '123 Somewhere' };
         
      }])
     .directive('myCustomer', function(){
        return{
            template:'Name:{{customer.name}} Address:{{customer.address}}'
        };
      })
     .directive('myCustomer1',function(){
        return{
            restrict:'A,E',
            templateUrl:'my-customer.html'
        };
     })   
     .directive('iso',function(){
        return{
            restrict:'E',
            scope:{
                customerInfo:'=info'
            },
            templateUrl:'my-customer-iso.html'
        };
      })
     
