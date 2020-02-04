const given = (arr=[]) => {
    var new_arr=[]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            new_arr.push(arr[i][j])
            
        }
        
    }
    console.log(new_arr.sort())
}
given(
    [[1,2,3], [4,5,6], [7,8]]
)