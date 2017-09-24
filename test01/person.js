var Person = function(name){
    this.name = name;

    this.alertName = function(){
        alert(this.name);
    }
}

var Person = function(p_name){
    var name = p_name;

    this.alertName = function(){
        alert(name);//에러가 나지 않는다 . 
    }
}

var Person = function(p_name,p_age,p_gender,p_address){
    var name= p_name;//private
    var age = p_age;
    var gender = p_gender;
    var address = p_address;

    this.writePersonInfo = function(){
        var str = "이름 :"+name;
        str += "나이 : " + age;
        str += "성별 : " + gender;
        str += "주소 : " + address;
        document.write(str); 
    }//데이터 트랜스폼 object

    //이름을 바꿔주어야 할때
    
    this.setName = function(p_name){
        name = p_name;
    }
    this.getName = function(){
        return name;
    }
    //get set object

    this.play = function(){
        document.write("<br/>"+name+"님께서 놀고 있습니다");
    }

}