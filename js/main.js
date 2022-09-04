/**BÀI 1: TÌM SỐ CHẴN LẺ NHỎ HƠN 100
 * -ĐẦU VÀO: Người dùng không cần nhập
 * -XỬ LÝ:
 * +Sử dụng function gán vào button xem kết quả
 * +Sử dụng vòng lặp for để chạy số từ 0->100
 * +Trong các trường hợp % 2 === 0 -> số chẵn -> cộng chuỗi vào even
 * +Trong các trường hợp % 2 !== 0 -> số lẽ -> cộng chuỗi vào odd
 * +DOM kết quả ra màn hình
 * -KẾT QUẢ:
 * + Số chẵn:.....
 * + Số lẻ:.....
 *
 *
 */

function oddEven() {
  var even = "";
  var odd = "";
  for (var index = 0; index < 100; index++) {
    if (index % 2 == 0) {
      even += index + " ";
    } else {
      odd += index + ", ";
    }
  }
  document.getElementById(
    "oddEvenResult"
  ).innerHTML = `<p>Số chẵn: ${even}</p><p class='mb-0'>Số lẻ: ${odd}</p>`;
}
//---------------------------------------------------------
/**BÀI 2: TÍNH TỔNG S(n) = x + x^2 + x^3 +....+x^n
 * -GIẢ SỬ: Người dùng nhập vào số x và số n. Chương trình sẽ tính theo công thức trên đề bài và in ra kết quả
 * -ĐẦU VÀO: Người dùng nhập vào số x và số n
 * -XỬ LÝ:
 * + Sử dụng vòng lập với để lặp với bước nhảy n++
 * + Cộng kết quả từng vòng lại vào 1 biến
 * - ĐẦU RA: ketQua = ?
 */

function totalXN(x, n) {
  var x = document.getElementById("txtXnumber").value * 1;
  var n = document.getElementById("txtNnumber").value * 1;
  var nIndex = 1;
  var total = 0;
  for (total; nIndex <= n; nIndex++) {
    total += x ** nIndex;
  }
  document.getElementById(
    "ex2Result"
  ).innerHTML = `Kết quả: <span class='text-danger'>${total}</span>`;
}
//---------------------------------------------------------
/**BÀI 3: TÍNH GIAI THỪA
 *-GIẢ SỬ: Người dùng nhập vào số n và chương trình sẽ tính giai thừa của nó
 *-ĐẦU VÀO: Người dùng sẽ nhập vào số n (số cần tính giai thừa)
 *-XỬ LÝ:
 *+Cho vòng lập chạy với index++
 *+Nhân kết quả mỗi vòng với kết quả của vòng trước
 *+Kết thúc vòng lập ta thu được kết quả
 *-ĐẦU RA: ex3Result = ?
 */

function giaiThua(n) {
  n = document.getElementById("txtEx3Num").value * 1;
  nIndex = 1;
  for (var totalEx3 = 1; nIndex <= n; nIndex++) {
    totalEx3 *= nIndex;
  }
  document.getElementById(
    "ex3Result"
  ).innerHTML = `<p class='mb-0'>Kết quả: <span class='text-danger'>${totalEx3}</span></p>`;
}
//---------------------------------------------------------
/**BÀI 4: DIV ĐỎ XANH
 * -GIẢ SỬ: Người dùng khi click vào button sẽ in ra 10 thẻ, trong đó có 5 thẻ chẵn và 5 thẻ lẻ, thẻ chẵn sẽ có màu đỏ và thẻ lẻ sẽ có màu xanh
 * -ĐẦU VÀO: người dùng không cần nhập
 * -XỬ LÝ:
 * +Sử dụng function vào button trong đó sẽ có if else
 * +Sử dụng vòng lập chạy số từ 1-> 10 -> xác định index nào là chẵn và lẻ -> Nếu chẵn thì += vào ex4Result div màu đỏ và ngược lại thì là div màu xanh
 * -ĐẦU RA: DOM kết quả ex4Result
 */

function oddEvenDiv() {
  var ex4Index = 1;
  for (var ex4Result = ""; ex4Index <= 10; ex4Index++) {
    if (ex4Index % 2 === 0) {
      ex4Result += `<p class='bg-danger text-white text-center rounded'>Div: ${ex4Index} -> Chẵn</p>`;
    } else {
      ex4Result += `<p class='bg-primary text-white text-center rounded'>Div: ${ex4Index} -> Lẻ</p>`;
    }
  }
  document.getElementById("ex4Result").innerHTML = ex4Result;
}
//---------------------------------------------------------
/**BÀI TẬP 5 (THÊM): TÌM SỐ NGUYÊN TỐ
 * GIẢ SỬ: Người dùng nhập vào số x và chương trình sẽ in ra các số nguyên tố nhỏ hơn số X
 * -ĐẦU VÀO: Người dùng nhập vào số x
 * -XỬ LÝ:
 * +Tạo một function gán vào button
 * +Trong function này sẽ chạy vòng lặp for với các buóc nhảy xIndex++
 * +Sử dụng IF ELSE để xác định đâu là số nguyên tố và gán vào ex5Result
 * -ĐẦU RA: ex5Result = ?
 */
function soNguyenTo() {
  var x = 15;
  var xIndex = 2;
  var ex5Result = "";
  for (ex5Result; xIndex <= x; xIndex++) {
    if (xIndex <= 1) {
      ex5Result = "Không thoả điều kiện";
    } else if (
      xIndex % 1 === 0 &&
      xIndex % xIndex === 0 &&
      xIndex % [2, Math.sqrt(xIndex)] !== 0
    ) {
      ex5Result += xIndex + " ";
    } else {
      continue;
    }
  }
  return ex5Result;
}
console.log(soNguyenTo());
xIndex = 10;
