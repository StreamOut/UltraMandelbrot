function algo(size){
  var iterationMax = 50

  for(var x = 0; x < size; x++){
    for(var y = 0; y < size; y++){
      var c = math.complex(x,y);
      var z = 0;
      var i = 0;
      while(z < 2 && i < iterationMax){
        z = math.complex(z*z + c);
        i = i+1
      }
      if(i == iterationMax){
        console.log("x : " + x + " y : " + y);
      }
    }
  }
}
