const express=require('express');
const studentControler=require('../z-controller/studentC');

//start Router
const router=express.Router();

console.log('Router see-stdt.js is called and loaded See Student Detail Called');

router.get('/see-details',studentControler.getAllStudents);
router.post('/add-stdt',studentControler.addStudent);
router.all('/terminate-stdt',studentControler.terminateStdt);
router.all('/update-stdt',studentControler.updateStudent);
router.all('/single-stdt',studentControler.getSingleStudents);
router.all('/assign-interview',studentControler.addInterview);
router.all('/studentadd-render',studentControler.renderAddStudentPage);
module.exports=router;
