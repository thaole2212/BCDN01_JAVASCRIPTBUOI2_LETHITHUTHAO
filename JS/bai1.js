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