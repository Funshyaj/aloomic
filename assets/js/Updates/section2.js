
let dseData=[

    `React js development services make it easy for companies to build web applications that their web user can freely interact with. The framework introduces a virtual DOM , an update of the real DOM, making apps smarter, faster, and more efficient. The virtual DOM is faster than the real DOM through JavaScript. This solves different problems facing web app development and offers top interactivity without having to let go of performance. `,
    `orem Ipsum is simply dummy text of th    orem Ipsum is simply dummy text of thsages, thsagesand more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I
    sages, thsagesand more recently with   orem Ipsum is simply dummy text of thsages, thsagesand more recently with desktop publishing software like Aldus PageMaker including versions of Lorem I
    publishing software like Aldus PageMaker including versions of Lorem I`,
    3,
    4,
    5,
    6
]



let dseContent=document.querySelectorAll('.dse--contentBx .content')
let dseContentH1=document.querySelectorAll('.dse--contentBx .content h1')
let  blocktwoHeader=document.querySelector('.side__Header')
let  blocktwoContent=document.querySelector('.side__content')


dseContent.forEach((e ,i) => {
        e.addEventListener("click", click => {
            if(dseContentH1[i].classList.contains("active")){
                                
            }else{
                
                dseContentH1.forEach(e=>e.classList.remove('active'))
                dseContent.forEach(e=>e.classList.remove('active'))
                dseContentH1[i].classList.toggle('active') 
                blocktwoHeader.classList.toggle('active') 
                dseContent[i].classList.toggle('active') 
    
            }

            setTimeout(()=>{
                blocktwoHeader.style.animation= "dse__animation--one  0.2s linear  "
                blocktwoContent.style.animation= "dse__animation--two 0.2s linear  "
            }
                ,100
                )

            setTimeout(()=>{
                blocktwoHeader.innerHTML=dseContentH1[i].innerHTML
                blocktwoHeader.style.opacity= "0"

                blocktwoContent.innerHTML=dseData[i]
                blocktwoContent.style.opacity= "0"
            }
                ,300
                
                )
            setTimeout(()=>{ 
                blocktwoHeader.style.animation= "dse__animation--four  0.3s linear  "
                blocktwoContent.style.animation= "dse__animation--five  0.3s linear  "
            }
                ,
                500
                
                )
            setTimeout(()=>{ 
                blocktwoHeader.style.opacity= "1"
                blocktwoContent.style.opacity= "1"
            }
                ,700
                
                )


          })
        })

 
        let cont=document.querySelectorAll('.dse--contentBx .mobile   .content')
let contp=document.querySelectorAll('.dse--contentBx .mobile .content p')
    
cont.forEach((e ,i) => {
        e.addEventListener("click", click => {

             
            if(contp[i].classList.contains("active")){
                contp[i].classList.remove('active')
            }else{
                contp.forEach(e=>e.classList.remove('active'))
             contp[i].classList.toggle('active')
               
             
    
            }
          })
        })





   
   
  


