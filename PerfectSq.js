let nextSq = num => {
    let sqr = Math.sqrt(num)
    if(sqr %1 === 0){
        return(sqr + 1)**2
    }else{
        return -1
    }
}