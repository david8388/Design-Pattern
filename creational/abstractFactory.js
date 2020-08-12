/**
 * Door interface
 * getDescription()
 */
class WoodenDoor {
  getDescription() {
    console.log('I am a wooden door')
  }
}

class IronDoor {
  getDescription() {
    console.log('I am an iron door')
  }
}

/**
 * DoorFittingExpert interface
 * getDescription()
 */
class Welder {
  getDescription() {
    console.log('I can only fit iron doors')
  }
}

class Carpenter {
  getDescription() {
    console.log('I can only fit wooden doors')
  }
}

/**
 * DoorFactory interface
 * makeDoor()
 * makeFittingExpert()
 */

// Wooden factory to return carpenter and wooden door
class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor()
  }

  makeFittingExpert() {
    return new Carpenter()
  }
}

// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory {
  makeDoor() {
    return new IronDoor()
  }

  makeFittingExpert() {
    return new Welder()
  }
}

const woodenFactory = new WoodenDoorFactory()
let door = woodenFactory.makeDoor()
let expert = woodenFactory.makeFittingExpert()

door.getDescription()
expert.getDescription()

const ironFactory = new IronDoorFactory()
door = ironFactory.makeDoor()
expert = ironFactory.makeFittingExpert()

door.getDescription()
expert.getDescription()
