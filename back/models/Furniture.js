const furnitures = [
  {
    "varnish": [
      "Tan",
      "Chocolate",
      "Black",
      "White"
    ],
    "_id": "5be9cc611c9d440000c1421e",
    "name": "Ingrid",
    "price": 59900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "ingrid.png"
  },
  {
    "varnish": [
      "grey",
      "#2f2f2f"
    ],
    "_id": "5beaadda1c9d440000a57d98",
    "name": "Lallerod",
    "price": 89900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "lallerod.png"
  },
  {
    "varnish": [
      "#96C7C1",
      "#DED9C4",
      "#D0CAB2"
    ],
    "_id": "5beaae361c9d440000a57d99",
    "name": "Leifarne",
    "price": 109900,
    "imageUrl": "leifarne.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "varnish": [
      "#D0CAB2",
      "black"
    ],
    "_id": "5beaaf2e1c9d440000a57d9a",
    "name": "Shell",
    "price": 39900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "shell.png"
  },
  {
    "varnish": [
      "white",
      "#D0CAB2"
    ],
    "_id": "5beab2061c9d440000a57d9b",
    "name": "Shëz",
    "price": 79900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "shëz.png"
  }
]

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(furnitures))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(furnitures)).find(furniture =>
      furniture._id == id)
    )
  );
}