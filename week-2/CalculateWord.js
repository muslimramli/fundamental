var names = ['sara', 'mike', 'sara', 'sara', 'Jon'];

function countWords(arr) {
    var res = [];
    var obj = {};

    names.forEach(function(name) {
        if(name in obj) {
            obj[name] += 1;
            res.push(name + "(" + obj[name] + ")");
        } else {
            obj[name] = 0;
            res.push(name);
        }
    });

    return res.join(",");
}

var res = countWords(names);
console.log(res);