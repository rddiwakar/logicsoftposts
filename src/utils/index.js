export const pagination =(data,s)=>{ 
    let size = s; 
    let arrayOfArrays = [];
    for (var i=0; i<data.length; i+=size) {
         arrayOfArrays.push(data.slice(i,i+size));
    }
    return arrayOfArrays
}