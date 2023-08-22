const Button=document.getElementById("btn");
const text=document.getElementById("okay");
Button.addEventListener("click",function(){
    
    return (text.innerHTML=`
    <div class="myself">
            Hola!!!
            I'm Nishita Singh, currently pursuing a B.Tech degree in Electronics and Communication
             at Indian Institue of Information Technology,Bhopal(IIIT-Bhopal).
              I'm in my 2nd year of study and have been thoroughly enjoying my academic journey so far.
              Besides my studies, I'm an active member of various cultural activities 
              where I've had the opportunity to present myself and the things I am good at.
              I'm excited about the journey ahead and
               would love to connect with fellow students, professionals, and enthusiasts
                who share my passion. Let's learn and grow together!"
        </div>
    `)
})