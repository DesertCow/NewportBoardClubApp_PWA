const seedCategories = require('./category-seeds');
const seedMenu = require('./food-item-seeds');


const sequelize = require('../sqlConnection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n\x1b[43m ~~~ DATABASE SYNCED ~~~ \x1b[0m\n');

  await seedCategories();
  console.log('\n\x1b[43m ~~~ CATEGORIES SEEDED ~~~ \x1b[0m\n');

  await seedMenu();
  console.log('\n\x1b[43m ~~~ MENU ITEMS SEEDED~~~ \x1b[0m\n');

  return true;
};

//* Enable NPM seeding to call and force seed via ARGV
if (process.argv[2]) {

  console.log("ARGV = " + process.argv[2].substring(1))

  if (process.argv[2].substring(1) === 'true') {
    seedAll();
  }

}

module.exports = seedAll;

//!========================= EOF =========================