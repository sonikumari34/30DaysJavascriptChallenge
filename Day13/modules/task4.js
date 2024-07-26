function generateTable(a){
    let table='';
   for(let i=1;i<=10;i++){
       table+=`${a} x ${i}=${a*i}\n`;
      
   }
   return table;
}
export default generateTable;