interface Category {
  id: number;
  name: string;
  image: string;
}

interface SubCategory extends Category {
  categoryId: number;
}

interface Product {
  id: number;
  name: string;
  price: string;
  unit: string;
  image: string;
  description: string;
  availability: boolean;
  subcategoryId: number;
}

interface AppDataState {
  categories: Category[];
  subcategories: SubCategory[];
  products: Product[];
}

interface CategorySection {
  title: string;
  data: SubCategory[][];
}
