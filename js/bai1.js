/**
 *  sắp xếp
 * Khối 1: input ( nhập 3 số bất kì )
 * 
 * khối 2 :kiểm tra  và sắp xếp theo thứ tự tăng dần 
 * nếu số thứ 1 > số thứ 2 và số thứ 2 > số thứ 3 => sô thứ 1 > số thứ 2 > số thứ 3
 * nếu số thứ 1 < số thứ 2 và số thứ 2 < số thứ 3 => sô thứ 1 < số thứ 2 < số thứ 3
 * ... tổng cộng có 6 trường hợp
 * khổi 3 :output
 * 1 dãy số sắp xếp từ nhờ tới lớn 
 * 
 */
function sapXep() {
    var a= document.getElementById("num1").value
    var b= document.getElementById("num2").value
    var c= document.getElementById("num3").value
    if (a>b) {
        if(b>c){
            document.getElementById("txtThongbao").innerHTML = c + "," +b +","+a;

        }
        else if(a>c){
            document.getElementById("txtThongbao").innerHTML = b + "," +c +","+a;

        }
        else{
            document.getElementById("txtThongbao").innerHTML = b + "," +a +","+c;
        }
        
    } else if(b>c) {
        if (a>c) {
            document.getElementById("txtThongbao").innerHTML = c + "," +a +","+b;
        }else{
            document.getElementById("txtThongbao").innerHTML = a + "," +c +","+b;

        }

     }
        
    else{
        document.getElementById("txtThongbao").innerHTML = a + "," +b+","+c;

    }
}
document.getElementById("btnTinh").onclick=sapXep