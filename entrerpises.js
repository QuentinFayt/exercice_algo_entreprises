class Entreprise {
  constructor(name, revenu) {
    this.name = name;
    this.revenu = revenu;
  }
  average() {
    let rev = (this.revenu.reduce((pre, cur) => pre + cur) / this.revenu.length)
      .toString()
      .split(".");
    return rev[0] + "." + rev[1].substr(0, 2);
  }
  checkName() {
    return this.name.length > 12
      ? this.name
          .split(" ")
          .map((w) => w[0].toUpperCase())
          .join("-")
      : this.name;
  }
  marketInfo() {
    console.log(
      `Hello! We are ${this.checkName()}. Last year we earned ${this.average()}!`
    );
  }
}
let enterprises = [
  new Entreprise(
    "Alpexa",
    [
      45137, 3304, 74003, 68503, 73808, 94246, 62017, 23273, 60285, 61127,
      78510, 74088,
    ]
  ),
  new Entreprise(
    "Septriz",
    [
      81188, 75759, 22364, 88369, 74788, 80759, 71315, 87816, 63936, 84986,
      98514, 40404,
    ]
  ),
  new Entreprise(
    "Boogle partner",
    [
      46611, 56217, 27703, 5773, 73651, 97040, 36482, 58609, 25164, 63690,
      60610, 2650,
    ]
  ),
  new Entreprise(
    "Book Of Faces",
    [
      26937, 79811, 50785, 35564, 52286, 73493, 92746, 38919, 54428, 32606,
      80998, 86212,
    ]
  ),
  new Entreprise(
    "Instakilogrammes",
    [
      25854, 19422, 21344, 88533, 20683, 82385, 17783, 7448, 72153, 76673,
      93315, 45947,
    ]
  ),
  new Entreprise(
    "What's up",
    [
      53882, 80453, 30238, 98621, 45999, 78338, 96038, 5427, 19335, 71624,
      33262, 4486,
    ]
  ),
];
enterprises.forEach((el) => {
  el.marketInfo();
});
