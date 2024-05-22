function CharacterCard({infoCharacter}) {
  return (
    <article>
        <img src={infoCharacter.image} alt="" />
        <p>{infoCharacter.name}</p>
        <p>{infoCharacter.species}</p>
</article>
  )
}

export default CharacterCard