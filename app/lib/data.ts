import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { User, Product } from "./definitions";

export async function getUser(email: string) {
  noStore();
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function getProducts(model: string, type: string) {
  noStore();
  try {
    const productsModel =
      await sql<Product>`SELECT products.model FROM products`;
    return productsModel;
  } catch (error) {
    console.error("Database Error:", error);
  }
}
