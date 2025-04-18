import roastedChicken from '@/assets/roastedChicken.png';
import roastedMeatAndPotato from '@/assets/roastedMeatAndPotato.png';
import samonWithSalad from '@/assets/samonWithSalad.png';
import friedFish from '@/assets/friedFish.png';

import cokeBottle from '@/assets/cokeBottle.png';
import wineBottle from '@/assets/wineBottle.png';
import juiceBottle from '@/assets/juiceBottle.png';
import pepsiBottle from '@/assets/pepsiBottle.png';

export const menuData = {
    dishes: [
        {
            id: 1,
            image: roastedChicken,
            name: "Roasted Chicken",
            price: 40
        },
        {
            id: 2,
            image: roastedMeatAndPotato,
            name: "Roasted Meat & Potato",
            price: 50
        },
        {
            id: 3,
            image: samonWithSalad,
            name: "Salmon with Salad",
            price: 45
        },
        {
            id: 4,
            image: friedFish,
            name: "Fried Fish with Vegetables",
            price: 32
        }
    ],
    drinks: [
        {
            id: 5,
            image: cokeBottle,
            name: "Coca-Cola Bottle",
            price: 10
        },
        {
            id: 6,
            image: wineBottle,
            name: "Red Wine Bottle",
            price: 120
        },
        {
            id: 7,
            image: juiceBottle,
            name: "Fresh Orange Juice",
            price: 15
        },
        {
            id: 8,
            image: pepsiBottle,
            name: "Pepsi Bottle",
            price: 10
        }
    ]
};
