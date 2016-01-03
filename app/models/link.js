var crypto = require('crypto');
var mongoose = require('mongoose');

var linkSchema = mongoose.Schema({
  code: String,
  url: String,
  title: String,
  base_url: String,
  visits: Number
});

linkSchema.methods.hash = function(model, attrs, options) {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
};

module.exports = mongoose.model('Link', linkSchema);

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function(){
//     this.on('creating', function(model, attrs, options){
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// module.exports = Link;