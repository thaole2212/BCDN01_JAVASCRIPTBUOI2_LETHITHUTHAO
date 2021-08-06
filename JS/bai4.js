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

