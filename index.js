import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/",async (req,res)=>{
   try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data
    res.render("index.ejs", {
        data : result,
    });
   }catch(error){
    console.error("Failed to make a request",error.message)
        res.render("index.ejs", {
            error: error.message,
        });
    
   }

})

app.post("/",(req,res)=>{
   
})


app.listen(port , () =>{
    console.log(`Server running on port ${port}`);
    
})