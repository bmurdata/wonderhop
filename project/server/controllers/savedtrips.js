import { pool } from '../config/database.js'

const getsavedTrips= async (req,res) =>{
    try{
        const results=await pool.query('SELECT * FROM savedtrips ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch(err){
        res.status(409).json({ error:err.message})
    }
}
const getsavedTrip= async (req,res) =>{
    try{
        const id=parseInt(req.params.id)
        const results=await pool.query('SELECT * FROM savedtrips WHERE id= $1',[id])
        res.status(200).json(results.rows)
    }
    catch(err){
        res.status(409).json({ error:err.message})
    }
}

const createTrip = async (req,res)=> {
    try{
        console.log(req.body.title)
        const [title,body,user_id,status,created_at,price,budget,startdate,enddate]= [req.body.title,req.body.body,req.body.user_id,req.body.status,req.body.created_at,req.body.price,req.body.budget,req.body.startdate,req.body.enddate]
        console.log(title)
        const results=await pool.query('INSERT INTO savedtrips(title,body,user_id,status,created_at,price,budget,startdate,enddate) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) ',[title,body,user_id,status,created_at,price,budget,startdate,enddate])
        res.status(200).json(results.rows)
    }
    catch(err){
        console.log(err)
        res.status(409).json({ error:err.message})
    }
}
const deleteTrip=async(req,res)=>{
    try{
        const id=parseInt(req.params.id)
        const results=await pool.query('DELETE FROM savedtrips WHERE id= $1',[id])
        res.status(200).json(results.rows)
    }
    catch(err){
        res.status(409).json({ error:err.message})
    }
}


export default{ getsavedTrips, getsavedTrip, createTrip,deleteTrip}