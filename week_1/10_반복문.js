//0부터 10까지 하나씩 늘어나서 콘솔 찍기

let i;
for(i=0; i<10; i++) {
    if(i===5) {
        break;
    }
    if(i===3) {
        continue;
    }
    console.log(i);
}