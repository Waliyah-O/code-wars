// function findCaterer(budget, people) {
//   if (budget <= 15 || people <= 0) {
//     return -1;
//   }

//   let caterer1 = 15 * people;
//   let caterer2 = 20 * people;
//   let caterer3 = people > 60 ? 0.8 * (30 * people) : 30 * people;

//   if (budget >= caterer3) {
//     return 3;
//   } else if (budget >= caterer2) {
//     return 2;
//   } else if (budget >= caterer1) {
//     return 1;
//   } else if (budget <= 15 || people <= 0) {
//     return -1;
//   }
//   return 0;
// }
// console.log(findCaterer(940, 70));

// function findCaterer(budget, people) {
//   if (budget <= 15 || people <= 0) {
//     return -1;
//   }

//   let caterer1 = 15 * people;
//   let caterer2 = 20 * people;
//   let caterer3 = people > 60 ? (20 / 100) * (30 * people) : 30 * people;

//   if (budget > caterer3) {
//     return 3;
//   } else if (budget > caterer2) {
//     return 2;
//   } else if (budget > caterer1) {
//     return 1;
//   }
//   return 0;
// }

// console.log(findCaterer(150, 10));

function chooseCaterer(budget, numPeople) {
    if (numPeople <= 0 || budget < 15) {
        return -1;
    }

    // const basicBuffetCost = 15;
    // const economyBuffetCost = 20;
    // const premiumBuffetCost = 30;

    const basicBuffetTotalCost = 15 * numPeople;
    const economyBuffetTotalCost = 20 * numPeople;
    const premiumBuffetTotalCost = numPeople > 60 ? 0.8 * (30 * numPeople) : 30 * numPeople;

    if (budget >= premiumBuffetTotalCost) {
        return 3;
    } else if (budget >= economyBuffetTotalCost) {
        return 2;
    } else if (budget >= basicBuffetTotalCost) {
        return 1;
    } else {
        return -1;
    }
}

// Example usage
console.log(chooseCaterer(940, 70));
