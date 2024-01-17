const { db } = require('@vercel/postgres');
const {
    users,
    products
} = require('../app/lib/placeholder-data')
const bcrypt = require('bcrypt')

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
          CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
          );
        `;
    
        console.log(`Created "users" table`);
    
        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
          users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return client.sql`
            INSERT INTO users (id, name, email, password)
            VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
          `;
          }),
        );
    
        console.log(`Seeded ${insertedUsers.length} users`);
    
        return {
          createTable,
          users: insertedUsers,
        };
      } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
      }
}

async function seedProducts(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        model VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL
        );
    `;

    console.log(`Create "products" table`);

    const insertedProducts = await Promise.all(
        products.map(
            (products) => client.sql`
            INSERT INTO products (id, type, model, image)
            VALUES (${products.id}, ${products.type}, ${products.model}, ${products.image})
            ON CONFLICT (id) DO NOTHING;
            `,
        ),
    );
    
    console.log(`Seeded ${insertedProducts.length} products`);

    return {
        createTable,
        products: insertedProducts,
    };
    } catch (error) {
        console.error('Error seeding products:', error);
        throw error;
    }
}