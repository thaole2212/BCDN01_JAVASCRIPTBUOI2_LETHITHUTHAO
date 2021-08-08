
//Bài 1
/**
 * khối 1: Input
 * nhập 3 số nguyên
 * x1
 * x2
 * x3
 * 
 * 
 * Khối 2: tạo các bước xử lý:
 * b1: tạo biến và gán giá trị cho 3 số nguyên là x1 x2 x3
 * b3: dùng lệnh if else để so sánh giá trị 3 số
 * B4: hiển thị lên UI
 * Khối 3:Output
 * 3 số xuất hiện theo thứ tự tăng dần
 */



 document.getElementById("btnArrange").onclick=function(){
    var x1=parseFloat(document.getElementById("num1").value);
    var x2=parseFloat(document.getElementById("num2").value);
    var x3=parseFloat(document.getElementById("num3").value);

    if(x1>x2){
        if(x1>x3){
            if(x2>x3){
            document.getElementById("txtArrange").innerHTML=x3+"<"+x2+"<"+x1;
                    }else{
            document.getElementById("txtArrange").innerHTML=x2+"<"+x3+"<"+x1;
                        }
            }else{
            document.getElementById("txtArrange").innerHTML=x2+"<"+x1+"<"<x3;
            }
    }else{
        if(x2>x3){
            if(x1>x3){
                document.getElementById("txtArrange").innerHTML=x3+"<"+x1+"<"+x2;
            }else{
                document.getElementById("txtArrange").innerHTML=x1+"<"+x3+"<"+x2;
            }
        }else{
            document.getElementById("txtArrange").innerHTML=x1+"<"+x2+"<"+x3;
        }
    }
    }

    
//Bài 2
/**
 * khối 1: Input
 * nhập tên thành viên
 * 
 * 
 * Khối 2: tạo các bước xử lý:
 * b1: tạo biến và gán giá trị cho tên thành viên là name
 * b3: dùng lệnh switch case để so sánh name với tên 4 thành viên
 * B4: hiển thị lên UI
 * Khối 3:Output
 * lời chào tương ứng với tên thành viên được chọn
 */

document.getElementById("btnGreeting").onclick=function(){
    var name=document.getElementById("inputName").value;
    switch(name){
        case "B":
            document.getElementById("txtGreeting").innerHTML="xin chào Bố";
            break;
        case "M":
            document.getElementById("txtGreeting").innerHTML="xin chào Mẹ";
            break;
        case "E":
                document.getElementById("txtGreeting").innerHTML="xin chào Em gái";
            break;
        case "A":
                document.getElementById("txtGreeting").innerHTML="xin chào Anh trai";
            break;
        default:
            document.getElementById("txtGreeting").innerHTML="xin mời chọn thành viên";
    }
}
//Bài 3
/**
 * khối 1: Input
 * nhập 3 số nguyên
 * x1
 * x2
 * x3
 * 
 * 
 * Khối 2: tạo các bước xử lý:
 * b1: tạo biến và gán giá trị cho 3 số nguyên là x1 x2 x3
 * b3: dùng lệnh if  để so sánh giá trị 3 số đó có phải là số chẵn hay không, nếu phải thì dùng biến count để + 1 đơn vị
 * Số lẻ thì lấy 3 trừ đi số chẵn
 * B4: hiển thị lên UI
 * Khối 3:Output
 * số lượng số chẵn và số lượng số lẻ.
 */
 document.getElementById("btnCount").onclick=function(){
    var x1=parseFloat(document.getElementById("so1").value);
    var x2=parseFloat(document.getElementById("so2").value);
    var x3=parseFloat(document.getElementById("so3").value);
    var count=0;
    if(x1%2==0){
        count++
    }
    if(x2%2==0){
        count++
    }
    if(x3%2==0){
        count++
    }
    document.getElementById("txtCount").innerHTML="có "+count+" số chẵn và "+(3-count)+" số lẻ."
    
    }
  //Bài 4
/**
 * khối 1: Input
 * nhập 3 cạnh của tam giác
 * x1
 * x2
 * x3
 * 
 * 
 * Khối 2: tạo các bước xử lý:
 * b1: tạo biến và gán giá trị cho 3 cạnh là x1 x2 x3
 * b3: 
 * Kiểm tra hình tam giác cân: thỏa mãn điều kiện x1==x2 || x2==x3 || x1==x3
 * Kiểm tra hình tam giác đều: thỏa mãn điều kiện x1==x2&& x1==x3
 * Kiểm tra hình tam giác vuông: thỏa mãn 1 trong 3 điều kiện
 * x1*x1=x2*x2+x3*x3
 * x2*x2=x1*x1+x3*x3
 * x3*x3=x1*x1+x2*x2
 * Còn lại: tam giác thường
 * B4: hiển thị lên UI
 * Khối 3:Output
 * tên loại tam giác
 */  

 document.getElementById("btnType").onclick=function(){
    var x1=parseFloat(document.getElementById("canh1").value);
    var x2=parseFloat(document.getElementById("canh2").value);
    var x3=parseFloat(document.getElementById("canh3").value);
    var count=0;
    if(x1==x2&& x1==x3){
        document.getElementById("txtType").innerHTML="Hình tam giác đều";
    }else if(x1==x2 || x2==x3 || x1==x3 ){
        document.getElementById("txtType").innerHTML="Hình tam giác cân";
    }else if((Math.pow(x1,2)==Math.pow(x2,2)+Math.pow(x3,2))||(Math.pow(x2,2)==Math.pow(x1,2)+Math.pow(x3,2))||(Math.pow(x3,2)==Math.pow(x2,2)+Math.pow(x1,2))){
        document.getElementById("txtType").innerHTML="Hình tam giác vuông";
    }else {
        document.getElementById("txtType").innerHTML="Hình tam giá thường";
    }
    
    }
    