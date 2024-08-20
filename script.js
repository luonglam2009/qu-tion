// script.js
document.getElementById('askQuestionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn không cho form gửi dữ liệu đi

    var name = document.getElementById('name').value;
    var question = document.getElementById('question').value;

    document.getElementById('responseMessage').textContent = 'Cảm ơn ' + name + ', câu hỏi của bạn đã được gửi!';

    // Nếu cần gửi dữ liệu tới máy chủ hoặc dịch vụ, bạn có thể thêm mã gửi dữ liệu ở đây.
    // Ví dụ: Sử dụng fetch hoặc XMLHttpRequest để gửi dữ liệu tới máy chủ.
});
// script.js
document.getElementById('askQuestionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn không cho form gửi dữ liệu đi

    var name = document.getElementById('name').value;
    var question = document.getElementById('question').value;

    // URL của Google Apps Script
    var scriptURL = 'https://script.google.com/macros/s/AKfycbyEC2SgL4lzHbdkoKBolUZhNTb9-wOmgcPFuMrJUjNjYibmyDCphdZQEm2aXI-XzIBF/exec'; // Thay thế bằng URL của Google Apps Script

    // Gửi dữ liệu đến Google Apps Script
    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, question: question }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').textContent = data.message;
    })
    .catch(error => {
        console.error('Có lỗi xảy ra:', error);
    });
});
