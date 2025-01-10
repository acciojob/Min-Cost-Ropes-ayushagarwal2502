function mincost(arr) { 
  arr.sort((a, b) => a - b);
  let minicost = 0;
  while (arr.length > 1) {
    let a = arr.shift();
    let b = arr.shift();
    let sum = a + b;
    minicost += sum;
    arr.push(sum);
    arr.sort((a, b) => a - b);
  }
  return minicost;
}

module.exports=mincost;
