

const number = [80,10,90,70,40,20,50,30,100,60,5,3,7]
// const name=["pooja", "babita" , "arti" , "chetna" , "anuj"]


const ascending = number.sort((a,b) =>{
    if(a > b){
        return 1
    }else{
        return -1
    }

});

document.write(`<h2> Ascending Order : `  + ascending)
// console.log(ascending);
