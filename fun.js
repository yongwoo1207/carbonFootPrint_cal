 //팝업 창 띄우기
 var sol = document.getElementById("sol");
 var sol_btnID
 sol.addEventListener("click", function(){
    sol_btnID = this.getAttribute("href");
    document.querySelector(sol_btnID).style.display = 'block';
 })

 //팝업창 닫기
var close_pop_btn = document.getElementById("close_pop_btn");
close_pop_btn.addEventListener("click", function(){
    document.querySelector(sol_btnID).style.display = 'none';
})

//탄소 데이터
var base_data = [['호흡 24시간', 1000], ['핸드폰 소유', 84], ['핸드폰 미소유', 0], ['노트북 소유', 195], ['노트북 미소유', 0], ['플라스틱 생수', 248], ['수돗물', 0.34], 
['냉장고 소유', 554], ['냉장고 미소유', 0],]

var tr_data = [['버스', 27.6], ['택시', 210], ['승용차', 144], ['기차', 0.1], ['지하철', 1.5], ['전기킥보드', 130] ]

var food_data = [['백반', 1763], ['편의점 도시락', 800], ['커피', 550], ['맥주(캔)', 600], ['과자', 250], ['피자', 1970], ['치킨', 2100]]
var life_data = [['에어컨', 211], ['컴퓨터', 90], ['세탁', 791], ['헤어드라이기', 43] ]


//각종 변수 선언
day_total=0;  // 탄소 총합 변수



//기본값 함수
function base_change(str){
    for(let i=0; i<base_data.length ; i++){
        if (str == base_data[i][0]){
            document.getElementById("result_text").innerHTML += '<br>' + base_data[i][0] + "  :  " + base_data[i][1] + "g"
            day_total += base_data[i][1]
            document.getElementById("total_num").innerHTML = day_total
        }
    }
}
//교통함수
function tr_change(name, value){
    for(let i=0 ; i<tr_data.length ; i++){
        if (name == tr_data[i][0]){
            document.getElementById("result_text").innerHTML += '<br>' + tr_data[i][0] + "  :  " + (value * tr_data[i][1]) + "g" 
            day_total += tr_data[i][1] * value
            document.getElementById("total_num").innerHTML = day_total
        }
    }
}
//식음료 함수
function food_change(name, value){
    for(let i=0 ; i<food_data.length ; i++){
        if (name == food_data[i][0]){
            document.getElementById("result_text").innerHTML += '<br>' + food_data[i][0] + "  :  " + (value * food_data[i][1]) + "g" 
            day_total += food_data[i][1] * value
            document.getElementById("total_num").innerHTML = day_total
        }
    }
}
//생활 함수
function life_change(name, value){
    for(let i=0 ; i<life_data.length ; i++){
        if (name == life_data[i][0]){
            document.getElementById("result_text").innerHTML += '<br>' + life_data[i][0] + "  :  " + (value * life_data[i][1]) + "g" 
            day_total += life_data[i][1] * value
            document.getElementById("total_num").innerHTML = day_total
        }
    }
}


//그래프 생성
var datas = [day_total, 7200, 20000, 42400];
const total_chart = new Chart(document.getElementById("carbon_Chart"), {
    type: 'horizontalBar',
    data: {
      labels: ["나의 탄소발자국", "1인당 적정 탄소발자국", "세계 1인당 평균 탄소발자국", "한국인 1인당 평균 탄소발자국"],
      datasets: [
        {
          label: "탄소배출량 (g)",
          backgroundColor: ['rgba(255, 28, 28, 0.3)',
          'rgba(0, 255, 21, 0.3)',
          'rgba(51, 0, 255, 0.3)',
          'rgba(255, 11, 186, 0.3)'],
          data: datas
        }
      ]
    }
});


//그래프 데이터 업데이트
var select = document.querySelectorAll('select');

for(let i =0 ; i<select.length ; i++){
    select[i].addEventListener('change', function(){
        datas[0] = day_total;
        total_chart.update();
    })
}
