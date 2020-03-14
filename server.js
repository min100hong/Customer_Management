const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/api/hello', (req, res) => {
//     res.send({message: 'Hello Express !!!'});
// })

app.use('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/2',
            'name': '민백홍',
            'birthday': '690121',
            'gender': '남자',
            'job': '프로그래머'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '조수은',
            'birthday': '960121',
            'gender': '여자',
            'job': '주부'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '민수빈',
            'birthday': '960121',
            'gender': '여자',
            'job': '메이크업아티스트'
        },
        {
            'id': 4,
            'image': 'https://placeimg.com/64/64/5',
            'name': '민은빈',
            'birthday': '960121',
            'gender': '여자',
            'job': '대학생'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));