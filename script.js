let bookings = [
  {
    bookingCode: "CIN-001",
    customerName: "Nguyễn Văn An",
    movieTitle: "Ánh Trăng Cuối Phố",
    ticketCount: 2,
    pricePerTicket: 90000,
    totalAmount: 194400,
  },
  {
    bookingCode: "CIN-002",
    customerName: "Trần Thị Bình",
    movieTitle: "Biệt Đội Sao Băng",
    ticketCount: 4,
    pricePerTicket: 90000,
    totalAmount: 349920,
  },
  {
    bookingCode: "CIN-003",
    customerName: "Lê Minh Châu",
    movieTitle: "Mùa Hè Rực Lửa",
    ticketCount: 6,
    pricePerTicket: 110000,
    totalAmount: 641520,
  },
];

function formatBookingList(value, index) {
  return `${index + 1}. ${value.bookingCode} - ${value.customerName} - ${value.movieTitle} - SL: ${value.ticketCount} - Giá: ${value.pricePerTicket} - Tổng TT: ${value.totalAmount}`;
}

function displayBookings(list) {
  if (list.length === 0) {
    console.log(`Danh sách đơn vé trống`);
    return;
  }

  let totalPrice = 0;

  list.forEach((value, index) => {
    totalPrice += value.totalAmount;
    console.log(formatBookingList(value, index));
  });

  console.log(`Tổng: ${list.length} - Doanh thu: ${totalPrice}`);
}

function validateBookCode(code) {
  let lower_code = code.toLowerCase();

  if (
    code.trim() === "" ||
    code.length < 6 ||
    lower_code.startsWith("CIN-") ||
    code.includes(" ")
  ) {
    return null;
  }

  return code.toUpperCase();
}

function findBookIndex(code) {
  return bookings.findIndex(
    (booking) => booking.bookingCode.toLowerCase() === code.toLowerCase(),
  );
}

function inputPositiveInteger(message) {
  let input = prompt(message);

  if (input.trim() === "" || input === null) {
    alert("Không được để trống !");
    return;
  }

  let number = Number(input);

  if (number < 0) {
    return null;
  }
  return number;
}

function addBooking() {
  let code_input = prompt("Nhập mã vé: ");

  if (code_input === null) {
    alert("Không được để trống mã vé !");
    return;
  }

  let validate_code = validateBookCode(code_input);

  if (validate_code === null) {
    alert(
      `Mã code không hợp lệ (Không được để trống, độ dài tối thiểu 6 kí tự, bắt đầu bằng CIN-, không được chứa khoảng trắng)`,
    );
    return;
  }

  let existed_code = findBookIndex(code_input);

  if (existed_code !== -1) {
    alert("Mã vé đã tồn tại trong hệ thống !");
    return;
  }

  let customer_name_input = prompt("Nhập tên khách hàng: ");

  if (customer_name_input === null || customer_name_input.trim() === "") {
    alert("Tên khách hàng không đươc để trống !");
    return;
  }

  let temp_list = [];

  let customer_name_elememt = customer_name_input.split(" ");

  customer_name_elememt.forEach((value) => {
    let element = value.trim().toLowerCase();
    let format_element = element.charAt(0).toUpperCase() + element.slice(1);
    temp_list.push(format_element);
  });

  let customer_name = temp_list.join(" ");

  let film_name_input = prompt("Nhập tên phim: ");

  if (film_name_input === null || film_name_input.trim() === "") {
    alert("Tên phim không đươc để trống !");
    return;
  }

  temp_list = [];

  let film_name_elememt = film_name_input.split(" ");

  film_name_elememt.forEach((value) => {
    let element = value.trim().toLowerCase();
    let format_element = element.charAt(0).toUpperCase() + element.slice(1);
    temp_list.push(format_element);
  });

  let film_name = temp_list.join(" ");

  let ticket_count = inputPositiveInteger("Nhập số vé: ");

  if (ticket_count === null) {
    alert("Số vé phải lớn hơn 0");
    return;
  }
}

function main() {
  let choice;
  do {
    let input = prompt(
      `=====================================================
     HỆ THỐNG QUẢN LÝ ĐẶT VÉ MOONLIGHT CINEMA
=====================================================
1. Hiển thị danh sách đơn đặt vé
2. Thêm đơn đặt vé mới
3. Cập nhật đơn đặt vé
4. Xóa đơn đặt vé
5. Tìm kiếm đơn đặt vé theo tên phim
0. Thoát chương trình
=====================================================
Vui lòng nhập lựa chọn của bạn (0 - 5): `,
    );

    if (input === null || input.trim() === "") {
      alert(`Vui lòng chọn lựa chọn 0 - 5`);
      continue;
    }

    choice = Number(input.trim());

    switch (choice) {
      case 1:
        displayBookings(bookings);
        break;

      case 2:
        addBooking();
        break;

      case 0:
        alert("Đã thoát chương trình !");
        break;

      default:
        alert(`Lựa chọn không hợp lệ. Vui lòng chọn 0 - 5 !`);
        break;
    }
  } while (choice !== 0);
}

main();
