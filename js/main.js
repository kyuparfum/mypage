let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
function listing() {//유저가 입력한값을 서버에보내준다
    let url = $('#url').val()
    let comment = $('#comment').val()

    let formData = new FormData();
    formData.append("comment_give", comment);

    fetch('/movie', { method: "POST", body: formData }).then((res) => res.json()).then((data) => {
        alert(data['msg'])
    })
}
function posting() {//유저가 입력한값을 서버에보내준다

}
let pop_p3 = document.querySelector('#p_3_page')//p_3페이지변수
let pop_p2 = document.querySelectorAll('.p_2_page')//p_2페이지변수
let p3_new_btn = document.querySelector('.i_popup > a')
let p3_close_btn = document.querySelector('#p3_close_btn')
let p2_new_btn = document.querySelectorAll('.i_boxs')
let p2_close_btn = document.querySelectorAll('#p2_close_btn')
console.log(p2_new_btn)
p3_new_btn.addEventListener('click',function(e){
    e.preventDefault()
    console.log('~~~~~~~~~~~~~~')
    pop_p3.style.display='block'
})
p3_close_btn.addEventListener('click',function(e){
    e.preventDefault()
    pop_p3.style.display='none'
})
p2_new_btn.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        pop_p2[i].style.display='block'
    })
})
p2_close_btn.forEach(function(t,i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        pop_p2[i].style.display='none'
    })
})