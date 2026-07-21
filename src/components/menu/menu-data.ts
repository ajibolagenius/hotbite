export interface MenuItem {
  name: string;
  price: string;
  spicy?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const leftColumn: MenuCategory[] = [
  {
    title: "Pizza",
    items: [
      { name: "Pepperoni", price: "$12.00", spicy: true },
      { name: "Margherita", price: "$11.75" },
      { name: "BBQ Chicken", price: "$14.25" },
      { name: "Four Cheese", price: "$13.00" },
      { name: "Spicy Salami", price: "$15.50", spicy: true },
      { name: "Truffle Mushroom", price: "$16.00" },
      { name: "Veggie", price: "$13.00" },
    ],
  },
  {
    title: "Burgers",
    items: [
      { name: "Classic", price: "$10.50" },
      { name: "Double Cheese", price: "$13.00" },
      { name: "Smash", price: "$13.75" },
      { name: "BBQ Bacon", price: "$14.00" },
      { name: "Crispy Chicken", price: "$12.00", spicy: true },
    ],
  },
  {
    title: "Hot Dogs",
    items: [
      { name: "Classic", price: "$7.25" },
      { name: "Chili Cheese", price: "$8.25", spicy: true },
      { name: "Bacon Cheese", price: "$11.00" },
    ],
  },
  {
    title: "Wraps",
    items: [
      { name: "Chicken", price: "$8.50" },
      { name: "Caesar", price: "$11.25" },
      { name: "Spicy Crispy", price: "$11.00", spicy: true },
      { name: "Garlic Chicken", price: "$12.50" },
    ],
  },
];

export const rightColumnTop: MenuCategory[] = [
  {
    title: "Wings",
    items: [
      { name: "Buffalo", price: "$12.00", spicy: true },
      { name: "BBQ", price: "$11.00" },
      { name: "Honey Glazed", price: "$14.50" },
      { name: "Hot Honey", price: "$14.00", spicy: true },
      { name: "Lemon Pepper", price: "$13.00" },
    ],
  },
  {
    title: "Rings",
    items: [
      { name: "Onion", price: "$4.25" },
      { name: "Jalapeño", price: "$9.00", spicy: true },
      { name: "Crispy", price: "$7.75" },
    ],
  },
];

export const rightColumnBottom: MenuCategory[] = [
  {
    title: "Drinks",
    items: [
      { name: "Cola", price: "$2.25" },
      { name: "Lemonade", price: "$3.00" },
      { name: "Iced Tea", price: "$3.75" },
      { name: "Orange Soda", price: "$2.00" },
      { name: "Milkshake", price: "$5.50" },
      { name: "Fresh Mojito", price: "$4.00" },
      { name: "Cold Brew", price: "$2.00" },
    ],
  },
];

export const promo = {
  dates: "Jun 15 – Jun 18",
  title: "Wrap combo with fries for only $15",
  cta: "Find Us",
};
