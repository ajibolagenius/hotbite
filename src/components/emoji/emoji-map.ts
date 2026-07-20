import burrito from "@/assets/emojis/burrito.png";
import cheeseWedge from "@/assets/emojis/cheese-wedge.png";
import crescentMoon from "@/assets/emojis/crescent-moon.png";
import cutOfMeat from "@/assets/emojis/cut-of-meat.png";
import droolingFace from "@/assets/emojis/drooling-face.png";
import faceSavoringFood from "@/assets/emojis/face-savoring-food.png";
import fire from "@/assets/emojis/fire.png";
import frenchFries from "@/assets/emojis/french-fries.png";
import hamburger from "@/assets/emojis/hamburger.png";
import heartOnFire from "@/assets/emojis/heart-on-fire.png";
import highVoltage from "@/assets/emojis/high-voltage.png";
import hotBeverage from "@/assets/emojis/hot-beverage.png";
import hotDog from "@/assets/emojis/hot-dog.png";
import hotPepper from "@/assets/emojis/hot-pepper.png";
import leafyGreen from "@/assets/emojis/leafy-green.png";
import meatOnBone from "@/assets/emojis/meat-on-bone.png";
import motorScooter from "@/assets/emojis/motor-scooter.png";
import pinchedFingers from "@/assets/emojis/pinched-fingers.png";
import pizza from "@/assets/emojis/pizza.png";
import poultryLeg from "@/assets/emojis/poultry-leg.png";
import purpleHeart from "@/assets/emojis/purple-heart.png";
import raisingHands from "@/assets/emojis/raising-hands.png";
import redHeart from "@/assets/emojis/red-heart.png";
import rocket from "@/assets/emojis/rocket.png";
import star from "@/assets/emojis/star.png";
import taco from "@/assets/emojis/taco.png";
import takeoutBox from "@/assets/emojis/takeout-box.png";
import wearyCat from "@/assets/emojis/weary-cat.png";

export const emojiMap = {
  burrito,
  "cheese-wedge": cheeseWedge,
  "crescent-moon": crescentMoon,
  "cut-of-meat": cutOfMeat,
  "drooling-face": droolingFace,
  "face-savoring-food": faceSavoringFood,
  fire,
  "french-fries": frenchFries,
  hamburger,
  "heart-on-fire": heartOnFire,
  "high-voltage": highVoltage,
  "hot-beverage": hotBeverage,
  "hot-dog": hotDog,
  "hot-pepper": hotPepper,
  "leafy-green": leafyGreen,
  "meat-on-bone": meatOnBone,
  "motor-scooter": motorScooter,
  "pinched-fingers": pinchedFingers,
  pizza,
  "poultry-leg": poultryLeg,
  "purple-heart": purpleHeart,
  "raising-hands": raisingHands,
  "red-heart": redHeart,
  rocket,
  star,
  taco,
  "takeout-box": takeoutBox,
  "weary-cat": wearyCat,
} as const;

export type EmojiName = keyof typeof emojiMap;
