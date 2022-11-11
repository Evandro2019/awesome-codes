// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript
// Initializing a class definition


class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}
	// Adding a method to the constructor
	greet() {
		return `${this.name} says hello.you are my number ${this.level} hero!`;
		

	}	

}


const hero1 = new Hero('Gandalf', 1);

console.log(hero1)
console.log(hero1.greet())

/*

// Creating a new constructor from the parent
function Mage(name, level, spell) {
	// Chain constructor with call
	Hero.call(this, name, level);  //parou no call
	this.spell = spell;
}

const hero2 = new Mage('LejonVector', 2, 'Magic Missile');

console.log('hero2, hero2.greet(), hero2.spell')

console.log(hero2)

*/

// Creating a new class from the parent
class Mage extends Hero {
	constructor(name, level, spell) {
		// Chain constructor with super
		super(name, level);

		// Add a new property
		this.spell = spell;
	}
}

const hero2 = new Mage('Lejon', 2, 'Magic Missile');

console.log(hero2)
console.log(hero2.greet())


function Heronew(name, level) {
	this.name = name;
	this.level = level;
}

// Adding a method to the constructor
Heronew.prototype.greet = function() {
	return `${this.name} says hello.`;
}

// Creating a new constructor from the parent
function Magenew(name, level, spell) {
	// Chain constructor with call
	Heronew.call(this, name, level);

	this.spell = spell;
}

const hero3 = new Heronew('Thor', 5, 'Magic Hammer');

console.log(hero3)
console.log(hero3.greet())

