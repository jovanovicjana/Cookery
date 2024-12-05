import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("recipes.db");

// Funkcija za kreiranje tabele
export const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS recipes (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          ingredients TEXT NOT NULL,
          instructions TEXT NOT NULL,
          image TEXT
        );`
    );
  });
};

// Dodavanje recepta
export const addRecipe = (
  title,
  ingredients,
  instructions,
  image,
  callback
) => {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO recipes (title, ingredients, instructions, image) VALUES (?, ?, ?, ?);`,
      [title, JSON.stringify(ingredients), instructions, image],
      (_, result) => callback(result),
      (_, error) => console.error("Error inserting recipe:", error)
    );
  });
};

// Dohvatanje svih recepata
export const getRecipes = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM recipes;`,
      [],
      (_, { rows: { _array } }) => callback(_array),
      (_, error) => console.error("Error fetching recipes:", error)
    );
  });
};
