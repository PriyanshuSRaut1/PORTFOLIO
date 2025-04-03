      
      
   function scrolling()
   {   
      const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                }
                else{
                    entry.target.classList.remove('show');

                }
            });
        });                            


        const hiddenElement=document.querySelectorAll('.hidden');
        hiddenElement.forEach((el)=>observer.observe(el));
   }
   scrolling();
   
//    popup box open start >>>>>>----------------------->>>>>>
    function open1(){
            let popup=document.getElementById('popup');
            popup.classList.add("open-popup");
            //background blur except popup box
            document.querySelector('#main').style.filter="blur(3px)";
            document.querySelector('#main').style.overflow="avoid";
    }
   
    function close1(){
            let popup=document.getElementById('popup');
            popup.classList.remove("open-popup");
            document.querySelector('#main').style.filter="blur(0)";

        }  
    // setTimeout(open1,1000*8);                  // uncomment

// popupbox close  end <<<<----------------------------<<<<