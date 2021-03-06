module.exports = function (app, Sequelize, sequelize, db) {
    // const Op = Sequelize.Op;

    db.stddetable = require('../../Model/stdfilli-1')(sequelize, Sequelize)
    sequelize.sync();

    
    app.route('/studentform1')
        .post((req, res) => {
            

            if(req.body.studentID==""||req.body.studentID==undefined){
                res.send(JSON.stringify({
                    
                    'message': "student id is null"
                }))
            }
        
            else if(req.body.stdname==""||req.body.stdname==undefined){
                res.send(JSON.stringify({
                    
                    'message': "student name is null"
                }))
            }
            else if(req.body.address==""||req.body.address==undefined){
                res.send(JSON.stringify({
                    
                    'message': "address is null"
                }))
            }
            else if(req.body.email==""||req.body.email==undefined){
                res.send(JSON.stringify({
                    
                    'message': "email id is null"
                }))
            }
            else{
            db.stddetable.create({
                studentID:req.body.studentID,
                stdname: req.body.stdname,
                address:req.body.address,
                homephone:req.body.homephone,
                mobilephone:req.body.mobilephone,
                email:req.body.email,
                semester: req.body.semester,
                gpa:req.body.gpa,
                cgpa:req.body.cgpa
            }).then(stdusr => {

                res.send(JSON.stringify({
                    "record": stdusr,
                    'message': "Successfully created the user."
                }))
            })
        }
        
        })
    


}