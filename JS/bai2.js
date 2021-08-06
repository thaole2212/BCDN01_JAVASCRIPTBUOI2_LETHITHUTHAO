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
