var me = {
  name: "Josh Barber",
  location: "Orem, UT",
  occupations: ['Car sales', 'Finance Manager', 'Real Estate Agent', 'Web Developer'],
  hobbies: [{
    name: 'gaming',
    type: 'current'
  }, {
    name: 'outdoors',
    type: 'current'
  }, {
    name: 'cars',
    type: 'past'
  },{
    name: 'sports',
    type: 'current'
  }, {
    name: 'coding',
    type: 'newest'
  }]
};

module.exports = {
  getName: function (req, res, next) {
    res.status(200).json({name: me.name})
  },
  getLocation: function(req, res, next) {
    res.status(200).json({location: me.location})
  },
  getOccupations: function(req, res, next) {
    if (req.query.order === 'desc') {
      res.status(200).json({occupations: me.occupations.sort().reverse()})
    }
    else if( req.query.order === 'asc') {
      res.status(200).json({occpuations: me.occupations.sort()})
    }
    else {
      res.status(200).json({occupations: me.occupations})
    }
  },
  getLastOccupation: function(req, res, next) {
    res.status(200).json({LatestOccupation: me.occupations[me.occupations.length - 1]})
  },
  getHobbies: function(req, res, next) {
    res.status(200).json({hobbies: me.hobbies})
  },
  getHobbiesType: function(req, res, next) {
    var array = [];
    for (var i = 0; i < me.hobbies.length; i++) {
      for (x in me.hobbies[i]) {
          if (me.hobbies[i][x] === req.params.type) {
            array.push(me.hobbies[i].name)
        }
      }
    }
  }
}
