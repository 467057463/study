export default {
  mounted(el, binding){
    console.log(el, binding)
    // var obersver = new IntersectionObserver((entries, observer)=>{
    //   entries.forEach(item => {
    //     let img = item.target;
    //     if(item.intersectionRatio > 0){
    //       img.src = binding.value;
    //       img.style.height = 'auto';
    //       observer.unobserve(img);
    //     }
    //   })
    // })
    // obersver.observe(el)
  }
}