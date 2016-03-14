var Wolves = require('../models/wolf.js')

var wolvesController = {};

wolvesController.show_all = function(req,res){
	Wolves.find({},function(error,wolves){
    res.render('index',{wolves: wolves})
  })
}

wolvesController.show_one = function(req,res){
	Wolves.findOne({_id: req.params.id}, function(err, wolf){
    res.render('show', {wolf: wolf})
  })
}

wolvesController.new_wolf = function(req,res){
	res.render('new')
}

wolvesController.post_new_wolf = function(req,res){
 	wolves = new Wolves({
    name: req.body.name,
    color: req.body.color,
    size: req.body.size
  })
  wolves.save(function(err){
    if(err){
    } else {
      res.redirect('/')
    }
  })
}

wolvesController.edit_wolf = function(req,res){
  Wolves.findOne({_id: req.params.id}, function(err,wolf){
    res.render('edit', {wolf: wolf})
  })
}

wolvesController.post_edit = function(req,res){
	Wolves.update({_id: req.params.id}, {name: req.body.name, color: req.body.color, size: req.body.size}, function(err,wolf){
    res.redirect('/')
  })
}

wolvesController.delete_wolf = function(req,res){
	Wolves.remove({_id: req.params.id}, function(err,wolf){
    res.redirect('/')
 	})
}

module.exports = wolvesController