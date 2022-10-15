// const e = require('express')
const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs')

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
    // console.log("1."+req.url)
})
router.get('/blog',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
    res.render('blogHome',
        {blogs:blogs}
        );
    // console.log("2."+req.url)
})
router.get('/blogpost/:slug',(req,res)=>{
    myBlog = blogs.filter((element)=>{
        tm = req.params.slug;
        if(tm[0]===':')tm = tm.slice(1);
        return (element.slug == tm); 
    })
    res.render('blogPage',{
        title:myBlog[0].name,
        content:myBlog[0].content
    })
})

module.exports = router;