const replacer = (arr) => {
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i].includes('y') && !arr[i].includes('Y')) {
            arr[i] = `Is it ${arr[i]}?`;
            newArr.push(arr[i]);
        } 
    }

    return newArr;
};


module.exports = replacer;
