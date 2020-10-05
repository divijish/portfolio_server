window.onload = () => {

    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('../../service_worker.js').then(
            () => {
                console.log("Service Worker Registered")
            }
        ).catch((e) => {
            console.log(`Could not register Service Worker: ${e}`)
        });
    }

    document.querySelector("b").addEventListener("click", (event) => {

        var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        document.querySelector("nav").style.display = "block";
        document.querySelector("nav").style.top = scrollTop + 'px';
        document.querySelector("nav").style.left = scrollLeft + 'px';

        let html = document.querySelector("html");
       html.classList.add("scroll-stop");
        let body = document.querySelector("body");
       // body.classList.add("scroll-stop");
    })

    let nav = document.querySelector("nav");
    nav.addEventListener("click", ()=>{
        nav.style.display = "none";
        let html = document.querySelector("html");
        html.classList.remove("scroll-stop");
        let body = document.querySelector("body");
        body.classList.remove("scroll-stop");
    })

    document.querySelector(".cross").addEventListener("click", (event) => {
        document.querySelector("nav").style.display = "none";
        let html = document.querySelector("html");
       // html.classList.remove("scroll-stop");
        let body = document.querySelector("body");
        //body.classList.remove("scroll-stop");

    })

    let menu = document.querySelectorAll(".menu");
    console.log(`Menu`);
    console.log(menu);
    
    menu.forEach(

        item => {
            console.log(`item : ${item}`)
            item.addEventListener("click", () => {
                document.querySelector("nav").style.display = "none";
                let html = document.querySelector("html");
                html.classList.remove("scroll-stop");
                let body = document.querySelector("body");
                body.classList.remove("scroll-stop");
            })
        }
    )


//Implementing heartbeat.

    setInterval(heartBeat, 1000);

    function heartBeat(){
        setTimeout(heartsmall, 0);
        setTimeout(heartequal, 500);
        setTimeout(heartbig, 700);
    }

    var heart = document.querySelector(".heart");
    function heartsmall(){

        heart.style.transform="scale(0.9)";

    }

    function heartequal(){
        heart.style.transform="scale(1.0)";
    }

    function heartbig(){
        heart.style.transform="scale(1.1)";
    }

    document.querySelector(".mouse-icon").addEventListener("click", ()=>{
        document.querySelector(".mouse-icon-wrapper").style.display="none";
    })

    setTimeout(()=>{
        document.querySelector(".mouse-icon-wrapper").style.display="flex";
    },3000);

    setInterval(()=>{
        console.log("mouse-icon scroll top", document.querySelector(".mouse-icon").scrollY);

    },1000);
   


}



