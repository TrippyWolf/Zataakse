import {AppData} from '../../data/data';

export function getCategoryName(categoryId: number): string {
  return (
    AppData.categories.find(c => c.id === categoryId)?.name ?? 'Subcategory'
  );
}
export function getSubcategoriesByCategoryId(
  categoryId: number,
): SubCategory[] {
  return AppData.subcategories.filter(
    (subcategory: SubCategory) => subcategory.categoryId === categoryId,
  );
}

export function getProductsByCategoryId(categoryId: number): Product[] {
  return AppData.products.filter(
    (product: any) => product.categoryId === categoryId,
  );
}

export function getCategorySectionData(): CategorySection[] {
  const sections: CategorySection[] = [];
  AppData.categories.forEach((category: Category) => {
    const subcategories: SubCategory[] = AppData.subcategories.filter(
      (subcategory: any) => subcategory.categoryId === category.id,
    );

    const sectionData: CategorySection = {
      title: category.name,
      data: [subcategories],
    };
    sections.push(sectionData);
  });
  return sections;
}

export function getTrendingSubcategories(): SubCategory[] {
  return getRandomSubarray(AppData.subcategories, 12);
}

function getRandomSubarray<T>(arr: T[], subarrayLength: number): T[] {
  subarrayLength = Math.min(arr.length, subarrayLength);
  // Shuffle the array
  const shuffledArray = arr
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value);

  // Slice the array to get the subarray of the desired length
  return shuffledArray.slice(0, subarrayLength);
}
export function getSubcategoriesForCarousel(
  categoryId: number,
): SubCategory[][] {
  let data = getSubcategoriesByCategoryId(categoryId);

  return splitArray(data, 8);
}

export function getSearchedProduct(searchKey: string) {
  if (searchKey.length === 0) {
    return [];
  }
  return AppData.products.filter((product: Product) =>
    product.name.toLowerCase().startsWith(searchKey.toLowerCase()),
  );
}

function splitArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
