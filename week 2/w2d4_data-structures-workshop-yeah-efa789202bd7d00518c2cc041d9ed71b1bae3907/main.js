const trolley = [
  {
    id: "frt1",
    quantity: 4,
  },
  {
    id: "ml1",
    quantity: 2,
  },
  {
    id: "ml2",
    quantity: 1,
  },
  {
    id: "chc1",
    quantity: 1,
  },
  {
    id: "drk1",
    quantity: 12,
  },
  {
    id: "drk2",
    quantity: 4,
  },
  {
    id: "frt2",
    quantity: 10,
  },
  {
    id: "msc1",
    quantity: 5,
  },
  {
    id: "ele1",
    quantity: 3,
  },
  {
    id: "pen1",
    quantity: 4,
  },
];

const inventory = [
  {
    id: "frt1",
    name: "Apple",
    isHealthy: true,
    recalled: false,
    price: 1,
  },
  {
    id: "chc1",
    name: "Large Chocolate bar",
    isHealthy: false,
    recalled: false,
    price: 3,
  },
  {
    id: "ml1",
    name: "Pasta Salad Meal",
    isHealthy: true,
    recalled: false,
    price: 4,
  },
  {
    id: "frt2",
    name: "Large Banana",
    isHealthy: true,
    recalled: true,
    price: 2,
  },
  {
    id: "ml2",
    name: "Chicken Sandwich Meal",
    isHealthy: true,
    recalled: false,
    price: 3,
  },
  {
    id: "drk1",
    name: "Red Bull Energy Drink",
    isHealthy: false,
    recalled: true,
    price: 4,
  },
  {
    id: "pen1",
    name: "A Pack Of Pens",
    isHealthy: true,
    recalled: false,
    price: 3,
  },
  {
    id: "drk2",
    name: "Orange Juice",
    isHealthy: false,
    recalled: true,
    price: 2,
  },
  {
    id: "msc1",
    name: "Pack Of Paper",
    isHealthy: true,
    recalled: false,
    price: 2,
  },
  {
    id: "drk3",
    name: "Bottled Water",
    isHealthy: true,
    recalled: true,
    price: 3,
  },
  {
    id: "ele1",
    name: "Laptop Computer",
    isHealthy: true,
    recalled: false,
    price: 300,
  },
  {
    id: "nut1",
    name: "Pack of Salted Peanuts",
    isHealthy: true,
    recalled: true,
    price: 1,
  },
  {
    id: "nut2",
    name: "Pack of Mixed Nuts",
    isHealthy: true,
    recalled: false,
    price: 2,
  },
  {
    id: "hdc1",
    name: "Large Latte",
    isHealthy: false,
    recalled: false,
    price: 4,
  },
  {
    id: "hdc2",
    name: "Large Skinny Cappucino",
    isHealthy: true,
    recalled: false,
    price: 4,
  },
];

const healthy = inventory.filter((obj) => {
  return obj.isHealthy;
});
console.log(healthy);

const receipt = [];

// Section 2 task 2

// check each item in trolley against items in inventory and only return items that are in healthy array
//

// for (let i = 0; i < trolley.length; i++) {
//   trolley[i].id ===
//     healthy.forEach((item) => {
//       item.id;
//     });
// // }
// const  checkid = () => {
//     trolley.forEach((item) => {
//       return item.id === healthy[i].id;
//     });
//   }

const healthyTrolley = trolley.filter((element) => {
  for (let i = 0; i < healthy.length; i++) {
    const newTrolley = [];

    if (healthy[i].id === element.id) {
      newTrolley.push(element);
      return newTrolley;
    }
  }
});
console.log(healthyTrolley);

// // Task 2: Incorrect Item In The Bagging Area
// The customer is now at the point they're running through the self checkout. Inside this cart there are several items. Unfortunately, some items in the cart have been recalled and are no longer available. Remove all items from the cart that are marked for recall

const notRecalled = healthyTrolley.filter((item) => {
  for (let i = 0; i < healthyTrolley.length; i++) {
    const newTrolley2 = [];

    if (healthy[i].id === item.id && healthy[i].recalled === false) {
      newTrolley2.push(item);
      console.log("healthy", healthy[i]);
      return newTrolley2;
    }
  }
});
console.log(notRecalled);
