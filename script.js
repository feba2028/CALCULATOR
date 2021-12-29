var displayValue=(num)=>result.value+=num

var clearBox=()=>result.value=""

var evaluateExpression=()=>result.value=eval(result.value)

function backSpace(){
        let res=document.querySelector("#result")
        let cur_val=res.value
        res.value=cur_val.slice(0,-1)
}