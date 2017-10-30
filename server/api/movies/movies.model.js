'use strict';

import mongoose from 'mongoose';

var MoviesSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Movies', MoviesSchema);
