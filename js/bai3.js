/**
 * **
 * 
 * Khối 1: input ( nhập vào 3 số nguyên)
 * 
 * khối 2 :lựa chọn 
 * xác định 3 số nguyên nhập vào là chẵn hay lẻ bằng cách lấy cả 3 chia lấy phần dư cho 2 nếu bằng 0 là chẵn ngược lại là lẻ
 * sau khi xác định xong thì đếm có bao nhiêu số chẵn , có bao nhiêu số lẻ
 * khổi 3 :output
 * lời chào tương ứng với lựa chọn
 * 
 */
function sapXep() {
    var a = document.getElementById("num11").value
    var b = document.getElementById("num22").value
    var c = document.getElementById("num33").value
    var countChan = 0;
    var countLe = 0;
    if (a % 2 == 0) {
        countChan++;
    } else {
        countLe++;
    }
    if (b % 2 == 0) {
        countChan++;
    }else{
        countLe++;
    }
    if (c % 2 == 0) {
        countChan++;
    } else{
        countLe++;
    }
 document.getElementById("txtThongbao3").innerHTML = " có " + countChan +" số chẵn "+ " ,có " + countLe +" số lẻ "
}
 document.getElementById("btnTinh3").onclick = sapXep