function matrix(row, col){

var myArr = [];
var newArr = [];

  for(j = 0; j< row; j++) {

    for(i = 0; i < col; i++){
      var num = Math.floor(Math.random() * 100) + 1;
      myArr.push(num);
    }
  }
    myArr.sort(function(a,b){
      return a-b;
    });
    console.log('sorted', myArr);


    for(var p = 0; p < row; p++) {
      newArr.push(myArr.splice(0, col)) ;

    }
    console.log(newArr);
}

matrix(6,3);