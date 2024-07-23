//Day 10:Event Handling
//Tasks/Activities:

//Activity 1:Basic Event Handling
//task 1:
let pra=document.getElementsByClassName('pra')[0];
let btn=document.getElementsByClassName('btn')[0];

btn.addEventListener('click',function(){
      pra.textContent="Hello I am new Text !";
});

//task 2:
const image=document.getElementById('myImage');
image.addEventListener('dblclick',()=>{
    if(image.style.display==='none'){
        image.style.display='block';//show the image
    }else{
        image.style.display = 'none'; //hide the image
    }
})


//Activity 2:Mouse Events
//task 3:
let paragraph=document.getElementsByClassName('pra')[0];
 paragraph.addEventListener('mouseover',function(){
    paragraph.style.backgroundColor='yellow';
 })

 //task 4:
 //let bodyc=getComputedStyle(document.body).backgroundColor;
 const originalBackgroundColor = document.body.style.backgroundColor
 paragraph.addEventListener('mouseout',()=>{
    paragraph.style.backgroundColor=originalBackgroundColor;
 })

 //Activity 3:Keyboard Events
 //task 5:

 let press=document.getElementById('input');
 press.addEventListener('keydown',(event)=>{
     console.log(`key pressed:${event.key}`);
 });
 
 //task 6:
 let ptag=document.createElement('p');
  document.body.appendChild(ptag);
  press.addEventListener('keyup',()=>{
    ptag.textContent=`current value:${press.value}`;
 })

 //Form events
 //task 7:
 const form =document.getElementById('myForm');
 form.addEventListener('submit',(event)=>{
    event.preventDefault();
 })
 
 const submitbtn=document.getElementById('btn2');
 submitbtn.addEventListener('click',()=>{
    const formData=new FormData(form);
    for(const [name,value] of formData.entries()){
        console.log(`${name}:${value}`);
     }
 })

 //task 8:
 let select=document.getElementById('mySelect');
 const displayParagraph = document.getElementById('displayText');
 select.addEventListener('change',()=>{
  const selectedvalue=select.value;
  displayParagraph.textContent=`select value:${selectedvalue}`
 })

 //Activity 5:Event Delegation
 //task 9:

 const list=document.getElementById('myList');
 list.addEventListener('click',(event)=>{
    if(event.target.tagName==='LI'){
        console.log(`clicked item text: ${event.target.textContent}`);
    }
 })

 //task 10:
 const parent=document.getElementById('parent');
 const addchild=document.getElementById('addchild');

 let childcount=0;
 parent.addEventListener('click',(event)=>{
    if(event.target.classList.contains('child')){
        console.log(`clicked child element text:${event.target.textContent}`);
    }
 });

 addchild.addEventListener('click',()=>{
    childcount++;
    const newchild=document.createElement('div');
    newchild.className = 'child';
    newchild.textContent=`child ${childcount}`;
    parent.appendChild(newchild);
 })
