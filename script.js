
function insert(num){
  document.querySelector(".textview").value += num;
  }
  
  function equals(){
    let x = document.querySelector(".textview").value;
    let y = eval(x)
    document.querySelector(".textview").value = y
      
  }
  
  function clean(){
    document.querySelector(".textview").value = ""
  }
  
  function back(){
    document.querySelector(".textview").value = document.querySelector(".textview").value.slice(0,-1);
  }