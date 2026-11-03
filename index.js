import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve('view/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('view/login.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('view/about.html'));
});



app.use((req, res)=>{
     const abspath =path.resolve('view/404.html')
     res.status(404).sendFile(abspath)
})

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
});