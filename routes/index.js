module.exports = function Routes(app,Wolves){
  app.get('/', function(req,res){
    Wolves.find({},function(error,wolves){
      res.render('index',{wolves: wolves})
    })
  })

  app.get('/wolves/:id', function(req,res){
    Wolves.findOne({_id: req.params.id}, function(err, wolf){
      console.log(err)
      console.log(wolf)
      res.render('show', {wolf: wolf})
    })
  })

  app.get('/wolves/new', function(req,res){
    res.render('new')
  })

  app.post('/wolves', function(req,res){
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
  })

  app.get('/wolves/:id/edit', function (req,res){
    Wolves.findOne({_id: req.params.id}, function(err,wolf){
      res.render('edit', {wolf: wolf})
    })
  })

  app.post('/wolves/:id', function(req,res){
    Wolves.update({_id: req.params.id}, {name: req.body.name, color: req.body.color, size: req.body.size}, function(err,wolf){
      console.log(err)
      res.redirect('/')
    })
  })

  app.get('/wolves/:id/destroy', function(req,res){
    Wolves.remove({_id: req.params.id}, function(err,wolf){
      res.redirect('/')
    })
  })
}
