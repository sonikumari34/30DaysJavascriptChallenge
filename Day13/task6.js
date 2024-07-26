import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const chunkedArray = _.chunk(numbers, 2);
const reverse = _.reverse(numbers);
const sortArr=_.sortBy(numbers);
const reduce=_.reduce(numbers,(sum,n) => sum+n,0);



console.log("Original Array: ", numbers);
console.log("Chunked Array: ", JSON.stringify(chunkedArray, null, 2));
console.log(reverse);
console.log(sortArr);
console.log(reduce);

const obj={
    a:1,
   n: {
        name:"anita"

    },
   
    age:19
}
const getvalue=_.get(obj,'n.name');
const value = _.get(obj, 'a');
console.log(value);
const keys=_.keys(obj);
console.log(keys);



