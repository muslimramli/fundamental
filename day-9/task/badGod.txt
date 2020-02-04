var ideas
var ideas1= ['bad', 'bad', 'bad', 'bad']
var ideas2= ['bad', 'good', 'bad', 'bad']
var ideas3= ['bad', 'good', 'good', 'bad']
var ideas4= ['bad', 'good', 'bad', 'good', 'good']
function IdeasString(ideas) {
    if (ideas == ideas1) {
        console.log('Fail!')
        }
        else if (ideas == ideas2) {
            console.log('Publish')
        }
        else if (ideas == ideas3) {
            console.log('Publish')
        }
        else if (ideas == ideas4 ) {
            console.log('I Smell a Series')
        }
}
console.log(IdeasString(ideas4))