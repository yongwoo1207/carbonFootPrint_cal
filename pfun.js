var target = document.querySelectorAll('.btn_open');  // 버튼
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');  
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){  // 버튼 갯수만큼 반복문 돌린다.
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');  //여기서 this는 버튼을 의미한다. 버튼의 href를 가지고 오는 것이다.
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}