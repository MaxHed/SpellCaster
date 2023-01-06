class OverworldMaps {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    
    this.lowerSrc = config.lowerSrc;
    this.upperSrc = config.upperSrc;
  }

  // ...

  addMap(map) {
    this._maps[map.id] = map;
  }

  // ...
}