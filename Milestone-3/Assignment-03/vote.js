function gonoVote(array) {
    //write your code here
    if(!Array.isArray(array)){
        return "Invalid";
    }


    let haVote = 0;
    let naVote = 0;

    for(const vote of array){
        if(vote ==="ha"){
            haVote++;
        }
        if(vote==="na"){
            naVote++;
        }
    }

    if(haVote>naVote){
        return true;
    }else if(naVote>haVote){
        return false;
    }else{
        return "equal"
    }
}