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