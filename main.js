// getting value from input and convert them into number
const getInput = (inputField)=>{
    const Field = document.getElementById(inputField);
    const a = Number(Field.value);
    const nan = isNaN(a);
  
    if(nan){
        const a = document.getElementById("nan").innerText ="Please, Enter only number";
        return a;
    }
    else{
        return a;
    }

}
