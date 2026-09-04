const tombolAlerts = document.querySelectorAll(".tombolAlert");

tombolAlerts.forEach((tombolAlert) => {
  tombolAlert.addEventListener("click", function (e) {
    e.preventDefault();

    tombolAlert.removeAttribute("data-toggle");
    tombolAlert.removeAttribute("data-target");

    Swal.fire({
      title: "Mohon Maaf",
      text: "Kegiatan sudah selesai dilaksanakan.",
      icon: "warning",
      confirmButtonText: "Saya Mengerti",
    });
  });
});
const alertBelums = document.querySelectorAll(".alertBelum");

alertBelums.forEach((alertBelum) => {
  alertBelum.addEventListener("click", function (e) {
    e.preventDefault();

    alertBelum.removeAttribute("data-toggle");
    alertBelum.removeAttribute("data-target");

    Swal.fire({
      title: "Mohon Maaf",
      text: "Pendaftaran Kompetisi belum dibuka! \n Kompetisi masih dalam tahap persiapan.",
      icon: "warning",
      confirmButtonText: "Saya Mengerti",
    });
  });
});
