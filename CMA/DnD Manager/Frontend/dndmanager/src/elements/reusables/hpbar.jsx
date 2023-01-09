import './hpbar.scss';
import { useState } from "react";

function HpBar(props) {
  const [ currentHealth, setCurrentHealth ] = useState(props.current);
  const [ maxHealth, setMaxHealth ] = useState(props.max);
  
  const MinusHealth = () => {
    const updated = currentHealth >= 0 ? currentHealth - 1 : currentHealth;
    setCurrentHealth(updated);
  }

  const PlusHealth = () => {
    const updated = currentHealth < maxHealth - 1 ? currentHealth + 1 : currentHealth;
    setCurrentHealth(updated);
  }

  const generateBar = () => {
  let bar = [];
    for (let x = 0; x < maxHealth; x++) {
      x <= currentHealth ? bar.push(<div key={x} className="hp-point-full"></div>) : bar.push(<div key={x} className="hp-point-empty"></div>);
    }
    return bar;
  }
  
  return (
    <>
      <div className="hp-bar">
        {generateBar()}
      </div>
      <button onClick={MinusHealth}>-</button>
      <button onClick={PlusHealth}>+</button>
    </>
  )
}

export { HpBar };