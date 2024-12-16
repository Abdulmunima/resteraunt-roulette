export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  hours: {
    [day: string]: string;
  };
  photos: string[];
  menuLink: string;
}

export interface UserPreferences {
  location: string;
  cuisinePreferences: string[];
  priceRange: string;
  dietaryRestrictions: string[];
  excludeVisited: boolean;
  minRating: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
  favoriteRestaurants: string[];
  visitedRestaurants: string[];
}

