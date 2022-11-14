
let partnerData=[
    {h3:1,p:1},
    {h3:2,p:2},
    {h3:3,p:3},
    {h3:4,p:4},
    {h3:5,p:5},
    {h3:6,p:6},
    {h3:7,p:7},
    {h3:8,p:8},
    {h3:9,p:9}
   ]



let cir__boeder=document.querySelectorAll(".partner_cir .cir--boeder")
let partner__content=document.querySelectorAll(".partner__content .content")
let partnerContent=document.querySelectorAll(".partner__content .content .partner--content")
let hr=document.querySelectorAll(".partner__content .hr")
let partner=document.querySelector(".partner--section")
   let left =document.querySelector('#left')
   let right =document.querySelector('#right')
   let cirHeader= document.querySelectorAll('.cir--header')

document.addEventListener('scroll',()=>{
    let y = window.innerHeight / 2;
    let bet=y-hr[0].getBoundingClientRect().y
    if(bet>=0){
            hr.forEach(e=>
                e.style.height=`100%`
            )
    }
    
}


)
let likescroll= setInterval(() => {
     let y = window.innerHeight / 2;
    let bet=y-hr[0].getBoundingClientRect().y
    if(bet>=0){
            hr.forEach(e=>
                e.style.height=`100%`
            )
    }
    
    if(hr[0].style.height==`100%` ) clearInterval(likescroll)
    
}, 100);
   









partner__content.forEach((e,i)=>{
e.addEventListener('click',()=>{
    partner__content.forEach((e,i)=>{
        partnerContent[i].style.opacity="0";
        partnerContent[i].style.maxHeight="0vw"
        partnerContent[i].style.height="0vw"
        cir__boeder[i].style.transform=" rotate(0deg)"
    })

    cir__boeder[i].style.transform=" rotate(-180deg)"
    partnerContent[i].style.maxHeight="20vw"
    partnerContent[i].style.height="100vw"
    partnerContent[i].style.opacity="1";

})
e.addEventListener('mouseover',()=>{

    cir__boeder[i].style.transform=" rotate(-180deg)"
    partnerContent[i].style.minHeight="35vw"
    if(window.outerWidth >=1024){partnerContent[i].style.minHeight="10vw"}
    partnerContent[i].style.maxHeight="19vw"
    partnerContent[i].style.height="100vw"
    partnerContent[i].style.opacity="1";
})
e.addEventListener('mouseout',()=>{
    partnerContent[i].style.opacity="0";
    partnerContent[i].style.maxHeight="0vw"
    cir__boeder[i].style.transform=" rotate(-180deg)"
    partnerContent[i].style.minHeight="0vw"
    partnerContent[i].style.maxHeight="0vw"
    partnerContent[i].style.height="0vw"
    partnerContent[i].style.opacity="1";


    cir__boeder[i].style.transform=" rotate(0deg)"

    
    
})

})

left.addEventListener('click',sliderMove)
right.addEventListener('click',sliderMove)

function sliderMove(){

    // remove animation

    partner__content.forEach((e,i)=>{
        partnerContent[i].style.opacity="0";
        partnerContent[i].style.height="0vw"
        cir__boeder[i].style.transform=" rotate(0deg)"
    })

    // button animation
if (this===left) {
    setTimeout(() => {this.style.animation="obad .4s"  }, 0);
    setTimeout(() => {this.style.animation="none"  }, 400);
    }
if (this===right) {
    setTimeout(() => {this.style.animation="obad2 .4s"  }, 0);
    setTimeout(() => {this.style.animation="none"  }, 400);
    }

        cirHeader.forEach((e,i)=>{
            let index=0
            if (this===left) {
                index=i
                partnerData.unshift(partnerData.pop())
            }else{
                index=cirHeader.length-1-i
                partnerData.push(partnerData.shift())
            }
             setTimeout(() => { 
                partner__content[index].style.opacity="0" 
                cirHeader[index].style.opacity="0" 
             }
        ,i*200)
             setTimeout(() => {
                cirHeader[i].innerHTML=partnerData[i].h3 
                partnerContent[i].innerHTML=partnerData[i].p
                }
        ,200+i*200)

        setTimeout(() => {
            partner__content[index].style.opacity="1" 
            cirHeader[index].style.opacity="1" 
            
        }
        ,(i+1)*200)
        }
       
        
        
         )



}












