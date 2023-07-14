
const seedEventDB = require('./events-seeds');
const seedSurfSessionDB = require('./surf-session-seeds');

//* DB Connection
const mongodb = require('../mongoConnection');

// const sequelize = require('../sqlConnection');

const seedAll = async () => {
  // await sequelize.sync({ force: true });
  // console.log('\n\x1b[43m ~~~ DATABASE SYNCED ~~~ \x1b[0m\n');

  await seedEventDB();
  console.log('\n\x1b[43m ~~~ EVENTS SEEDED ~~~ \x1b[0m\n');

  // await seedSurfSessionDB();
  // console.log('\n\x1b[43m ~~~ SURF SESSIONS SEEDED~~~ \x1b[0m\n');

  return true;
};

//* Enable NPM seeding to call and force seed via ARGV
if (process.argv[2]) {

  console.log("ARGV = " + process.argv[2].substring(1))

  if (process.argv[2].substring(1) === 'true') {
    seedAll();
  }

}

const seedMain = async() => {
  await seedAll();
  process.exit(0);
}

seedMain();

module.exports = seedAll;

//!========================= EOF =========================