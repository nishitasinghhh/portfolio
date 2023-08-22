const Button=document.querySelector(".btn");
const text1=document.querySelector(".newokay");
Button.addEventListener("click",()=>{
   return text1.innerHTML=` <div class="skills">
      <ul>
        <li>  <h2>Introduction</h2>
            With a keen eye for design and a deep understanding of modern web technologies,
             I bring concepts to life by seamlessly blending aesthetics with functionality."</li>
             <li>
               <h2>Technical Skills</h2>
               <ul>
                <li>Web-technologies:HTML,CSS,JavaScript</li>
               <li>Framework:Bootstrap</li>
                <li>Programming language:c,c++,familier with Java</li>
                <li>Tools:GitHub and VsCode</li>
            </ul>
             </li>
             <li>
                <h2>Coding Skills</h2>
                When faced with coding challenges, I thrive in finding elegant solutions.
             </li>
             <li>
                <h2>Communication Skills</h2>
                My clear communication skills ensure that the development process is 
                smooth and aligned with project goals.
             </li>
      </ul>
      <p class="conclusion">
      I am excited about the endless possibilities in this field
       and am dedicated to honing my skills further to create exceptional
        web experiences that captivate and delight users.
    </p>
    </div>`
});