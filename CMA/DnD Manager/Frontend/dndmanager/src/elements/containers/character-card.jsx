import { HpBar } from '../reusables/hpbar.jsx';

const CharacterCard = (props) => {
  return(
    <>
      <div className="character-card flx row" key={props.id}>
        <div className="character-sprite"></div>
        <div className="flx col">
          <div>{props.name}</div>
          <HpBar current={5} max={10} />
          <div>Level {props.level}</div>
          <div>{props.class}</div>
        </div>
      </div>
    </>
  );
}

export { CharacterCard };