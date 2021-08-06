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