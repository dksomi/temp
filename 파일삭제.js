async function clean(file){
    fs.unlink(file, function(err){
      if(err) {
        console.log("Error : ", err)
      }
    })
  }