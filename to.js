function addTask() {
   
    const newtask=document.createElement('li')
    
    const a=document.getElementById('taskolist')
   
    
    
    a.appendChild(newtask)
    newtask.textContent=document.getElementById('inputTask').value
    document.getElementById('inputTask').value=""
    deleteTask(newtask)
    change(deletebtn)
    

}
function reset(){

    document.getElementById('taskolist').innerHTML=""

}
function deleteTask(newtask){
    const deletebtn=document.createElement('button')
    deletebtn.textContent="Delete"
    deletebtn.style.backgroundColor="red"
    deletebtn.style.color="white"
    newtask.appendChild(deletebtn)
    deletebtn.onclick=function(){
        newtask.remove()
    }
   

}
function change(deletebtn){
    const c=document.getElementsByName("deletebtn")
c.addEventListener('click', () => {
    c.style.backgroundColor="red"
    c.style.color="green"
});
}