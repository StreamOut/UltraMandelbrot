function algo(size){
  var iterationMax = 200;
  var im;
  for(var x = 0; x < size; x++){
    for(var y = 0; y < size; y++){
      var c = math.complex(x,y);
      var z = 0;
      var i = 0;
      do{
        //console.log("c : "+c);
        z = math.add(math.multiply(z,z), c);
        //console.log("z : "+z);
        i = i+1
        im = z.im;
        if(im == 'i')
          im = 1;
        //console.log("im : "+im);
        //console.log("reel : "+z.re);
        //console.log(math.sqrt(z.re*z.re+im*im))
      }while(math.sqrt(z.re*z.re+im*im) < 2 && i < iterationMax);
      console.log(i);
      if(i == iterationMax){
        console.log("x : " + x + " y : " + y);
      }
    }
  }
}


function algo2(size){
  var iterationMax = 50;

  for(var x = 0; x < size; x++){
    for(var y = 0; y < size; y++){
      var c_r = Number(x);
      var c_i = Number(y);
      var z_r = Number(0);
      var z_i = Number(0);
      var i = Number(0);
      do{
          var tmp = Number(z_r);
          z_r = z_r*z_r - z_i*z_i + c_r;
          console.log("z_r*z_r - z_i*z_i + c_r = " + z_r);
          z_i = 2*z_i*tmp + c_i;
          i = i+1;

        }    while (z_r*z_r + z_i*z_i < 4 && i < iterationMax);

      if (i == iterationMax)
          console.log("x : " + x + " y : " + y);

    }
  }
}


function algo3(width, height, iterationMax, draw){

  var x1 = -2.1
var x2 = 0.6
var y1 = -1.2
var y2 = 1.2
var image_x = width;
var image_y = height;

// on calcule la taille de l'image :
var zoom_x = image_x/(x2 - x1)
var zoom_y = image_y/(y2 - y1)

for ( var x = 0 ;x < image_x ; x++){
    for(var y = 0; y < image_y; y++){
        var c_r = x / zoom_x + x1
        var c_i = y / zoom_y + y1
        var z_r = 0
        var z_i = 0
        var i = 0

        do{
            var tmp = z_r;
            z_r = z_r*z_r - z_i*z_i + c_r;
            //console.log("z_r*z_r - z_i*z_i + c_r = " + z_r);
            z_i = 2*z_i*tmp + c_i;
            i = i+1;

          }    while (z_r*z_r + z_i*z_i < 4 && i < iterationMax);

        if (i == iterationMax){
            drawColorPixel(d3.rgb(x,y,i), x, y, draw);
          }
          else {
            drawColorPixel(d3.rgb(0,0 , i*255/iterationMax), x, y, draw);
          }
      }
    }
}
