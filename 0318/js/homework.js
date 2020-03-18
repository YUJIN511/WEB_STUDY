var foods = [
  "cake 케이크",
  "burger 햄버거",
  "steak 스테이크",
  "sandwich 샌드위치"
];

function init() {
  var html = "",
    food = "";
  foods.forEach(function(value, index) {
    food = value.split(" ");
    html += `<img src="./images/${food[0]}.jpg" data-index="${index}">`;
  });
  $(".img-thumb").html(html);

  choiceImg(0);

  // 이벤트 설정
  $("#addBtn").click(function(){
	  choiceImg(parseInt(Math.random() * 4));
  });

  var thumbs = $(".img-thumb > img");
  for (var i = 0; i < thumbs.length; i++) {
	 $(thumbs[i]).click(function(){
		 choiceImg(this.getAttribute("data-index"));
	 })
  }
}

function choiceImg(index) {
  var food = foods[index].split(" ");
  $(".img-view > img").attr({src : "./images/"+food[0]+".jpg"});
  $("#foodName").html(food[1]);

  var thumbs = $(".img-thumb > img");
  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].classList.remove("choice");
  }
  thumbs[index].classList.add("choice");
}

// 초기 작업 내용 정의
init();
