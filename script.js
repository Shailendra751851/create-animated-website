function marqueAnimation(){
    window.addEventListener("wheel",function(dates){
        if(dets.deltaY>0){
            gsap.to(".marque",{
                transform:"translateX(-200%)",
                repeat:-1,
                duration:2,
                ease:"none"
            })
        
    
            gsap.to(".marque img",{
                rotate:180
            })
        
        }else{
            gsap.to(".marque",{
                transform:"translateX(0%)",
                repeat:-1,
                duration:3,
                ease:"none"
            })
            gsap.to(".marque img",{
                rotate:180
            })
        }
    })
     
    
    
    
    
    
    

}
marqueAnimation()