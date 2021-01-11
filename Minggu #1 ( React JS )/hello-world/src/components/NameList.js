import React from 'react'
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Namboy', 'Dede']
    const persons = [
      {
        id: 1,
        name: "Brucee",
        age: 30,
        skill: "React",
      },
      {
        id: 2,
        name: "Namboy",
        age: 20,
        skill: "PHP",
      },
      {
        id: 3,
        name: "Dede",
        age: 10,
        skill: "Android",
      },
    ];
const nameList = names.map((name,index) => <h2>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
