console.log("script running");
document.querySelector('.cross').style.display="none";
document.querySelector('.nav-icons').addEventListener('click', ()=>{
  document.querySelector('.sidebar').classList.toggle("sidebar-collpase");
  if(document.querySelector('.sidebar').classList.contains('sidebar-collpase')){
    document.querySelector('.ham').style.display="inline";
    document.querySelector('.cross').style.display="none";
  }else{
    document.querySelector('.ham').style.display="none";
    setTimeout(function () {
      document.querySelector('.cross').style.display="inline";
    }, 300);
  }
});
