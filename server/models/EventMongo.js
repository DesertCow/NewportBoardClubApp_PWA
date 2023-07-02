
const { Schema, model } = require('mongoose')


const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
    unique: true,
    // match: [/.+@.+\..+/, '👻👻 Email Address is Invalid! 👻👻'],
  },
  eventSlogan: {
    type: String,
    // required: true,
    trim: true,
  },
  eventDate: {
    // type: Date,
    type: String,
    required: true,
    trim: true,
  },
  eventLength: {
    type: String,
    required: true,
    trim: true,
  },
  eventDescription: {
    type: String,
    required: true,
    trim: true,
  },
  eventPhotoURL: {
    type: String,
    required: true,
    trim: true,
  },
  eventCurrent: {
    type: Boolean,
    required: true,
    trim: true,
  },
});

// eventSchema.pre('save', async function (next) {
//   console.log('New User Triggered Via Middleware during MongoDB Create');
//   // if (this.isNew || this.isModified('password')) {
//   // if (this.isNew) {
//   //   const saltRounds = 10;
//   //   this.password = await bcrypt.hash(this.password, saltRounds);
//   // }

//   next();
// });


// const Event = model('Event', eventSchema, "events");
const Event = model('Event', eventSchema, "events");

module.exports = Event;


// !========================= EOF =========================