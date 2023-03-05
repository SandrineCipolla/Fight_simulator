class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }

  //Augmente le niveau personnage de 1, et affiche "[pseudo] passe au niveau [niveau] !"'
  evoluer() {
    this.niveau += 1;
    console.log(this.pseudo + " passe au niveau " + this.niveau + "!");
  }
  //Vérifie si la santé du personnage est inférieure ou égale à 0. Si c'est le cas, réinitialise la santé à 0 pour ne pas avoir de points de vie négatifs et affiche "[pseudo] a perdu !"
  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
      console.log(this.pseudo + " a perdu !");
    }
  }
  //informations() - Affiche les informations du personnage "[pseudo] ([classe]) a [sante] points de vie et est au niveau [niveau]."
  get informations() {
    return (
      this.pseudo +
      " (" +
      this.classe +
      ") a " +
      this.sante +
      " points de vie et est au niveau " +
      this.niveau +
      "."
    );
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90);
  }

  attaquer(personnage) {
    personnage.sante = personnage.sante - this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " en lançant un sort " +
        (this.attaque + " dégats") +
        " ."
    );
    this.evoluer();
    personnage.verifierSante();
  }
  coupSpecial(personnage) {
    personnage.sante = personnage.sante - this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec son coup spécial puissance des arcanes " +
        personnage.pseudo +
        " " +
        (this.attaque * 5 + " dégats") +
        "."
    );
    this.evoluer();
    personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "guerrier", 350, 50);
  }

  attaquer(personnage) {
    personnage.sante = personnage.sante - this.attaque;
    console.log(
      this.pseudo +
        " attaque " +
        personnage.pseudo +
        " avec son épée " +
        (this.attaque + " dégats") +
        " ."
    );
    this.evoluer();
    personnage.verifierSante();
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      this.pseudo +
        " attaque avec son coup spécial haches de guerre " +
        personnage.pseudo +
        " " +
        (this.attaque * 5 + " dégats") +
        "."
    );
    this.evoluer();
    personnage.verifierSante();
  }
}

// let monPerso = new Personnage("toto", "magicien", 0, "coup");
// monPerso.evoluer();
// monPerso.verifierSante();
// console.log(monPerso.informations);

// let monPerso2 = new Magicien("titi");
// let persoAdverse = new Personnage("Roro", "guerrier", 100, 50);
// console.log(monPerso2);
// monPerso2.attaquer(persoAdverse);
// monPerso2.coupSpecial(persoAdverse);

let monPerso3 = new Guerrier("Roxor");
let persoAdverse = new Personnage("Roro", "guerrier", 100, 50);
console.log(monPerso3);
monPerso3.attaquer(persoAdverse);
monPerso3.coupSpecial(persoAdverse);
