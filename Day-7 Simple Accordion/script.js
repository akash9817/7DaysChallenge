  var card =  [...document.querySelectorAll('.card')]

  var touched = false
card.map((item) => {
    item.onclick = () => {
         item.getElementsByClassName('icon')[0].innerHTML = '<i class="fa fa-caret-up icon"></i>'
         console.log(item.getElementsByClassName('icon')[0].className)
        item.children[1].style .display = "flex"
        if(item.children[1].classList.length == 2 ){
            item.children[1].classList.remove("show")
            item.getElementsByClassName('icon')[0].innerHTML = '<i class="fa fa-caret-down icon"></i>'
            touched = false;
            return;
        }
        if(touched){
            var x =  document.getElementsByClassName('show')
            item.getElementsByClassName('icon')[0].innerHTML = '<i class="fa fa-caret-down icon"></i>'
            x[0].classList.remove("show")
        }
        item.children[1].classList.add("show")
        touched = true;
    }
})

