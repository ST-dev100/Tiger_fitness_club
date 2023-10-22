import express from 'express';
// import easyinvoice from 'easyinvoice';
import PDFDocument from'pdfkit';
import fs from 'fs'
import Tiger from '../models/RegModel.js';
import Register from '../controllers/Registration.js';
import CheckAutho from '../controllers/CheckAuth.js';

const router = express.Router();     

router.get('/reg',CheckAutho,Register)   
  
//   const upload = multer({ storage: storage })
router.post('/reg',async function (req, res) {

  
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    const Tg = new Tiger({Name:req.body.name,
    image:req.file.originalname,phone:req.body.phone,email:req.body.email,info:req.body.comment,
    Start:req.body.date,End:req.body.End
    })
    Tg.save()   
    .then(async(docc) => {
      console.log(docc)   

      
    
      const doc = new PDFDocument();

      // Pipe its output somewhere, like to a file or HTTP response
      // See below for browser usage
      doc.pipe(fs.createWriteStream('F:/cccc/Tiger_Fitness_Club/uploads/'+docc.Name+'output.pdf'));
      
      // Embed a font, set the font size, and render some text
      doc
      .fontSize(25)
      .text(docc.email +' '+ docc.Name+' '+docc.Start+' '+ docc.End, 100, 100);
      
      // Add an image, constrain it to a given size, and center it vertically and horizontally
      doc.image('F:/cccc/Tiger_Fitness_Club/uploads/rift.png', {   
        fit: [250, 300],
        align: 'center',
        valign: 'center'
      });
      
      
      // Add another page

      
      // Apply some transforms and render an SVG path with the 'even-odd' fill rule
      doc
        .scale(0.6)
        .translate(470, -380)
        .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
        .fill('red', 'even-odd')
        .restore();
      
      // Add some text with annotations
     
      doc.end();

      const path = docc.Name+'output.pdf'
      
    res.render('invoice',{path})


    })
    .catch(err => {
      console.error(err)
  })  
    // console.log(req.file, req.body) 
    // res.json(req.body)  
 });
export default router