var keystone = require('keystone');

exports = module.exports = function(req, res){
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'govtjob';
  //load jobs
  view.query('govtjobs', keystone.list('Govtjob').model.find());
  //Render view
  view.render('govtjobs');
}
