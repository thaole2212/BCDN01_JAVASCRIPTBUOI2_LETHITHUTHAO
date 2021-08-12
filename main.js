
//Bài 1
/**
 * khối 1: Input
 * số ngày làm
 * Days
 * 
 * 
 * Khối 2: tạo các bước xử lý:
 * b1: tạo biến và gán giá trị cho số ngày
 *  Days
 * b2: tạo biến chứa số tiền lương
 *  salary
 * b3: tính sô tiền lương theo công thức:
 * salary=Days*luongMoiNgay;
 * B4: hiển thị lên UI
 * Khối 3:Output
 * salary: số tiền lương
 */



 document.getElementById("btnSalary").onclick=function(){
    var Days=parseFloat(document.getElementById("inputDays").value);
    var luongMoiNgay=100000;
    var salary=0;
        salary=Days*luongMoiNgay;
    console.log(salary);
    document.getElementById("txtSalary").innerHTML=salary;
    }
// bài 2
/**
 * khối 1: Input
 * 5 số thực
 * Num1
 * Num2
 * Num3
 * Num4
 * Num5
 * 
 * Khối 2: tạo các bước xử lý:
 * b1:tạo biến và gán giá trị cho 5 số thực:
 * Num1
 * Num2
 * Num3
 * Num4
 * Num5
 * b2:tạo biến chứa giá trị trung bình average
 * b3:xâu dựng công thức tính giá trị trung bình:
 *  average=(Num1+Num2+Num3+Num4+Num5)/5;
 * B4: hiển thị lên UI
 * 
 * Khối 3:Output
 * average: giá trị trung bình
 */


 document.getElementById("btnAverage").onclick=function(){
    var Num1=parseFloat(document.getElementById("x1").value);
    var Num2=parseFloat(document.getElementById("x2").value);
    var Num3=parseFloat(document.getElementById("x3").value);
    var Num4=parseFloat(document.getElementById("x4").value);
    var Num5=parseFloat(document.getElementById("x5").value);

    var average=0;
    average=(Num1+Num2+Num3+Num4+Num5)/5;
    console.log(average);
    document.getElementById("txtAverage").innerHTML=average;
    }
//bài 3
/**
 * khối 1: Input
 * số tiền USD:
 * USD
 * 
 * 
 * Khối 2: tạo các bước xử lý:
 * b1: tạo biến và gán giá trị cho số tiền USD là USD
 * b2: tạo biến chứa số tiền VND là VND, tỉ giá là tiGia
 * b3: tính sô tiền VND sau khi quy đổi theo công thức:
 * VND=USD*tiGia;
 * B4: hiện kết quả lên UI
 * Khối 3:Output
 * VND: số tiền VND sau khi quy đổi
 */


 document.getElementById("btnVND").onclick=function(){
    var USD=parseFloat(document.getElementById("inputUSD").value);
    var tiGia=23500;
    var VND=0;
    VND=USD*tiGia;
    console.log(VND);
    document.getElementById("txtVND").innerHTML=VND;
    }

    //Bài 4
    /**
 * khối 1: Input
 * độ dài 2 cạnh của hình chữ nhật
 * chieuDai
 * chieuRong
 * 
 * Khối 2: tạo các bước xử lý:
 * b1: tạo biến và gán giá trị cho 2 cạnh là chieuDai và chieuRong;
 * b2: tạo biến chứa chu vi là chuVi, tạo biến chứa diện tích là dienTich ;
 * b3: tính chu vi và diện tích theo công thức:
 * chuVi=(chieuDai+chieuRong)*2
 * dienTich=chieuDai*chieuRong
 * B4: hiện kết quả lên UI
 * Khối 3:Output
 * chuVi: chu vi
 * dienTich: diện tích
 */



 document.getElementById("btnChuvi").onclick=function(){
    var chieuDai=parseFloat(document.getElementById("a").value);
    var chieuRong=parseFloat(document.getElementById("b").value);
    var chuVi=0;
    chuVi=(chieuDai+chieuRong)*2;
    console.log(chuVi);
    document.getElementById("txtChuvi").innerHTML=chuVi;
    }
document.getElementById("btnDientich").onclick=function(){
      var chieuDai=parseFloat(document.getElementById("a").value);
      var chieuRong=parseFloat(document.getElementById("b").value);
      var dienTich=0;
      dienTich=chieuDai*chieuRong;
      console.log(dienTich);
      document.getElementById("txtDientich").innerHTML=dienTich;
      }
//bài 5
/**
 * khối 1: Input
 * số có 2 chữ số
 * num
 * 
 *
 * Khối 2: tạo các bước xử lý:
 * b1:tạo biến và gán giá trị cho số có 2 chữ số là num;
 * b2:tạo biến chứa chữ số hàng đơn vị là unit, chữ số hàng chục là ten; tổng 2 ký số là sum;
 * b3:xâu dựng công thức tính tổng 2 ký số
 * Lấy hàng chục
ten=Math.floor(num/10);
Lấy hàng đơn vị
unit=num%10;
Tính tổng 2 ký số
sum=ten+unit;
 
 * B4: hiện kết quả lên UI
 * 
 * Khối 3:Output
 * sum: tổng 2 ký số
 */


document.getElementById("btnSum").onclick=function(){
    var num=parseFloat(document.getElementById("inputNum").value);
    var ten=0;
    var unit=0;
    var sum=0;
    ten=Math.floor(num/10);
    unit=num%10;
    sum=ten+unit;
    document.getElementById("txtSum").innerHTML=sum;
    }