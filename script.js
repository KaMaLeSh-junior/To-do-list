$(document).ready(function (){
    $('#successbutton').on('click',()=>{
        let value = $('input').val();
        console.log(value);
        if(value !==""){
            // let div = $(`<div class="col-lg-8 col-sm-8 "></div>`).text(value);
            
            let element = $(`<li class=" text-warning"></li>`).text(value);
            // element.append(div);
            $(element).append(`&nbsp;&nbsp;<button class="btn btn-warning text-primary" id="faliurebutton">X</button>`);
             $('#ul').append(element);
            //  $('input').value('');
             $('#faliurebutton').on('click',function(){
                 $(this).parent().remove();
             })    
        }
    })
    console.log('hello');
})






















//  ***********------------======== javascript todo list ============= ----------- *************

// let ul = document.querySelector('ul');
// const input = document.querySelector('#input');

// const btn = document.querySelector('#successbutton');
// let button_corner = document.querySelector('#button_corner')

// btn.addEventListener('click',runthefunction);
// function runthefunction(){
// let li = document.createElement('li');
// li.setAttribute('class','list-group-item col-sm-6 col-lg-6');
// li.innerText=input.value 
// ul.appendChild(li)
// let closebutton = document.createElement('button');
// closebutton.setAttribute('class','input-group-append bg-primary');
// closebutton.innerText="X";
// ul.appendChild

// // let i = 0;
// // if(input !== ""){
// //  i+1;
// //  let li = document.createElement('li');
// // li.appendChild(i);
// // ul.appendChild(li);
// // }
// }
// console.log("hai");
