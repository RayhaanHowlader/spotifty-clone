console.log("Welcome to Javascript");
let songIndex=0;
let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
masterSongName=document.getElementById('masterSongName');
x=Array.from(document.getElementsByClassName('SongItemPlay'));
let songsItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songname:"naam nahi jashan hai bharat..",filePath:"0.mp3",coverPath:"cover1.jpg"},
    {songname:"vande-mataram",filePath:"2.mp3",coverPath:"cover1.jpg"},
    {songname:"desh mere mere shan hai tu",filePath:"3.mp3",coverPath:"cover1.jpg"},
];

songsItems.forEach( (element,i) => {
element.getElementsByTagName('img')[0].src=songs[i].coverPath;
});
let audioelement = new Audio("1.mp3");
// audioelement.play();
masterplay.addEventListener('click',()=>{
    if(audioelement.paused ||  audioelement.currentTime<=0){
        masterplay.innerHTML='<path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>'
        y[songIndex].innerHTML='<path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>';
        audioelement.play();
        gif.style.opacity=1;
        
    }
    else{
        audioelement.pause();
        masterplay.innerHTML='<path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>'
        y[songIndex].innerHTML='<path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>';
        gif.style.opacity=0;
    }
})

progress=0;
audioelement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //Update Seebar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioelement.currentTime=(myProgressBar.value*audioelement.duration)/100;
})
const makeplay=()=>{
    y.forEach((element,i)=>{
        element.innerHTML='<path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>';
    });
}
y=Array.from(document.getElementsByClassName('svg'));
x.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
    if(audioelement.paused ||  audioelement.currentTime<=0){
    makeplay();
    index=parseInt(e.target.id);
    console.log(index);
   e.target.innerHTML='<path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>';
   audioelement.src=`${index}.mp3`;
   audioelement.currentTime=0;
   audioelement.play();
  masterplay.innerHTML='<path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>';
   gif.style.opacity=1;
}
else{
    e.target.innerHTML='<path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>';
    console.log("hello");
      masterplay.innerHTML='<path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>'
    audioelement.pause();
    gif.style.opacity=0;
}
   
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=2){      
        songIndex=0;
    }
    else{
    songIndex+=1
    }
    audioelement.src=`${songIndex}.mp3`;
   audioelement.currentTime=0;
   audioelement.play();
   masterplay.innerHTML='<path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>';
   makeplay();
   y[songIndex].innerHTML='<path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>';
   masterSongName.innerHTML=songs[songIndex].songname;
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioelement.src=`${songIndex}.mp3`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.innerHTML='<path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>';
    makeplay();
   y[songIndex].innerHTML='<path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/>';
  masterSongName.innerHTML=songs[songIndex].songname;

});                 