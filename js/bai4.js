/**
 * **
 *  dựa vào 3 cạnh nhập vào để xác định tam giác
 * Khối 1: input (  dựa vào 3 cạnh nhập vào để xác định tam giác )
 * 
 * khối 2 :xác định
 * nếu ba cạnh bằng nhau thì tam giác dự đoán là đều
 * nếu có 2 cạnh bằng nhau cạnh con lại không bằng  thì tam giác dự đoán là cân
 * nếu bình phương của một cạnh bằng tổng bình phương 2 cạnh còn lại thì tam giác dự đoán là đều
 * còn lại là tam giác khác
 * khổi 3 :output
 * lời chào tương ứng với lựa chọn
 * 
 */
function duDoan(){
    var a= document.getElementById("num111").value
    var b= document.getElementById("num222").value
    var c= document.getElementById("num333").value
    if(a==b==c){
        document.getElementById("txtThongbao4").innerHTML ="Tam giác đều";
    }else if( a==b || a==c || b==c){
        document.getElementById("txtThongbao4").innerHTML ="Tam giác cân";
    } else if( a*a==b*b+c*c||b*b==a*a+c*c||c*c==a*a+b*b){
        document.getElementById("txtThongbao4").innerHTML = "Tam giác vuông";
    }
    else{
        document.getElementById("txtThongbao4").innerHTML = "Tam giác khác";
    }
}
document.getElementById("btnTinh4").onclick=duDoan