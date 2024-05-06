window.onload = function () { 
  //
  const paths = document.querySelectorAll('.svg-text path')
  paths.forEach((path,index) => {
    let len = path.getTotalLength()
    console.log(index+1,len)
  })
}