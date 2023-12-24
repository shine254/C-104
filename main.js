  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
 
  camera = document.getElementById("camera")

webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="caputed_image" src="'+data_url+'"/>';
    })
}
   console.log('ml5 version:' , ml5.version);

classifer = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/[...]')