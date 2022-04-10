
    // Start SlideShow AutoPlay JS Code


const myslide = document.querySelectorAll(".myslider") ,
    dot = document.querySelectorAll(".dot");

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter += 1;
    slidefun(counter)
}
function plusslides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer()
}
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000)
}

function slidefun(n) {
    let i;
    for(i=0; i<myslide.length;i++){
        myslide[i].style.display = "none";
    }
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter -1].classList.add('active')
}

     // End SlideShow AutoPlay JS Code

    //  Start The Fetching Card Data

const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitem = document.getElementById("cards");
    const card = document.querySelectorAll(".card");
    const pname = storeitem.getElementsByTagName("h3");

    for(var i=0; i < pname.length; i++){
        let match = card[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                card[i].style.display = "";
            }else{
                card[i].style.display = "none";
            }
        }
    }
}

   //  End The Fetching Card Data