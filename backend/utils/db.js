const Character = require("../models/characterModel");

async function checkSlugUniqueness(slug) {
  // Use Mongoose to query the database and check if the slug already exists
  const character = await Character.findOne({ slug });

  // If no user is found with the given slug, it means the slug is unique
  return !character;
}

function generateUniqueIdForSlug() {
  // Your logic to generate a unique identifier (e.g., timestamp, random string, etc.)
  return Date.now().toString(36);
}

module.exports = {
  checkSlugUniqueness,
  generateUniqueIdForSlug,
};
