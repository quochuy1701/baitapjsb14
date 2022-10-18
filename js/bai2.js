/**
 * **
 *  lựa chọn 1 người sẽ có lời chào thích hợp
 * Khối 1: input ( lựa chọn 1 trong 4 lựa chọn )
 * 
 * khối 2 :lựa chọn 
 * nếu lựa bố sẽ có lời chào  xin chào bố
 *  nếu lựa mẹ sẽ có lời chào  xin chào mẹ
 *  nếu lựa anh giai sẽ có lời chào  xin chào anh giai
 *  nếu lựa em gái sẽ có lời chào  xin chào em gái
 * khổi 3 :output
 * lời chào tương ứng với lựa chọn
 * 
 */
function luaChonloimoi() {
    var Thanhvien = document.getElementById("selectPercent").value
    if (Thanhvien==30) {
        document.getElementById("txtThongbao1").innerHTML = "Xin chào Bố!"
        
    } else if(Thanhvien==20) {
        document.getElementById("txtThongbao1").innerHTML = "Xin chào Mẹ!"
        
    }else if(Thanhvien==15) {
        document.getElementById("txtThongbao1").innerHTML = "Xin chào Anh Giai!"
        
    }else{
        document.getElementById("txtThongbao1").innerHTML = "Xin chào Em Gái!"
    }
}
document.getElementById("btn1").onclick = luaChonloimoi;
