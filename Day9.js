//Day 9:DOM Manipulation
//Tasks/Activities:

//Acivity 1:Selecting and Manipulating Elements
//task 1:
document.getElementById("text").innerHTML="Hello javascript";

//task 2:
document.getElementsByClassName("pra")[0].style.backgroundColor = "red";
document.getElementsByClassName("pra")[0].style.color = "white";

//Activity 2:Creating and appending elements
//task 3:
let element=document.createElement('div');
element.className='mydiv';
element.innerHTML='i am div';
element.style.backgroundColor='yellow';
element.style.color='red';
document.body.appendChild(element);
//task 4:
 /*let list=document.createElement('li');
list.id='myli';
list.innerHTML='I am list tag';
let ul=document.getElementsByClassName('My')[0];
ul.appendChild(list);
*/

//Activity 3:Removing elements
//task 5:
document.getElementsByClassName('pra')[0].remove();
//task 6:
let elm=document.getElementById('lis');
elm.removeChild(elm.lastElementChild);

let select=document.getElementsByClassName('box')[0];
select.removeChild(select.lastElementChild);
select.removeChild(select.firstElementChild);


//Activity 4:Modifing Attributes and Classes
//task 7:
let imge=document.getElementsByTagName('img');
 imge[0].setAttribute('src','image/bird.jpg');
 imge[0].setAttribute('width',200);

 //task 8:
 let Box = document.getElementsByClassName('box')[0];
 Box.classList.add('highlight');
Box.classList.remove('box');

//Activity 5:Event Handling
//task 9:
let btn = document.getElementById('btn');
let pa = document.getElementById('myprag');

        // Add an event listener to the button
        btn.addEventListener('click', function() {
            // Change the content of the paragraph
            pa.innerHTML = "Text Changed";
        });

//task 10:
pa.addEventListener('mouseover',function(){
       btn.style.borderColor='white';
       
});

