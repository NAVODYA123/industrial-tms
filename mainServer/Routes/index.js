module.exports = function (app) {
  const config = require('../config.js');
  const mysql = require('mysql');
  const Sequelize = require('sequelize');
  const mongoose = require('mongoose');
  const db = {};

  const sequelize = new Sequelize(config.mysql.options)
  sequelize.authenticate()
    .then(() => {
      console.log('Successfully connected to MYSQL')
    })
    .catch((err) => {
      console.log('Error connecting to mysql', err)
      process.exit(1);
    })

config.mysql.client = sequelize;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

  //create user
  require('../Controller/Login/login')(app, Sequelize, sequelize, db)
  require('../Controller/StdReg/StdRegCont')(app, Sequelize, sequelize, db)

  //require formI5 controller
  require('./supervisor_formI5_route/supervisor_formI5_route')(app)
  require('../Controller/Supervisor_form_i5/I5STDSelection')(app, Sequelize, sequelize, db)

    //add companysupervisor
    require('../Controller/addSupervisors/addSupervisorsController')(app, Sequelize, sequelize, db)

   //allocate supervisor
    require('../Controller/AllocateSupervisor/allocateSuperviserController.js')(app, Sequelize, sequelize, db)



    //Connection to the mysql datatabase
    // const Op = Sequelize.Op;

  //IT16122192(rakshitha)employeeadd

  require('../Controller/studentsuperviser/studentsupervisercontrolerf1')(app, Sequelize, sequelize, db)
  require('../Controller/Diaryview/Diaryview')(app, Sequelize, sequelize, db)

  //create studemt first_form 1

  require('../Controller/stdfill/stdfilli-1')(app, Sequelize, sequelize, db)
  require('./form_i6/form_i6_route')(app)


  //Connection to the Mogodb
  
mongoose.connect('mongodb://root:1qaz2wsx@ds249942.mlab.com:49942/internship', (err) => {
  if (err) {
      console.log('Error connecting to mongodb')
  }
  console.log('MongoDB connection successfull')
})
}