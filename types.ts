
export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  category: 'Entrees' | 'Sides' | 'Desserts' | 'Drinks';
}

export interface CateringItem {
  name: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
