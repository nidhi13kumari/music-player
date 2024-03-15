const music= document.querySelector("audio");
const image =document.querySelector("img");
const play =document.getElementById("play");
const songname=document.getElementById("songname");
const Singer =document.getElementById("Singer");
const prev =document.getElementById("prev");
const next =document.getElementById("next");
const songs =[
    {
       name:"song 1",
       songname:"ALONE",
       Singer:"Alan Walker"
    },
    {
        name:"song 2",
        songname:"Foryou",
        Singer:"The Rembrandts"
     },
     {
        name:"song 3",
        songname:"Memories",
        Singer:"Adam Levine"
     },
     {
        name:"song 4",
        songname:"senorita",
        Singer:"Maria del Mar Fernandez"
     }
]
let isPlaying = false;
const playMusic = () =>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play" , "fa-pause");
    image.classList.add("anime");
};

const pauseMusic = ()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause" , "fa-play");
    image.classList.remove("anime");
};

play.addEventListener('click',()=>{
isPlaying ? pauseMusic() : playMusic();
})

//changing song by next prev
const loadSong= (songs) =>{
    songname.textContent = songs.songname;
    Singer.textContent = songs.Singer;
    music.src="music/"+songs.name+".mp3";
    image.src="images/"+songs.name+".jpg";
};

let songindex=0;
const nextSong=()=>{
    songindex =(songindex+1)%songs.length;
    loadSong(songs[songindex]);
    playMusic();
};
const prevSong=()=>{
    songindex =(songindex -1 + songs.length)%songs.length;
    loadSong(songs[songindex]);
    playMusic();

};


next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);