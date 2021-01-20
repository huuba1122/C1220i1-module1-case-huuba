class hole{

    constructor (holes,timeup){

        // this.timejump = timejump; // thoi gian thay doi cac o
        this.holes = holes ;
        this.timeup = timeup;
    }

    randomHole(holes){
        let index = Math.floor(Math.random()*holes.length);
        let hole = holes[index];
        return hole;
    }

    appearcat(){
        let cat = this.randomHole(this.holes);
        console.log(this.holes);
        cat.classList.add('up');
        setTimeout(function(){
            cat.classList.remove('up');
            // console.log(this.timeup);
            // if(this.timeup === false){
            //     this.appearcat();
            // };
        },800);
    }
}


