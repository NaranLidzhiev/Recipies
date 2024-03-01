app = document.querySelectorAll(".box")
text1 = document.querySelector(".eggs_text")
text2 = document.querySelector(".pasta_text")
text3 = document.querySelector(".shrimps_text")
text4 = document.querySelector(".braciole_text")
img1 = document.getElementById("eggs_img")
img2 = document.getElementById("pasta_img")
img3 = document.getElementById("shrimps_img")
img4 = document.getElementById("braciole_img")

let text = []
for (let i =0 ;  i< 4; i++){
  text[i] = text1
}
function hide_element(el) {
  el.className += " hidden"
}

function text_check() {

}

function show_element(el) {
  el.classList.remove('hidden')
}

hide_element(text1)
hide_element(text2)
hide_element(text3)
hide_element(text4)

function elsa() {
  console.log("Hello world")
}

function Enter(el, index) {
  switch (index) {
    case 0:
      el.className += ' darken'
      el.style.flex = " 1 1 50%"
      img1.style.width = "100%"
      img1.style.height = "100%"
      setTimeout(function () {
        show_element(text1);
      }, 1000)
      break;

    case 1:
      el.className += ' darken'
      el.style.flex = " 1 1 50%"
      img2.style.width = "100%"
      img2.style.height = "100%"
      setTimeout(function () {
        show_element(text2);
      }, 1000)
      break;
    case 2:
      el.className += ' darken'
      el.style.flex = " 1 1 50%"
      img3.style.width = "100%"
      img3.style.height = "100%"
      setTimeout(function () {
        show_element(text3);
      }, 1000)
      break;
    case 3:
      el.className += ' darken'
      el.style.flex = " 1 1 50%"
      img4.style.width = "100%"
      img4.style.height = "100%"
      setTimeout(function () {
        show_element(text4);
      }, 1000)
      break;
  }
}

function Leave(el, index) {
  switch (index) {
    case 0:
      el.classList.remove('darken')
      el.style.flex = "1"
      img1.style.width = "200%"
      img1.style.height = "calc(100% - 20vh)"
      hide_element(text1)
      break;
    case 1:
      el.classList.remove('darken')
      el.style.flex = "1"
      img2.style.width = "200%"
      img2.style.height = "calc(100% - 20vh)"
      hide_element(text2)
      break;
    case 2:
      el.classList.remove('darken')
      el.style.flex = "1"
      img3.style.width = "200%"
      img3.style.height = "calc(100% - 20vh)"
      hide_element(text3)
      break;
    case 3:
      el.classList.remove('darken')
      el.style.flex = "1"
      img4.style.width = "200%"
      img4.style.height = "calc(100% - 20vh)"
      hide_element(text4)
      break;
  }

}


for (let i = 0; i < app.length; i++) {
  app[i].addEventListener("click", () => {
    if (app[i].classList.contains('darken')) {
      Leave(app[i], i)
    } else {
      Enter(app[i], i)
    }
  })
  //
  // app[i].addEventListener("mouseout", ()=>{
  //   console.log("Leave")
  //   actionExecuted = false
  //     Leave(app[i], i);
  // })
}
