import _ from 'lodash';
const number =[1,2,3,4,5,6,7,8,];

const chunkedArray = _.chunk(number, 2);
console.log("original Array:"+number);
console.log(`chunked Array:${chunkedArray}`);