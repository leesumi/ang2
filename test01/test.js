var Test=function(){
    var num1 = 1;
    var num2 = 2;

    var plus = function(){
        return num1+num2;//return 타입을 알수없다.
    }

    this.alertStr=function(param1,param2){// this 는 function 자체
        var str = param1+param2;
        alert(plus());
        var str = param1+param2;
        alert(str)
    }
}

this.alert("adsdf")//브라우저 최상위(bio)

var obj = {//구조체 {구냥 이렇게 묶어 놓는것.
    test : "1",
    test1 : "2"
    //json구조 사용가능하다 수업에서는 데이터타입 설정에 주로 사용할 것임.
};

// 구조체 ,결국 object
obj["test"] = "1";
alert(obj["test"]);
obj.test = "2";
alert(obj["test"]);

alert(obj.test);
alert(obj.test1);

var test="test";
alert(obj[test]);


