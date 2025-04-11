const colors = require('colors')

// console.log('This is server'.bgCyan);

const express = require('express')


const app = express();

 port = 6000;

//to run with nodemon
 app.use(express.json())

//get
 app.get('/api',(req,res)=>{
    // console.log(req.params);
    
    res.status(202).send({message:' server running successfully', great:"Hello user"})
 })

//post
 app.post('/api',(req,res)=>{
    console.log(req.body);
   //  {name:"batch 42"}
    res.status(202).send({message:'This is post', great:"hii there"})
 })

//delete
 app.delete('/api/:ID',(req,res)=>{
    console.log(req.params);
    res.status(202).send("user request deleted")
 })

 //put
 app.put('/api/:ID',(req,res)=>{
   console.log(req.params);
   res.status(200).send({message:'This is post for api', great:"hii there"})
})

//about
app.get('/about',(req,res)=>{
   res.status(200).send("This is about page");
})

//contact
app.get('/contact',(req,res)=>{
   res.status(200).send("This is about page with details");
})


const products = [{id:1, name:"iphoen15", category:"electronics", price:30000, instock:true}
      ,{id:2, name:"iphone16", category:"electronics", price:45000, instock:true},
]

app.get('/getAllProducts',(req,res)=>{
   res.status(202).send({products:products, success:true});
})


app.get('/getProductByID/:ID',(req,res)=>{
   const id = req.params.ID;
   const prod = products.filter(p=> p.id  == id  )
   res.status(200).send({products:prod, success:true})
})


   app.post('/addProduct',(req,res)=>{
      console.log("*****", req.body,"********");
      const newProd = {id:Date.now(), 
          name:req.body.name, 
          category:req.body.category,
          price:req.body.price,
          inStock:true
      }
      products.push(newProd);
      res.send({message:"Product added successfully",success:true})
  
  })

app.delete('/deleteProduct/:ID',(req,res)=>{
   const ID = req.params.ID
   index = products.findIndex(p => p.id == ID)
    if(index == -1){
        res.status(200).send({message:"Product not found", success:false})
    }
    products.splice(index,1)
    res.status(200).send({message:"product deleted", success:true})
   
})

// app.put('/')


app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`.rainbow)

})

//http://localhost:6000/api

