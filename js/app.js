app = document.querySelectorAll(".box")
text1 = document.querySelector(".eggs_text")
text2 = document.querySelector(".pasta_text")
text3 = document.querySelector(".shrimps_text")
text4 = document.querySelector(".braciole_text")

function hide_element(el){
  el.className += " hidden"
}

function show_element(el){
  el.classList.remove('hidden')
}
hide_element(text1)
hide_element(text2)
hide_element(text3)
hide_element(text4)

function elsa(){
  console.log("Hello world")
}
function Enter(el, index){
  console.log(element_is_hide)
    switch (index){
      case 0: el.className += ' darken'
              setTimeout(function (){
                show_element(text1);
              }, 1000)
              break;
      case 1: el.className += ' darken'
              setTimeout(function (){
                show_element(text2);
              }, 1000)
              break;
      case 2: el.className += ' darken'
              setTimeout(function (){
                show_element(text3);
              }, 1000)
              break;
      case 3: el.className += ' darken'
              setTimeout(function (){
                show_element(text4);
              }, 1000)
              break;
    }
}

function Leave(el, index){
  console.log(element_is_hide)
  switch (index){
    case 0: el.classList.remove('darken')
      hide_element(text1)
      break;
    case 1: el.classList.remove('darken')
      hide_element(text2)
      break;
    case 2: el.classList.remove('darken')
      hide_element(text3)
      break;
    case 3: el.classList.remove('darken')
      hide_element(text4)
      break;
  }

}

for (let i = 0; i < app.length ; i++) {
  app[i].addEventListener("mouseenter", ()=> {
      element_is_hide = false;
      if (!element_is_hide){
        Enter(app[i], i);
      }
  })

  app[i].addEventListener("mouseout", ()=>{
      element_is_hide = true
      Leave(app[i], i);
  })
}
