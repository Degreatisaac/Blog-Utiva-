const express =  require('express');
const router = express.Router();
const Post = require('../models/post')

//Routes



router.get('', async (req, res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
    }

    try {
        const data = await Post.find();
        res.render('index', { locals, data });
    } catch (error) {
        console.log(error);
    }

});



function insertPostData () {
    Post.insertMany([
            {
            title:"Building a Blog",
            body: "This is the body test"
            },

            {
                title:"Building a Blog",
                body: "This is the body test"
                },

                {
                    title:"Building a Blog",
                    body: "This is the body test"
                    },
                    {
                        title:"Building a Blog",
                        body: "This is the body test"
                        }
    ])
}

insertPostData();


router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router