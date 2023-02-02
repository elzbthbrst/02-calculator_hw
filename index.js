const action = prompt(`Enter operator +, -, /, *`);
const aVar = prompt(`Enter operand A`);
const bVar = prompt(`Enter operand B`);
let answer = actionResult(aVar, bVar);
function actionResult(aVar, bVar) {
    if (action == `/`) {
        return Number(aVar) / Number(bVar);
    } else if (action == `*`) {
        return Number(aVar) * Number(bVar);
    } else if (action == `-`) {
        return Number(aVar) - Number(bVar);
    } else if (action == `+`) {
        return Number(aVar) + Number(bVar);
    } 
}



alert(`${aVar} ${action} ${bVar} = ${answer}`);