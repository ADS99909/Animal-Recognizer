function telephaty(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2ElC-MgK2/model.json',modelReady);

   
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);

 var r=Math.floor(Math.random()*255)+1;
 var g=Math.floor(Math.random()*255)+1;
 var b=Math.floor(Math.random()*255)+1;

 document.getElementById("result-name").innerHTML='I can Hear- '+results[0].label;
 document.getElementById("result-confidence").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2)+"%";

document.getElementById("result-name").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("result-confidence").style.color="rgb("+r+","+g+","+b+")";

img1=document.getElementById("listening-image");

if(results[0].label=="Barking"){
    img1.src="dog.png";
    
}
else if(results[0].label=="Mooing"){
    img1.src="cow.png";
    
}
else if(results[0].label=="Meowing"){
    img1.src="cat.png";
   
}
else {
    img1.src="ear.png";  
}


}

}