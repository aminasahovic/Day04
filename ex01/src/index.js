function main(numOne, numTwo){

    var quotient;
    if(numTwo === 0){
        quotient = 'Divide by 0! Connot divide by zero!';
    }else{
        //Only change code below this line
        quotient = numOne / numTwo ;
        //Only change code above this line
    }
    return quotient;
}
console.log(main(55,0));
module.exports=main;