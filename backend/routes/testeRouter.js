const element = {
  "name":"Wildes",
  "type_person":"client",
  "phone":"35975451202",
  "address":"Lavras"
}

console.log(element);

const updatePeople = (element, body) => { 
  const columnsArray = ['name', 'type_person', 'phone', 'address']; 

  const valuesUpdated = columnsArray.reduce((acc, param) => {
    acc[param] = body[param] || element[param];
    return acc;
  },{});

  return valuesUpdated;
}

console.log('Elemennto atualizado.\n');


console.log(updatePeople(element, {name:"Custodio"}));