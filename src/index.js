const express=require('express');
require('./db/mongoose');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument=YAML.load('src/swagger.yaml');
const layoutRouter=require('./routers/layout');
const mapperRouter=require('./routers/mapper');
const testinputRouter=require('./routers/testinput');
const testoutputRouter=require('./routers/testoutput');




const app=express();

const port=process.env.PORT||3000;


app.use(express.json());
app.use(layoutRouter);
app.use(mapperRouter);
app.use(testinputRouter);
app.use(testoutputRouter);


//API Documentation
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.listen(port,()=>{
    console.log('Server is up on port  '+port);
});



// start mongodb locally 
//D:\mongoDb\bin\mongod.exe --dbpath D:\mongoDbData


//Sample Request String:  http://localhost:3000/fixedfilemap?fld=inpfld2&key=inpFld5&keyval=689208
//https://file-validator-filesystem.herokuapp.com/fixedfilemap?fld=inpfld2&key=inpFld5&keyval=689208

// D:\workspace_NJ_ANG_EXT\file-validator-app>heroku create ardeb-file-validator-app
// Creating ⬢ ardeb-file-validator-app... done
// https://ardeb-file-validator-app.herokuapp.com/ | https://git.heroku.com/ardeb-file-validator-app.git

// D:\workspace_NJ_ANG_EXT\file-validator-app>

//heroku git:remote -a ardeb-file-validator-app
//git push heroku master
