import Reg from '../models/RegModel.js'

const Delete = (req,res)=>{
  console.log(req.params)
    Reg.findOneAndRemove({_id:req.params.idd}).then((b) => {
        console.log(b);
        // const emp =await Emp.find();
        
        res.render('delete')
      })
      .catch(err => {     
        console.error(err)
      });
}
export default Delete