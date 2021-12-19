
    const plus1=document.querySelector(".first");
    const plus2=document.querySelector(".second");
    const plus3=document.querySelector(".third");
    const plus4=document.querySelector(".fourth");
    const plus5=document.querySelector(".fifth");
    const filter=document.querySelector(".filter-icon");
    const sortm=document.querySelector(".sort-icon");
    const filtercross=document.querySelector(".filter-cross");
    const plus1m=document.querySelector(".firstm");
    const plus2m=document.querySelector(".secondm");
    const plus3m=document.querySelector(".thirdm");
    const plus4m=document.querySelector(".fourthm");
    const plus5m=document.querySelector(".fifthm");
    const checkone= document.querySelector("#checkone");
    const checktwo= document.querySelector("#checktwo");
    const checkthree= document.querySelector("#checkthree");
    const checkfour= document.querySelector("#checkfour");
    const checkfive= document.querySelector("#checkfive");

    filter.onclick=()=>{
        document.querySelector(".filter").style.display="block";
    }
    filtercross.onclick=()=>{
        document.querySelector(".filter").style.display="none";
    }
    sortm.onclick=()=>{
        document.querySelector(".sort").style.display="block";
        document.querySelector("body").style.position="fixed"; 
    }
    var a=1,b=1,c=1,d=1;
    var A=1,B=1,C=1,D=1;
    plus1.onclick=()=>{
        if(a===1){
            document.querySelector(".one").style.display="block";
            plus1.classList.remove("fa-plus");
            plus1.classList.add("fa-minus")
            a=0;
        }
        else{
            a=1;
            plus1.classList.remove("fa-minus");
            plus1.classList.add("fa-plus")
            document.querySelector(".one").style.display="none";
        }
    }
    plus2.onclick=()=>{
        if(b===1){
            document.querySelector(".two").style.display="block";
            plus2.classList.remove("fa-plus");
            plus2.classList.add("fa-minus")
            b=0;
        }
        else{
            b=1;
            plus2.classList.remove("fa-minus");
            plus2.classList.add("fa-plus")
            document.querySelector(".two").style.display="none";
        }
    }
    plus3.onclick=()=>{
        if(c===1){
            document.querySelector(".three").style.display="block";
            plus3.classList.remove("fa-plus");
            plus3.classList.add("fa-minus")
            c=0;
        }
        else{
            c=1;
            plus3.classList.remove("fa-minus");
            plus3.classList.add("fa-plus")
            document.querySelector(".three").style.display="none";
        }
    }
    plus4.onclick=()=>{
        if(d===1){
            document.querySelector(".four").style.display="block";
            plus4.classList.remove("fa-plus");
            plus4.classList.add("fa-minus")
            d=0;
        }
        else{
            d=1;
            plus4.classList.remove("fa-minus");
            plus4.classList.add("fa-plus")
            document.querySelector(".four").style.display="none";
        }
    }
    plus5.onclick=()=>{
        if(d===1){
            document.querySelector(".five").style.display="block";
            plus5.classList.remove("fa-plus");
            plus5.classList.add("fa-minus")
            d=0;
        }
        else{
            d=1;
            plus5.classList.remove("fa-minus");
            plus5.classList.add("fa-plus")
            document.querySelector(".five").style.display="none";
        }
    }
    plus1m.onclick=()=>{
        if(A===1){
            document.querySelector(".onem").style.display="block";
            plus1m.classList.remove("fa-plus");
            plus1m.classList.add("fa-minus")
            A=0;
        }
        else{
            A=1;
            plus1m.classList.remove("fa-minus");
            plus1m.classList.add("fa-plus")
            document.querySelector(".onem").style.display="none";
        }
    }
    plus2m.onclick=()=>{
        if(B===1){
            document.querySelector(".twom").style.display="block";
            plus2m.classList.remove("fa-plus");
            plus2m.classList.add("fa-minus")
            B=0;
        }
        else{
            B=1;
            plus2m.classList.remove("fa-minus");
            plus2m.classList.add("fa-plus")
            document.querySelector(".twom").style.display="none";
        }
    }
    plus3m.onclick=()=>{
        if(C===1){
            document.querySelector(".threem").style.display="block";
            plus3m.classList.remove("fa-plus");
            plus3m.classList.add("fa-minus")
            C=0;
        }
        else{
            C=1;
            plus3m.classList.remove("fa-minus");
            plus3m.classList.add("fa-plus")
            document.querySelector(".threem").style.display="none";
        }
    }
    plus4m.onclick=()=>{
        if(D===1){
            document.querySelector(".fourm").style.display="block";
            plus4m.classList.remove("fa-plus");
            plus4m.classList.add("fa-minus")
            D=0;
        }
        else{
            D=1;
            plus4m.classList.remove("fa-minus");
            plus4m.classList.add("fa-plus")
            document.querySelector(".fourm").style.display="none";
        }
    }
    plus5m.onclick=()=>{
        if(D===1){
            document.querySelector(".fivem").style.display="block";
            plus5m.classList.remove("fa-plus");
            plus5m.classList.add("fa-minus")
            D=0;
        }
        else{
            D=1;
            plus5m.classList.remove("fa-minus");
            plus5m.classList.add("fa-plus")
            document.querySelector(".fivem").style.display="none";
        }
    }
    
    checkone.onclick=()=>{
        checkone.style.color="#007991";
        checktwo.style.color="black";
        checkthree.style.color="black";
        checkfour.style.color="black";
        checkfive.style.color="black";
        document.querySelector(".checkicon1").classList.add("fa-check-circle");
        document.querySelector(".checkicon2").classList.remove("fa-check-circle");
        document.querySelector(".checkicon3").classList.remove("fa-check-circle");
        document.querySelector(".checkicon5").classList.remove("fa-check-circle");
        document.querySelector(".checkicon4").classList.remove("fa-check-circle");
        document.querySelector(".sort").style.display="none";
        document.querySelector("body").style.position="static";
    }
    checktwo.onclick=()=>{
        checktwo.style.color="#007991";
        checkone.style.color="black";
        checkthree.style.color="black";
        checkfour.style.color="black";
        checkfive.style.color="black";
        document.querySelector(".checkicon2").classList.add("fa-check-circle");
        document.querySelector(".checkicon1").classList.remove("fa-check-circle");
        document.querySelector(".checkicon3").classList.remove("fa-check-circle");
        document.querySelector(".checkicon4").classList.remove("fa-check-circle");
        document.querySelector(".checkicon5").classList.remove("fa-check-circle");
        document.querySelector(".sort").style.display="none";
        document.querySelector("body").style.position="static";
    }
    checkthree.onclick=()=>{
        checkthree.style.color="#007991";
        checktwo.style.color="black";
        checkone.style.color="black";
        checkfour.style.color="black";
        checkfive.style.color="black";
        document.querySelector(".checkicon3").classList.add("fa-check-circle");
        document.querySelector(".checkicon1").classList.remove("fa-check-circle");
        document.querySelector(".checkicon2").classList.remove("fa-check-circle");
        document.querySelector(".checkicon4").classList.remove("fa-check-circle");
        document.querySelector(".checkicon5").classList.remove("fa-check-circle");
        document.querySelector(".sort").style.display="none";
        document.querySelector("body").style.position="static";
        
    }
    checkfour.onclick=()=>{
        checkfour.style.color="#007991";
        checktwo.style.color="black";
        checkthree.style.color="black";
        checkone.style.color="black";
        checkfive.style.color="black";
        document.querySelector(".checkicon4").classList.add("fa-check-circle");
        document.querySelector(".checkicon3").classList.remove("fa-check-circle");
        document.querySelector(".checkicon1").classList.remove("fa-check-circle");
        document.querySelector(".checkicon2").classList.remove("fa-check-circle");
        document.querySelector(".checkicon5").classList.remove("fa-check-circle");
        document.querySelector(".sort").style.display="none";
        document.querySelector("body").style.position="static";
    }
    checkfive.onclick=()=>{
        checkfive.style.color="#007991";
        checktwo.style.color="black";
        checkthree.style.color="black";
        checkfour.style.color="black";
        checkone.style.color="black";
        document.querySelector(".checkicon5").classList.add("fa-check-circle");
        document.querySelector(".checkicon1").classList.remove("fa-check-circle");
        document.querySelector(".checkicon2").classList.remove("fa-check-circle");
        document.querySelector(".checkicon3").classList.remove("fa-check-circle");
        document.querySelector(".checkicon4").classList.remove("fa-check-circle");
        document.querySelector(".sort").style.display="none";
        document.querySelector("body").style.position="static";
    }



















    
 