
let holes = [];
let cats = [];
let scoreBoard = document.querySelector('.score');
// console.log(holes);


let lasthole;
let score;
let flag;
let timelife = 15000;
//
// // window.addEventListener('click', function(e){
// //     index = 10;
// //     console.log(index);
// // });
//
/***        random hole         */
function randomHole(holes){
    let index = Math.floor(Math.random() * holes.length);
    let hole= holes[index];
    // if(hole == lasthole){
    //     randomHole(holes);
    // }
    // lasthole = hole;
    return hole;
}
    /** tạo một khối có number ô */
function createHoles(number) {
    let html = ``;

        for (let i = 1; i <= number ; i++) {
            html += `<tr>`;
            for (let j = 1; j <= number; j++) {
                html += `<td class="hole hole${j}">
            <div class="cat"></div>
            </td>`
            }
            html += `</tr>`;
        }

    document.getElementById('my-hole').innerHTML = html;
    holes= document.querySelectorAll('.hole');
    cats = document.querySelectorAll('.cat');
}
createHoles(4);

/***        appear cat sau 0.5 */
function appearcat (){
    let hole = randomHole(holes);
    hole.classList.add('up');       // thêm class "up" vào hole được chọn tức là cho mèo xuât hiện ở ô này
    console.log(hole);
    setTimeout(function (){
        hole.classList.remove('up') // sau 0.5s thì cho mèo biến mất bằng cách gõ class "up".
            if (!flag) {
                appearcat();
            }
        }, 1000);
}

function addScore(){
    score ++;
    scoreBoard.textContent = score;
}



function startGame(){
    flag = false;
    score =0;
    scoreBoard.textContent = 0;
    appearcat()
    setTimeout(function (){
        flag = true;
    },timelife)
}
cats.forEach(function (cat){
    cat.addEventListener('click', addScore);
});

