var resultEl= document.getElementById('result')
var output =''
var n1 =''
var sn =''
var countNumbers = 0;


function addsign(e){
    if(sn){
        calcResult()
    }
    sn=e
    console.log(sn)
}

function checkforsign(n){
    return n == '*' || n == '/' || n == '+' || n == '-';
}

function addtostack(i){
    if(countNumbers > 8){
        resultEl.classList.remove("outputFontBig")
        resultEl.classList.add("outputFontSmall")
    }else{
        resultEl.classList.remove("outputFontSmall")
        resultEl.classList.add("outputFontBig") 
    }
    if(sn==''){
        output = output+i
    }else{
        if(n1==''){
        n1=output;output=''
        }
        output = output+i
    }
    resultEl.innerHTML = output
    console.log('output: '+output+', n1: '+n1)
    countNumbers++;
}
  
function calcResult(){
    resultEl.innerHTML = eval(n1+sn+output)
    n1 = n1+sn+output
    console.log(resultEl.innerHTML)
    sn=''
    output=''
    countNumbers=0
}

function clearResult(){
    output=''
    sn=''
    n1=''
    countNumbers=0
    resultEl.innerHTML = output
    console.clear()
    console.log('clear')
}