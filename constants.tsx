
import { MenuItem, CateringItem } from './types';

export const BRAND_NAME = "Fish Eye Grill";
export const TAGLINE = "Your go-to spot for steaks, seafood, and Southern hospitality.";
export const ADDRESS = "10001 GA-23 S, Girard, Georgia 30426, USA";
export const PHONE = "(478) 569-9727";

export const MENU_ITEMS: MenuItem[] = [
  { name: "Ribeye Steak", description: "Juicy, hand-cut ribeye grilled to perfection.", category: "Entrees" },
  { name: "Catfish", description: "Crispy fried or seasoned grilled local catfish.", category: "Entrees" },
  { name: "BBQ Pork Ribs", description: "Slow-smoked, fall-off-the-bone ribs.", category: "Entrees" },
  { name: "Fried Chicken", description: "Classic Southern golden fried chicken.", category: "Entrees" },
  { name: "Meatloaf", description: "Homemade savory meatloaf with a special glaze.", category: "Entrees" },
  { name: "Collard Greens", description: "Slow-simmered with smoked turkey or ham.", category: "Sides" },
  { name: "Mac ’n’ Cheese", description: "Extra cheesy, baked Southern style.", category: "Sides" },
  { name: "Sweet Potato Casserole", description: "With a toasted pecan topping.", category: "Sides" },
  { name: "Banana Pudding", description: "Our famous homemade vanilla wafer classic.", category: "Desserts" },
  { name: "Butter Cake", description: "Rich, moist, and absolutely decadent.", category: "Desserts" },
];

export const CATERING_DATA: CateringItem[] = [
  { name: "Pulled Pork", category: "Meats" },
  { name: "Prime Rib", category: "Meats" },
  { name: "Low Country Boil", category: "Specialties" },
  { name: "Cobb Pasta with Cajun Chicken", category: "Pastas" },
  { name: "Sweet Potato Souffle", category: "Sides" },
  { name: "Eclair Cake", category: "Desserts" },
];

export const BUSINESS_HOURS = [
  { day: "Thursday - Friday", hours: "4:30 PM – 9:00 PM" },
  { day: "Saturday", hours: "11:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "11:00 AM – 2:00 PM (Limited)" },
  { day: "Mon - Wed", hours: "Closed" },
];
