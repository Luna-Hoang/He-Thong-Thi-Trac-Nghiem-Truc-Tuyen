//-------------------------------TRANG BÀI TẬP------------------------------------


function hideAllSections() {
    document.getElementById("ques-nav").style.display = "none";
    document.getElementById("ques-nav-GK").style.display = "none";
    document.getElementById("ques-nav-CK").style.display = "none";
    document.getElementById("history").style.display = "none";
    document.getElementById("ranking").style.display = "none";
    document.getElementById("guidance").style.display = "none";
}


// Thêm dữ liệu mẫu cho kiểm tra cuối kỳ
const practiceDataCK = [
    { number: 1, code: "CK001", title: "Kiểm tra cuối kỳ", time: "60 phút" },
];

const practiceTableBodyCK = document.querySelector("#ques-nav-CK tbody");

practiceDataCK.forEach(item => {
    const row = practiceTableBodyCK.insertRow();
    row.insertCell(0).textContent = item.number;
    row.insertCell(1).textContent = item.code;
    row.insertCell(2).textContent = item.title;
    row.insertCell(3).textContent = item.time;
});

// Thêm dữ liệu mẫu cho history
const historyData = [
    { number: 1, code: "LD001", title: "Bài tập 1", type:"Luyện tập", time: "60 phút", result: "9.2" },
    { number: 2, code: "LD002", title: "Bài tập 2", type:"Luyện tập", time: "45 phút", result: "8.6" },
    { number: 3, code: "GK001", title: "Kiểm tra 1", type:"Kiểm tra giữa kỳ", time: "45 phút", result: "8.8" },
    { number: 4, code: "GK002", title: "Kiểm tra 2", type:"Kiểm tra giữa kỳ", time: "45 phút", result: "9.0" },
    { number: 5, code: "CK001", title: "Kiểm tra cuối kỳ", type:"Kiểm tra cuối kỳ", time: "60 phút", result: "9.8" },
 
];

const historyTableBody = document.querySelector("#history tbody");

historyData.forEach(item => {
    const row = historyTableBody.insertRow();
    row.insertCell(0).textContent = item.number;
    row.insertCell(1).textContent = item.code;
    row.insertCell(2).textContent = item.title;
    row.insertCell(3).textContent = item.type;
    row.insertCell(4).textContent = item.time;
    row.insertCell(5).textContent = item.result;
});

// Thêm dữ liệu mẫu cho ranking
const rankingData = [
    { number: 1, account: "B21DCCN001", name: "Võ Nguyên Giáp", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "9.8", noEx:"10" },
    { number: 2, account: "B21DCCN002", name: "Trần Quốc Tuấn", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "9.4", noEx:"9" },
    { number: 3, account: "B21DCCN003", name: "Lý Thường Kiệt", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "9.2", noEx:"7" },
    { number: 4, account: "B21DCCN004", name: "Văn Tiến Dũng", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "9.0", noEx:"6" },
    { number: 5, account: "B21DCCN005", name: "Lê Trọng Tấn", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "9.0", noEx:"6" },
    { number: 6, account: "B21DCCN006", name: "Nguyễn Chí Thanh", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "8.8", noEx:"6" },
    { number: 7, account: "B21DCCN007", name: "Nguyễn Huệ", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "8.8", noEx:"5" },
    { number: 8, account: "B21DCCN008", name: "Ngô Quyền", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "8.8", noEx:"5" },
    { number: 9, account: "B21DCCN009", name: "Phùng Hưng", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "8.6", noEx:"5" },
    { number: 10, account: "B21DCCN010", name: "Lê Đức Anh", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "8.6", noEx:"5" },
    { number: 11, account: "B21DCCN011", name: "Đinh Bộ Lĩnh", Subject:"CNXHKH", class:"E21CQCN03-B", type: "luyện tập", result: "8.4", noEx:"5" },
    
];

const rankingTableBody = document.querySelector("#ranking tbody");

rankingData.forEach(item => {
    const row = rankingTableBody.insertRow();
    row.insertCell(0).textContent = item.number;
    row.insertCell(1).textContent = item.account;
    row.insertCell(2).textContent = item.name;
    row.insertCell(3).textContent = item.Subject;
    row.insertCell(4).textContent = item.class;
    row.insertCell(5).textContent = item.type;
    row.insertCell(6).textContent = item.result;
    row.insertCell(7).textContent = item.noEx;
});


//---------------------------------------------LUYỆN ĐỀ---------------------------------------------------

