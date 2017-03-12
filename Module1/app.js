(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
//input.name=document.getElementById("lunch-menu").value;
  $scope.input="";
  $scope.msg="";

  $scope.mySplit=function(){
  var output = SplitStrings($scope.input);
  if (output==1) {
    $scope.msg= "Enjoy!";
  }else if (output==2) {
    $scope.msg="Too much!";
  }else if (output==3) {
    $scope.msg="Please enter data first"
  }
};

  function SplitStrings(string){
    var y=0;
    if (string=="") {
      y=3;
    }else {
      var x = string.split(',');
        if (x.length <= 3 ){
          y=1;
        }else if (x.length>3) {
          y=2;
        }
    }
    return y;
  };
}
})();
