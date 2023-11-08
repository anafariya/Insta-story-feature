var arr= [
    {
        dp:"ana pic.jpg",story:"https://plus.unsplash.com/premium_photo-1698952282280-c1fb6443092c?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"ana pic 1.jpg",story:"https://images.unsplash.com/photo-1699099259299-ef7ec1174f64?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"ana pic 4.jpg",story:"https://plus.unsplash.com/premium_photo-1698511868315-fae2de157059?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"ana pic 3.jpg",story:"https://images.unsplash.com/photo-1699183926113-4737b1c276ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"ana pic 8.jpg",story:"https://images.unsplash.com/photo-1699111386434-5573b25c6cb4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
 ]
var storiyaan=document.querySelector("#storiyaan")
 var clutter = ""
 arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">

</div>`
 })

storiyaan.innerHTML = clutter

storiyaan.addEventListener("click", function(dets){

    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"

    },3000)
});