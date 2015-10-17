'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var goalZoneExperienceTable = {
  	'weight loss' : [0, 1, 3, 4, 3, 2],
  	'aerobic fitness' : [0, 1, 3, 4, 4, 3],
  	'anaerobic fitness' : [0, 0, 0, 1, 3, 4]
  };

var PlayerSchema = new Schema({
  
  health: {type: Number, default: 100, min: 0, max: 100},
  goal: {type: String, default: 'aerobic fitness', required: true},
  experiencePer1000Steps: {type: Number, default: 0.6},
  healthHealedForFood: [{ 
		healthHealed: {type: Number, required: true},
	    foodType: {type: String, required: true} 
	}],
  
  username: {
    type: String,
    default: '',
    trim: true,
    unique: true,
    required: 'username cannot be blank'
  },
  name: {
    type: String,
    trim: true
  },
  exp: [{ 
    date: {
      type: Date,
      default: Date.now
    },
    value: {
      type: Number
    },
  }],
}, 
{
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


//commented out for now because jslint hates functions in loops
// for(var i = 1; i <= 5; i++){
// 	PlayerSchema.virtual('experiencePerHRZone' + i + 'Hour').get(function() {
// 		var that = this;
// 		return goalZoneExperienceTable[that.goal][i];
// 	});
// }

PlayerSchema.virtual('experience').get(function() {
  var experience = 0;
  for(var i=0; i<this.exp.length; i++) {
    experience+=this.exp[i].value;
  }
  return experience;
});

mongoose.model('Player', PlayerSchema);
