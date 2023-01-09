import { useState } from 'react';
import { serverPost } from '../logic/fetch.js'
import './create-character-form.scss';

async function CreateCharacter(inputs) {
  const fetchToken = await serverPost('characters/create', inputs, sessionStorage.getItem('sessionToken'));
  if (fetchToken.status === 200) {console.log("Personaje creado.")}
  if (fetchToken.status === 400) {console.log("Error.")}
  if (fetchToken.status === 401) {console.log("No autorizado.")}
  return;
}

function CreateCharacterForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    CreateCharacter(inputs);
    setInputs({});
  }

  const validateInputs = async (event) => {

  }

  return (
    <>
      <div className='CreateCharacterForm'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Datos del personaje</legend>

            <label>Nombre:
            <input 
              type="text" 
              name="charName" 
              value={inputs.charName || ""} 
              onChange={handleChange}
            />
            </label>
            Sexo:
            <label>
            <input 
              id="gender-male"
              type="radio" 
              name="charGender" 
              value="Male"
              onChange={handleChange}
            />♂
            </label>
            <label>
            <input 
              id="gender-female"
              type="radio" 
              name="charGender"
              value="Female"
              onChange={handleChange}
            />♀
            </label><br />

            <label>Raza:
            <select name="charRace" value={inputs.charRace || ""} onChange={handleChange}>
              <option value="Null"></option>
              <option value="Human">Humano</option>
              <option value="Elf">Elfo</option>
              <option value="Dwarf">Enano</option>
              <option value="Gnome">Gnomo</option>
              <option value="Goblin">Goblin</option>
              <option value="Ork">Orco</option>
            </select>
            </label><br />
            <label>Clase:
            <select name="charClass" value={inputs.charClass || ""} onChange={handleChange}>
              <option value="Null"></option>
              <option value="Mage">Mago</option>
              <option value="Rogue">Pícaro</option>
              <option value="Warrior">Guerrero</option>
              <option value="Monk">Monje</option>
              <option value="Priest">Sacerdote</option>
              <option value="Paladin">Paladin</option>
              <option value="Hunter">Cazador</option>
              <option value="Druid">Druida</option>
              <option value="Shaman">Chamán</option>
            </select>
            </label><br />
          </fieldset>
          <button type="submit">Crear personaje</button>
        </form>
      </div>
    </>
  )
}

export { CreateCharacterForm };