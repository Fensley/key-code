 
 window.addEventListener("keydown", event=>{
 const insert = document.getElementById("insert")
    insert.innerHTML = ` 
    <div class="key">
    ${event.key=== ' ' ? 'space' : event.key}
    <small>event.key</small>
   </div>
 
   <div class="key">
    ${event.keyCode}
   <small>event.keycode </small> 
   </div>


   <div class="key">
    ${event.code}
    <small>keycode</small>
   </div>
    `
})
