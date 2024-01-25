const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const val=[]
rl.question('Enter the elemnts', (name) => {
    const ans=[];
    ans.push(...name);
    for(var i=0;i<ans.length;i+=2){
        val.push(parseInt(ans[i]));
    }
    val.sort();
    
    console.log(val);
    rl.close();
});