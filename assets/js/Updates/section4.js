let coen=document.querySelectorAll(".Industry--contentBx .content")
let endless=document.querySelectorAll(".Industry--endless img")


// if scroll is work the code well be better 

document.addEventListener("scroll", function(){

    let m=[]
    let y = window.innerHeight / 2;
    coen.forEach((e ,i) => {
        e.style.opacity= "0.2"
        m[i]=Math.abs( e.getBoundingClientRect().y-y)
    }
    )
    coen[m.indexOf(Math.min(...m))].style.opacity= "1" 


  })


  setInterval(()=>{


    let m=[]
    let y = window.innerHeight / 2;
    coen.forEach((e ,i) => {
        e.style.opacity= "0.2"
        m[i]=Math.abs( e.getBoundingClientRect().y-y)
    }
    )
    coen[m.indexOf(Math.min(...m))].style.opacity= "1" 

 
  },100)
  setInterval(()=>{


    if (document.querySelector("html").classList.contains("has-scroll-scrolling")||document.querySelector("html").classList.contains("has-scroll-draggin")) {
       
        let lol= setTimeout(()=>{
            endless.forEach(e=>{
                e.classList.remove('scroll')
            })
           },5000)
        clearTimeout(lol)
        
        endless.forEach(e=>{
            e.classList.add('scroll')
        })
              document.querySelector("html").classList.remove("has-scroll-scrolling")
        document.querySelector("html").classList.remove("has-scroll-draggin")
  lol= setTimeout(()=>{
    endless.forEach(e=>{
        e.classList.remove('scroll')
    })
   },5000)
    
        
    }
  },0)



 








