import Tiger from '../models/RegModel.js'

 const List = async (req,res)=>{
  Tiger.find({}).then(e=>{
    // console.log(e)
    res.render('AthletesList',{list:e})
  })
  
}
export default List                      