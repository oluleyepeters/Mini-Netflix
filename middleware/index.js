// All the middleware comes here
var middlewareObj={};

middlewareObj.isloggedin=function (req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error','You need to be logged in to do that');
    res.redirect('/login')
}



middlewareObj.checkowner=function(req,res,next){
    if(req.isAuthenticated()){
        Favorite.findById(req.params.id, function(err,foundFavorites){
        if(err){
            req.flash('error','Design Not Found')
            res.redirect('/design')
        }else{
            if(founddesign.author.id.equals(req.user._id)){
               next();   
            }else{
                req.flash('error','You dont Have The permission')
                res.redirect('back')
            }
        }
    })     
    }else{
        req.flash('error','You need To Be Logged In To Do That')
        res.redirect('back')
    }
}


middlewareObj.checkownerc=function(req,res,next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err,foundcomment){
        if(err){
            req.flash('error','An Error Occurred')
            res.redirect('back')
        }else{
            if(foundcomment.author.id.equals(req.user._id)){
               next();   
            }else{
                req.flash('error','You Dont Have The Permission To Do That')
                res.redirect('back')
            }
        }
    })     
    }else{
        req.flash('error','You need To Be Logged In')
        res.redirect('back')
    }
}


module.exports=middlewareObj