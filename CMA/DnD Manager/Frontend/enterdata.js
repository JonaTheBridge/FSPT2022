function enterData(name, size, speed, languages, stats, features) {
  const [STR, DEX, CON, INT, WIS, CHA] = stats;
  const obj = {
    name: name,
    size: size,
    speed: speed,
    languages: [...languages],
    stats: {
      STR: STR,
      DEX: DEX,
      CON: CON,
      INT: INT,
      WIS: WIS,
      CHA: CHA
    },
    features: [...features]
  }
}