var practiceData1 = [
    { number: 1, code: "LD001", title: "Bài tập 1", time: "60 phút" },
    { number: 2, code: "LD002", title: "Bài tập 2", time: "45 phút" },
    { number: 3, code: "LD003", title: "Bài tập 3", time: "45 phút" },
    { number: 4, code: "LD004", title: "Bài tập 4", time: "60 phút" },
    { number: 5, code: "LD005", title: "Bài tập 5", time: "45 phút" },
    { number: 6, code: "LD006", title: "Bài tập 6", time: "45 phút" },
    { number: 7, code: "LD007", title: "Bài tập 7", time: "20 phút" },
    { number: 8, code: "LD008", title: "Bài tập 8", time: "45 phút" },
    { number: 9, code: "LD009", title: "Bài tập 9", time: "20 phút" },
    
];

function showPractice(showData){
    hideAllSections();
    document.getElementById("guidance").style.display = "block";
    document.getElementById("ques-nav").style.display = "block";

//cheking tableData is empty
    var table = document.getElementById("ques-table-content");
    table.innerHTML = "";
    for(var i=0; i<showData.length; i++){
        var row = `
            <tr>
                <td>${showData[i].number}</td>
                <td><a href="#">${showData[i].code}</a></td>
                <td><a href="#">${showData[i].title}</a></td>
                <td>${showData[i].time}</td>
            </tr>`
        table.innerHTML += row;
    }
}

// gọi hàm showTable
window.onload(showPractice(practiceData1))
//location.reload(showPractice(practiceData1));
function searchTable(value, data){
    var filterData = [];
    for(var i=0; i<data.length; i++){
        value = value.toLowerCase();
        var code = data[i].code.toLowerCase();
        var title = data[i].title.toLowerCase();
        if(code.includes(value) || title.includes(value)){
            filterData.push(data[i]);
        }
    }
    return filterData;
}

$("#search").on('keyup', function(){
    var value = $(this).val();
    console.log("Value:", value);
    var data = searchTable(value, practiceData1);
    showPractice(data);
})

//------------------------------------------LUYỆN ĐỀ----------------------------------------------------

// const practiceTableBodyGK = document.querySelector("#ques-nav-GK tbody");

// practiceDataGK.forEach(item => {
//     const row = practiceTableBodyGK.insertRow();
//     row.insertCell(0).textContent = item.number;
//     row.insertCell(1).textContent = item.code;
//     row.insertCell(2).textContent = item.title;
//     row.insertCell(3).textContent = item.time;
// });


function showMidtermExam() {
    hideAllSections();
    document.getElementById("guidance").style.display = "block";
    document.getElementById("ques-nav-GK").style.display = "block";
}

function showFinalExam() {
    hideAllSections();
    document.getElementById("guidance").style.display = "block";
    document.getElementById("ques-nav-CK").style.display = "block";
}

function showResults(){
    hideAllSections();
    document.getElementById("history").style.display = "block";
}

function showRanking(){
    hideAllSections();
    document.getElementById("ranking").style.display = "block";
}

//------------------------------------GIỮA KỲ---------------------------------------------

// Thêm dữ liệu mẫu cho kiểm tra giữa kỳ
const practiceDataGK = [
    { number: 1, code: "GK001", title: "Kiểm tra 1", time: "45 phút" },
    { number: 2, code: "GK002", title: "Kiểm tra 2", time: "45 phút" },
    { number: 3, code: "GK003", title: "Kiểm tra 3", time: "45 phút" },
    { number: 4, code: "GK004", title: "Kiểm tra 4", time: "45 phút" },
    { number: 5, code: "GK005", title: "Kiểm tra 5", time: "45 phút" },
    
];

function showPracticeGK(showData){
    hideAllSections();
    document.getElementById("guidance").style.display = "block";
    document.getElementById("ques-nav-GK").style.display = "block";

//cheking tableData is empty
    var table = document.getElementById("ques-table-content-GK");
    table.innerHTML = "";
    for(var i=0; i<showData.length; i++){
        var row = `
            <tr>
                <td>${showData[i].number}</td>
                <td><a href="#">${showData[i].code}</a></td>
                <td><a href="#">${showData[i].title}</a></td>
                <td>${showData[i].time}</td>
            </tr>`
        table.innerHTML += row;
    }
}

// gọi hàm showTable
showPracticeGK(practiceDataGK);

function searchTableGK(value, data){
    var filterData = [];
    for(var i=0; i<data.length; i++){
        value = value.toLowerCase();
        var code = data[i].code.toLowerCase();
        var title = data[i].title.toLowerCase();
        if(code.includes(value) || title.includes(value)){
            filterData.push(data[i]);
        }
    }
    return filterData;
}

$("#searchGK").on('keyup', function(){
    var value = $(this).val();
    console.log("Value:", value);
    var data = searchTableGK(value, practiceDataGK);
    showPracticeGK(data);
})