const students= [
  {id:21, name:"omar sunny"},
  {id:31, name:"Mannnana"},
  {id:41, name:"Moyuri"},
  {id:71, name:"DeepJol"},

];

const names = students.map( s=> s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);

const bigger = students.filter( s=> s.id>40);
console.log(bigger);
const biggerO = students.find( s=> s.id>40);
console.log(biggerO);