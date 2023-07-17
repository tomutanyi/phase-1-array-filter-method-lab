// Code your solution here

function findMatching (drivers, jina){
    const match = drivers.filter((Drivers) => {
        return Drivers.toLowerCase() === jina.toLowerCase()
    })
 return match;   
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName (drivers, name){
    const filtervariable = drivers.filter((driver) => {
          return driver.name === 'Bobby'})
          return filtervariable;
}

function fuzzyMatch(drivers2, jina) {
    const allMatching = drivers2.filter((driver3) => {
        return driver3.slice(0, jina.length) === jina;
    })
    return allMatching;

}



