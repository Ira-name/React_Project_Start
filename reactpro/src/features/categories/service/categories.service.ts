import { GenericAbortSignal } from "axios";
import { HttpClient } from "../../../utils/http/HttpClient";

export interface Category {
  slug: string;
  name: string;
  url: string;
}
export class CategoryService {
  private httpClient: HttpClient;

  constructor(signal?: GenericAbortSignal) {
    this.httpClient = new HttpClient({
      baseURL: "https://dummyjson.com",
      signal,
    });
  }

  public async getCategories(): Promise<Category[]> {
    return await this.httpClient.get<Category[]>("/products/categories");
  }
  public async getCategoryList(): Promise<Category[]> {
    return await this.httpClient.get<Category[]>("/products/category-list");
  }
}
