/* Your JS here. */
console.log('Hello World!')
card=document.getElementById('card');
myName=document.getElementById('name');
myImage=document.getElementById('image');
desc=document.getElementById('desc');

gray=document.getElementById('gray');
red=document.getElementById('red');
blue=document.getElementById('blue');

gray.addEventListener("click",()=>colorChange("gray"))
blue.addEventListener("click",()=>colorChange("DodgerBlue"))
red.addEventListener("click",()=>colorChange("Crimson"))
myImage.addEventListener("click",()=>desc.classList.add('hidden'));
myName.addEventListener("click",()=>desc.classList.remove('hidden'));


function colorChange(color){
    console.log(color);
    card.style.backgroundColor=color;
}
