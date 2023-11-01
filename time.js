function calculateDays() {
  var inputDate = document.getElementById("inputDate").value;
  
  if (inputDate === "") {
      alert("Lütfen bir tarih seçin.");
      return;
  }

  var selectedDate = new Date(inputDate);
  var currentDate = new Date();

  var timeDifference = selectedDate.getTime() - currentDate.getTime();
  var dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  document.getElementById("result").innerText = "Days difference: " + dayDifference + " days.";
}

// Otomatik gün hesaplama
function autoCalculateDays() {
  var inputDateElement = document.getElementById("inputDate");

  // 3 Haziran 2022 tarihini atayalım
  var presetDate = new Date("2022-06-03");
  
  // Atanan tarihi inputa yazalım
  inputDateElement.valueAsDate = presetDate;
  
  // Hesaplamayı gerçekleştirelim
  calculateDays();
}

// Sayfa yüklendiğinde otomatik hesapla fonksiyonunu çağır
window.onload = autoCalculateDays;