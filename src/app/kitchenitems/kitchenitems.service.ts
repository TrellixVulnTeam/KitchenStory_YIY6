import { Injectable } from '@angular/core';
import { Mykitchen } from './kitchenitems';
@Injectable({
  providedIn: 'root',
})
export class KitchenService {
  private kitchen: Mykitchen[] = [
    {
      vegetableid: 1,
      vegetablename: 'Tomato',
      vegetablecost: 50,
      vegetableimg: './assets/images/tomato.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 2,
      vegetablename: 'Cabbage',
      vegetablecost: 40,
      vegetableimg: './assets/images/cabbage.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 3,
      vegetablename: 'Carrot',
      vegetablecost: 60,
      vegetableimg: './assets/images/carrot.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 4,
      vegetablename: 'Potato',
      vegetablecost: 30,
      vegetableimg: './assets/images/potato.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 5,
      vegetablename: 'Banana',
      vegetablecost: 60,
      vegetableimg: './assets/images/banana.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 6,
      vegetablename: 'Orange',
      vegetablecost: 55,
      vegetableimg: './assets/images/orange.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 7,
      vegetablename: 'Straw Berry',
      vegetablecost: 70,
      vegetableimg: './assets/images/strawberry.jfif',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 8,
      vegetablename: 'Black Grapes',
      vegetablecost: 60,
      vegetableimg: './assets/images/blackgrapes.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 9,
      vegetablename: 'Kissmiss',
      vegetablecost: 70,
      vegetableimg: './assets/images/kissmiss.jpeg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 10,
      vegetablename: 'Kaaju',
      vegetablecost: 75,
      vegetableimg: './assets/images/kaaju.png',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 11,
      vegetablename: 'Pista',
      vegetablecost: 60,
      vegetableimg: './assets/images/pista.jpeg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 12,
      vegetablename: 'Anjeer',
      vegetablecost: 50,
      vegetableimg: './assets/images/anjeer.jpeg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 13,
      vegetablename: 'Curd',
      vegetablecost: 30,
      vegetableimg: './assets/images/curd.png',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 14,
      vegetablename: 'Butter',
      vegetablecost: 40,
      vegetableimg: './assets/images/butter.jpeg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 15,
      vegetablename: 'Cheese',
      vegetablecost: 60,
      vegetableimg: './assets/images/cheese.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 16,
      vegetablename: 'Milk',
      vegetablecost: 70,
      vegetableimg: './assets/images/milk.png',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 17,
      vegetablename: 'Eggs',
      vegetablecost: 100,
      vegetableimg: './assets/images/eggs.jpeg',
      vegetablequantity: 0,
      totalprice: 0,
    },

    {
      vegetableid: 18,
      vegetablename: 'Brinjal',
      vegetablecost: 70,
      vegetableimg: './assets/images/brinjal.jpeg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 19,
      vegetablename: 'Lettuce',
      vegetablecost: 30,
      vegetableimg: './assets/images/lettuce.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
    {
      vegetableid: 20,
      vegetablename: 'Sorrel',
      vegetablecost: 40,
      vegetableimg: './assets/images/sorrel.jpg',
      vegetablequantity: 0,
      totalprice: 0,
    },
  ];
  getItems(): Mykitchen[] {
    return this.kitchen;
  }
  getItem(id: number): Mykitchen {
    const item = this.getItems().find((item) => item.vegetableid === id);
    return item;
  }
}