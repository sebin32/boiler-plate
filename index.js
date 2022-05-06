const express = require('express') //express 모듈을 가져 옴.
const app = express() //function을 이용해서 app을 만듦
const port = 5000 // 5000번 port를 backserver로 둠



const mongoose = require('mongoose') 
mongoose.connect(`mongodb+srv://sebin32:getout2980@cluster0.nhxyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then( () =>console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get ('/', (req, res)=> res.send('Hello World!')) //express app을 넣은 후에 여기다가 '/' 디렉토리에 오면 hello world 출력

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))
//앱이 5000번에서 실행됨

//mongodb+srv://sebin32:<password>@cluster0.nhxyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

