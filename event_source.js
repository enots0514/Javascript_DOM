//EX6- Trigger
// dispatchEvent(e)
window.addEventListener("load", function(){
    const section6 = document.querySelector("#section6");
    const fileBtn =  section6.querySelector(".file-button");
    const fileTriggerBtn =  section6.querySelector(".file-trigger-button");
    
    fileTriggerBtn.addEventListener('click', function(){
       
        let event = new MouseEvent('click', {
                  'view' : window,
                  'bubbles' : true,
                  'cancelable' : true
        }); 

        fileBtn.dispatchEvent(event);
    });



});
//EX5- 기본 동작 막기 이벤트 처리하기
// e.preventDefault()
window.addEventListener("load", function(){
    const section5 = document.querySelector("#section5");
    const tBody = section5.querySelector(".notice-list tbody");
    
    
    tBody.addEventListener('click', function(e){
       e.preventDefault();
       //a 태크의 기본 동작 막기
        const target = e.target;
      
       let tr = target.parentElement;
        //  for 공통부분을 위로 뺌

       if(target.nodeName != "A") return;

       if(target.classList.contains("sel-button")){
        //   let tr = target.parentElement.parentElement;
        //   input 부모의 부모인 tr를 선택하는 현명한 방법으로 대체  
      
        for(; tr.nodeName != "TR"; tr = tr.parentElement);
             tr.style.background = "yellow";
         }
             
       });
}); 




//EX4- 서로 다른 기능의 여러 버튼 이벤트 처리하기
//target.classList.contains("class")
// for( let tr = target.parentElement; tr.nodeName != "TR"; tr = tr.parentElement)
window.addEventListener("load", function(){
    const section4 = document.querySelector("#section4");
    const tBody = section4.querySelector(".notice-list tbody");
    
    
    tBody.addEventListener('click', function(e){
       const target = e.target;
      
       let tr = target.parentElement;
        //  for 공통부분을 위로 뺌

       if(target.nodeName != "INPUT") return;

       if(target.classList.contains("sel-button")){
        //   let tr = target.parentElement.parentElement;
        //   input 부모의 부모인 tr를 선택하는 현명한 방법으로 대체  
      
        for(; tr.nodeName != "TR"; tr = tr.parentElement);
             tr.style.background = "yellow";
         
       }else if(target.classList.contains("edit-button")){
      
        for(; tr.nodeName != "TR"; tr = tr.parentElement);
             tr.children[0].textContent = 0;
                  

       }else if(target.classList.contains("del-button")){
       
        for(; tr.nodeName != "TR"; tr = tr.parentElement);
             tr.remove();
       }
    });
}); 



// Ex3-이벤트 버블링 멈추기 e.stopPropagation();
window.addEventListener("load", function(){

   const section3 = document.querySelector("#section3");
    
    const imgList = section3.querySelector(".img-list"); 
    const addButton = section3.querySelector(".add-button");
    const currentImg = section3.querySelector(".current-img");
    
    imgList.onclick = function(e){
        // console.log("imgList");
        if(e.target.nodeName != "IMG" ) return;
        currentImg.src = e.target.src;
    };

    addButton.onclick = function(e){
        // console.log("addButton");
        e.stopPropagation();
        // 버블링 막기 (이벤트 핸들러가 올라가지 못하게 하기)   
        const img = document.createElement('img');
        img.src = "images/img4.jpg";
        img.style = "height:200px;"
        // enots 추가
         currentImg.after(img);
        //  아래와 동일한 효과 (enots 수정)
        // currentImg.insertAdjacentElement("afterend", img);
    };

}); 





//Ex2-이벤트 버블링을 이용해 사용자 이벤트 처리하기:event Bubbling
// 1번 예제 업그레이드 버전
window.addEventListener("load", function(){

    const section2 = document.querySelector("#section2");
    const imgList = section2.querySelector(".img-list"); 
   // 1번 예제와 달리 이미지가 아닌 부모를 불러온다
   
    const currentImg = section2.querySelector(".current-img");
    
    imgList.addEventListener('click', function(e){
      
      if(e.target.nodeName != "IMG" ) return;
      currentImg.src = e.target.src;
       
      //  console.log(e.target.nodeName);
      // 이미지 말고 빈 공백 즉, 부모 영역 모두에 이벤트 핸들러가 작동한다.
      // 따라서 IMG 노드만 이벤트 핸들러가 작동하도록 코딩함   
      // nodeName = "IMG" 주의, IMG는 대문자, 
    })
}); 


//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
    const section0 = document.querySelector("#section1-1");
    const tBody = section0.querySelector("tbody");
    const delBtn = section0.querySelectorAll(".del-button");
    
    tBody.addEventListener('click', function(e){
      //console.log(e.target.nodeName);
      
    if(e.target.nodeName != "INPUT") return;
        
    e.target.parentElement.parentElement.remove();

    })


    /* 이걸 예제2의 버블링 활용해 업그레이드한 게 위에 코드
    for(i=0; i<delBtn.length; i++)
    delBtn[i].addEventListener('click', function(e){
    //   console.log(e.target);
       console.log(e.target.parentElement.parentElement);
       e.target.parentElement.parentElement.remove();
    })
    */

}); 



//Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load", function(){

    const section1 = document.querySelector("#section1");
    
    const imgs = section1.querySelectorAll(".img");
    const currentImg = section1.querySelector(".current-img");
   

    // 이 방법은 작동은 되나 쓸데 없이 복사되어 메모리를 
    // 많이 소모하게 된다
    // 따라서 이벤트 버블링을 이용해 코드 수정이 필요하다.
    for(let i=0; i<imgs.length; i++){
    imgs[i].addEventListener('click', function(e){
        // console.log(e.target); 
        // console.log(e.currentTarget);
        currentImg.src = e.target.src;
     });
    }
   
}); 