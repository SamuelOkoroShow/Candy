var App = angular.module('algos', []);

App.controller('mainCtrl',
    function ($scope) {

        $scope.title = "Hello World";
       
    });

// test data
var hi =['prefix', 'prehaps', 'total', 'english', 'mass'];
var yo = ['mean', 'tweet', 'holy', 'smoke', 'cheese', 'hope'];
var low = ['meet', 'greet', 'linked', 'feet'];

// Algorithm starts here
longest(hi, 'pre');
longest(yo, 'ho');
longest(low, '0');


function longest(str, expected){
    var maxMatch = 0;
console.log("Expected: " +expected);
    
    if(str == null || str.length == 0){
    console.log("actual: " + '0');
        return '';
    }
    
    for(var i = 0; i< str.length; i++){
    var newS = str[i].split('');
        for(var j=(i+1); j<str.length, j++)
       newS str[j].split('');
    }
    
    
};
