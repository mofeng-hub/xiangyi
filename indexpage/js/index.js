function fadeInOut(inImg,outImg,timeLong){

    let timeSpace = 16;
    let step = 1/(timeLong/timeSpace); 
    let opacity = 0;

    let myTimer = setInterval(()=>{
        //一、处理数据
        opacity+=step;
        if(opacity>=1){
            opacity = 1;
            window.clearInterval(myTimer);
        }

        //二、改变外观
        inImg.style.opacity = opacity;
        outImg.style.opacity = 1-opacity;

    },timeSpace);
}