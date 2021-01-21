class hole{

    constructor (holes,timeMin,timeMax){

        // this.timejump = timejump; // thoi gian thay doi cac o
        this.holes = holes ;
        // this.timeup = timeup;
        this.min = timeMin;
        this.max = timeMax;
    }
    randomTime(min,max) {
        return Math.floor(Math.random()*(max - min) + min);
}

    randomHole(holes){
        let index = Math.floor(Math.random()*holes.length);
        let hole = holes[index];
        return hole;
    }

    appearcat(){
        let timeUp = this.randomTime(this.min, this.max);
        let cat = this.randomHole(this.holes);
        // console.log(this.holes);
        cat.classList.add('up');
        setTimeout(function(){
            cat.classList.remove('up');
            // console.log(this.timeup);
            // if(this.timeup === false){
            //     this.appearcat();
            // };
        },timeUp);
    }
}


