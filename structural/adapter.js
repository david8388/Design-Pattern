/**
 * Lion interface
 *
 * roar()
 */

class AfricanLion {
  roar() {}
}

class AsianLion {
  roar() {}
}

// This needs to be added to the game
class WildDog {
  bark() {}
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter {
  constructor(dog) {
    this.dog = dog
  }

  roar() {
    this.dog.bark()
  }
}


class Hunter {
  hunt(lion) {
    lion.roar()
  }
}

const lion = new AfricanLion()
const dog = new WildDog()
const dogAdapter = new WildDogAdapter(dog)
const hunter = new Hunter()

hunter.hunt(lion)
hunter.hunt(dogAdapter)
// We can't use hunter.hunt(dog), because dog has no method called roar()
