class Person {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

let p = new Person('设计模式')
alert(p.getName())