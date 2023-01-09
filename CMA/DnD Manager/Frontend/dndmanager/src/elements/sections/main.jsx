import { CharactersContainer } from "../containers/characters-container";

function Main() {
  return (
    <>
      <main className='flx'>
        <div className="left-panel flx col">
          <div>CHARACTERS</div>
          <div>
            <CharactersContainer />
          </div>
        </div>
        <div className="right-panel">
          <div>
            MAP
          </div>
        </div>
      </main>
    </>
  )
}

export { Main };