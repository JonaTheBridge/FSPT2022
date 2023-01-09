import { useState, useEffect } from 'react';
import { CharacterCard } from './character-card';

const charArray = [
  {
    id: 1,
    name: "Jason",
    class: "Hunter",
    gender: "Male",
    level: 3,
  },
  {
    id: 2,
    name: "Alaina",
    class: "Mage",
    gender: "Female",
    level: 4,
  },
  {
    id: 3,
    name: "Campbell",
    class: "Rogue",
    gender: "Male",
    level: 6,
  },
  {
    id: 4,
    name: "Thormund",
    class: "Warrior",
    gender: "Male",
    level: 5,
  },
]

function CharactersContainer() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    async function fetchChars() {
      const characters = charArray; //fetch
      setChars(characters);
    };
    fetchChars();
  }, [charArray])

  return (
    <>
      {chars.map((item) => (
          <CharacterCard key={item.id} name={item.name} class={item.class} level={item.level} />
      ))}
    </>
  )
}

export { CharactersContainer };