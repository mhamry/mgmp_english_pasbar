// function runTrack(selector, direction, time) {
//   const track = document.querySelector(selector);
//   track.innerHTML += track.innerHTML;
//   const originalWidth = track.scrollWidth / 2;
//   track.style.setProperty("--move", `-${originalWidth}px`);
//   track.style.animation = `run-${direction} ${originalWidth} ${time}s linear infinite`;
// }

// window.onload = () => {
//   runTrack(".track-right", "right", 20);
//   runTrack(".track-left", "left", 50);
// };

function runTrack(selector, direction, time) {
  const track = document.querySelector(selector);
  track.innerHTML += track.innerHTML;
  const originalWidth = track.scrollWidth / 2;
  track.style.setProperty("--move", `-${originalWidth}px`);
  track.style.animation = `run-${direction} ${time}s linear infinite`;
}
window.onload = () => {
  runTrack(".track-right", "right", 60);
};

//batas
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
    link.classList.add("underline");
  }
});

//batas

const navbar = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar-brand");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const underlineLinks = document.querySelector(".navbar .nav-link.underline");

window.onscroll = () => {
  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
    navbarBrand.classList.add("white");
    underlineLinks.classList.add("white");
    navLinks.forEach((link) => {
      link.classList.add("white");
    });
  } else {
    navbar.classList.remove("sticky");
    navbarBrand.classList.remove("white");
    navLinks.forEach((link) => {
      link.classList.remove("white");
    });
  }
};

//batas
// const scriptURL = "https://script.google.com/macros/s/AKfycbweJTPgDGht9ZxDkdsn_sOScXmsMm6WN0GRuR_ok2JCTPfH9E8VOFEMqirIp61VNftt/exec";
// const form = document.forms["intrakurikuler"];
// const intraLoading = document.querySelector(".intra-loading");
// const intraKirim = document.querySelector(".intra-kirim");
// const intraAlert = document.querySelector(".intra-alert");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //tampil kan btn-loading dan hilangkan btn-kirim
//   intraLoading.classList.toggle("d-none");
//   intraKirim.classList.toggle("d-none");
//   setTimeout(() => {
//     intraLoading.classList.add("d-none");
//     intraKirim.classList.remove("d-none");
//     intraAlert.classList.remove("d-none");
//     form.reset();
//   }, 3000);
// });

//intrakurikuler
const scriptURL = "https://script.google.com/macros/s/AKfycbxqZQjN-Qz1ktNpdDAVTip-GLdWKA1kdmvQuAgJtZQAB7CcH8DjsoANwZEhRGEBbkSw/exec";
const form = document.forms["intrakurikuler"];
const intraLoading = document.querySelector(".intra-loading");
const intraKirim = document.querySelector(".intra-kirim");
const intraTutup = document.querySelector(".intra-tutup");
const intraAlert = document.querySelector(".intra-alert");

form.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  intraLoading.classList.remove("d-none");
  intraKirim.classList.add("d-none");
  intraTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      intraLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      intraKirim.classList.remove("d-none");
      intraTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      intraAlert.classList.remove("d-none");
      intraAlert.classList.add("bounce");
      //hilangkan alert
      setTimeout(() => {
        intraAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      form.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      intraLoading.classList.add("d-none");
      intraKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});

// public speaking
const scriptURLPublic = "https://script.google.com/macros/s/AKfycbzo9edx0Qxjh5jZzue4yzV6H33jp7JsHlFQSfa5C0PIo9LvW9FUvYQRY6SzC1ipPZ070A/exec";
const formPublic = document.forms["publicspeaking"];
const publicLoading = document.querySelector(".public-loading");
const publicKirim = document.querySelector(".public-kirim");
const publicTutup = document.querySelector(".public-tutup");
const publicAlert = document.querySelector(".public-alert");

formPublic.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  publicLoading.classList.remove("d-none");
  publicKirim.classList.add("d-none");
  publicTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURLPublic, {
    method: "POST",
    body: new FormData(formPublic),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      publicLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      publicKirim.classList.remove("d-none");
      publicTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      publicAlert.classList.remove("d-none");
      publicAlert.classList.add("bounce");
      //hilangkan alert
      setTimeout(() => {
        publicAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      formPublic.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      publicLoading.classList.add("d-none");
      publicKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});

//Iptek
const scriptURLiptek = "https://script.google.com/macros/s/AKfycbz2t1OapsB2YO0mKtkQtnn3b3C3rsiO87npIpyXAW6rx8jCCSWfaaweOsOiTE4xW8Fyvg/exec";
const formiptek = document.forms["iptek"];
const iptekLoading = document.querySelector(".iptek-loading");
const iptekKirim = document.querySelector(".iptek-kirim");
const iptekTutup = document.querySelector(".iptek-tutup");
const iptekAlert = document.querySelector(".iptek-alert");

formiptek.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  iptekLoading.classList.remove("d-none");
  iptekKirim.classList.add("d-none");
  iptekTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURLiptek, {
    method: "POST",
    body: new FormData(formiptek),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      iptekLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      iptekKirim.classList.remove("d-none");
      iptekTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      iptekAlert.classList.remove("d-none");
      iptekAlert.classList.add("bounce");

      //hilangkan alert
      setTimeout(() => {
        iptekAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      formiptek.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      iptekLoading.classList.add("d-none");
      iptekKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});

//Literasi
const scriptURLliterasi = "https://script.google.com/macros/s/AKfycbwZiRiOVCSzfeg6jiPLJOdkGsq_JK4dwKF7lqxxYBsjP2HF_N7Ph8FB_VAEZdjrTcu1/exec";
const formliterasi = document.forms["literasi"];
const literasiLoading = document.querySelector(".literasi-loading");
const literasiKirim = document.querySelector(".literasi-kirim");
const literasiTutup = document.querySelector(".literasi-tutup");
const literasiAlert = document.querySelector(".literasi-alert");

formliterasi.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  literasiLoading.classList.remove("d-none");
  literasiKirim.classList.add("d-none");
  literasiTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURLliterasi, {
    method: "POST",
    body: new FormData(formliterasi),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      literasiLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      literasiKirim.classList.remove("d-none");
      literasiTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      literasiAlert.classList.remove("d-none");
      literasiAlert.classList.add("bounce");

      //hilangkan alert
      setTimeout(() => {
        literasiAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      formliterasi.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      literasiLoading.classList.add("d-none");
      literasiKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});

//Canva
const scriptURLcanva = "https://script.google.com/macros/s/AKfycbxy2sYiYI64G4bRpnWf9t0V2TFY21atua02JLFKl0q3LoMzyCazGZ3NQqS9rTqca6XcOA/exec";
const formcanva = document.forms["canva"];
const canvaLoading = document.querySelector(".canva-loading");
const canvaKirim = document.querySelector(".canva-kirim");
const canvaTutup = document.querySelector(".canva-tutup");
const canvaAlert = document.querySelector(".canva-alert");

formcanva.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  canvaLoading.classList.remove("d-none");
  canvaKirim.classList.add("d-none");
  canvaTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURLcanva, {
    method: "POST",
    body: new FormData(formcanva),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      canvaLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      canvaKirim.classList.remove("d-none");
      canvaTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      canvaAlert.classList.remove("d-none");
      canvaAlert.classList.add("bounce");

      //hilangkan alert
      setTimeout(() => {
        canvaAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      formcanva.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      canvaLoading.classList.add("d-none");
      canvaKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});

//Poster

const scriptURLposter = "https://script.google.com/macros/s/AKfycbxK8KUhkWgVNpIMNNfdrq9W8x7qgdOPqRYVGdTf67vyfv9V7SvFwLXYBjwLQcS-H1nS/exec";
const formposter = document.forms["poster"];
const posterLoading = document.querySelector(".poster-loading");
const posterKirim = document.querySelector(".poster-kirim");
const posterTutup = document.querySelector(".poster-tutup");
const posterAlert = document.querySelector(".poster-alert");

formposter.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  posterLoading.classList.remove("d-none");
  posterKirim.classList.add("d-none");
  posterTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURLposter, {
    method: "POST",
    body: new FormData(formposter),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      posterLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      posterKirim.classList.remove("d-none");
      posterTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      posterAlert.classList.remove("d-none");
      posterAlert.classList.add("bounce");

      //hilangkan alert
      setTimeout(() => {
        posterAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      formposter.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      posterLoading.classList.add("d-none");
      posterKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});

//CalistungA
// const scriptURLcalistungA = "https://script.google.com/macros/s/AKfycbxwRNGH8-nhQH3zFZvOivY2qMqBUi46g84g9pxni0qB97L6cHhvaGzCNQ8ORsTXSdiu/exec";
// const formcalistungA = document.forms["calistungA"];
// const calistungALoading = document.querySelector(".calistungA-loading");
// const calistungAKirim = document.querySelector(".calistungA-kirim");
// const calistungATutup = document.querySelector(".calistungA-tutup");
// const calistungAAlert = document.querySelector(".calistungA-alert");

// formcalistungA.addEventListener("submit", (e) => {
//   // Jangan reload halaman
//   e.preventDefault();

//   // Tampilkan loading
//   calistungALoading.classList.remove("d-none");
//   calistungAKirim.classList.add("d-none");
//   calistungATutup.classList.add("d-none");

//   // KIRIM DATA KE GOOGLE APPS SCRIPT
//   fetch(scriptURLcalistungA, {
//     method: "POST",
//     body: new FormData(formcalistungA),
//   })
//     .then((response) => response.json())

//     .then((response) => {
//       console.log("Berhasil:", response);

//       // Sembunyikan loading
//       calistungALoading.classList.add("d-none");

//       // Tampilkan tombol Kirim
//       calistungAKirim.classList.remove("d-none");
//       calistungATutup.classList.remove("d-none");

//       // Tampilkan pesan berhasil
//       calistungAAlert.classList.remove("d-none");
//       calistungAAlert.classList.add("bounce");
//       //hilangkan alert
//       setTimeout(() => {
//         calistungAAlert.classList.add("d-none");
//       }, 5000);
//       setTimeout(() => {
//         tampilAlertWagroup();
//       }, 5000);

//       // Kosongkan form
//       formcalistungA.reset();
//     })

//     .catch((error) => {
//       console.error("Error:", error);

//       calistungALoading.classList.add("d-none");
//       calistungAKirim.classList.remove("d-none");

//       alert("Data gagal dikirim!");
//     });
// });

const scriptURLcalistungA = "https://script.google.com/macros/s/AKfycbzNOWNTvv9RV9T3f9Viimc3Ruuz1N9lx1W0IjGVD51cHT74FGJvS7bBuQzZEHSvjo7w/exec";
const formcalistungA = document.forms["calistungA"];
const calistungALoading = document.querySelector(".calistungA-loading");
const calistungAKirim = document.querySelector(".calistungA-kirim");
const calistungATutup = document.querySelector(".calistungA-tutup");
const calistungAAlert = document.querySelector(".calistungA-alert");

// Fungsi pembantu untuk mengubah File ke Base64
const fileToBase64A = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); // Ambil cuma string Base64-nya
    reader.onerror = (error) => reject(error);
  });

formcalistungA.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Tampilkan loading
  calistungALoading.classList.remove("d-none");
  calistungAKirim.classList.add("d-none");
  calistungATutup.classList.add("d-none");

  try {
    // const fileInput = document.querySelector("#buktitf");
    // let fileData = "";
    // let fileName = "";
    // let fileMimeType = "";

    // // Jika user mengunggah file
    // if (fileInput.files.length > 0) {
    //   const file = fileInput.files[0];
    //   fileData = await fileToBase64(file);
    //   fileName = file.name;
    //   fileMimeType = file.type;

    const fileInput = formcalistungA.buktitf;

    let fileData = "";
    let fileName = "";
    let fileMimeType = "";

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];

      fileData = await fileToBase64A(file);
      fileName = file.name;
      fileMimeType = file.type;

      console.log("Nama file:", fileName);
      console.log("Tipe file:", fileMimeType);
      console.log("Ukuran:", file.size);
    }

    // Susun payload/data yang akan dikirim
    const payload = {
      // sheet_name: formcalistungA.sheet_name.value,
      // nama: formcalistungA.nama.value,
      // sekolah: formcalistungA.sekolah.value,
      // kelas: formcalistungA.kelas.value,
      // nowa: formcalistungA.nowa.value,
      // // Data File
      // fileData: fileData,
      // fileName: fileName,
      // fileMimeType: fileMimeType,

      sheet_name: formcalistungA.sheet_name.value,
      nama: formcalistungA.nama.value,
      sekolah: formcalistungA.sekolah.value,
      kelas: formcalistungA.kelas.value,
      nowa: formcalistungA.nowa.value,

      fileData: fileData,
      fileName: fileName,
      fileMimeType: fileMimeType,
    };

    // Kirim menggunakan URLSearchParams/FormData teks
    const response = await fetch(scriptURLcalistungA, {
      method: "POST",
      body: new URLSearchParams(payload),
    });

    const data = await response.json();
    console.log("Berhasil:", data);

    // Sembunyikan loading & tampilkan tombol
    calistungALoading.classList.add("d-none");
    calistungAKirim.classList.remove("d-none");
    calistungATutup.classList.remove("d-none");

    // Tampilkan alert
    calistungAAlert.classList.remove("d-none");
    calistungAAlert.classList.add("bounce");

    setTimeout(() => {
      calistungAAlert.classList.add("d-none");
    }, 5000);

    setTimeout(() => {
      if (typeof tampilAlertWagroup === "function") tampilAlertWagroup();
    }, 5000);

    formcalistungA.reset();
  } catch (error) {
    console.error("Error:", error);
    calistungALoading.classList.add("d-none");
    calistungAKirim.classList.remove("d-none");
    calistungATutup.classList.remove("d-none");
    alert("Data gagal dikirim!");
  }
});

//Calistung B

const scriptURLcalistungB = "https://script.google.com/macros/s/AKfycbwvoOP3ogYs9tyjC_g4BP0HpEfAiA2A8JagJaXkCUhh42uR8JsY6vCjagCadUjTOx84/exec";
const formcalistungB = document.forms["calistungB"];
const calistungBLoading = document.querySelector(".calistungB-loading");
const calistungBKirim = document.querySelector(".calistungB-kirim");
const calistungBTutup = document.querySelector(".calistungB-tutup");
const calistungBAlert = document.querySelector(".calistungB-alert");

// Fungsi pembantu untuk mengubah File ke Base64
const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); // Ambil cuma string Base64-nya
    reader.onerror = (error) => reject(error);
  });

formcalistungB.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Tampilkan loading
  calistungBLoading.classList.remove("d-none");
  calistungBKirim.classList.add("d-none");
  calistungBTutup.classList.add("d-none");

  try {
    // const fileInput = document.querySelector("#buktitf");
    // let fileData = "";
    // let fileName = "";
    // let fileMimeType = "";

    // // Jika user mengunggah file
    // if (fileInput.files.length > 0) {
    //   const file = fileInput.files[0];
    //   fileData = await fileToBase64(file);
    //   fileName = file.name;
    //   fileMimeType = file.type;

    const fileInput = formcalistungB.buktitf;

    let fileData = "";
    let fileName = "";
    let fileMimeType = "";

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];

      fileData = await fileToBase64(file);
      fileName = file.name;
      fileMimeType = file.type;

      console.log("Nama file:", fileName);
      console.log("Tipe file:", fileMimeType);
      console.log("Ukuran:", file.size);
    }

    // Susun payload/data yang akan dikirim
    const payload = {
      // sheet_name: formcalistungB.sheet_name.value,
      // nama: formcalistungB.nama.value,
      // sekolah: formcalistungB.sekolah.value,
      // kelas: formcalistungB.kelas.value,
      // nowa: formcalistungB.nowa.value,
      // // Data File
      // fileData: fileData,
      // fileName: fileName,
      // fileMimeType: fileMimeType,

      sheet_name: formcalistungB.sheet_name.value,
      nama: formcalistungB.nama.value,
      sekolah: formcalistungB.sekolah.value,
      kelas: formcalistungB.kelas.value,
      nowa: formcalistungB.nowa.value,

      fileData: fileData,
      fileName: fileName,
      fileMimeType: fileMimeType,
    };

    // Kirim menggunakan URLSearchParams/FormData teks
    const response = await fetch(scriptURLcalistungB, {
      method: "POST",
      body: new URLSearchParams(payload),
    });

    const data = await response.json();
    console.log("Berhasil:", data);

    // Sembunyikan loading & tampilkan tombol
    calistungBLoading.classList.add("d-none");
    calistungBKirim.classList.remove("d-none");
    calistungBTutup.classList.remove("d-none");

    // Tampilkan alert
    calistungBAlert.classList.remove("d-none");
    calistungBAlert.classList.add("bounce");

    setTimeout(() => {
      calistungBAlert.classList.add("d-none");
    }, 5000);

    setTimeout(() => {
      if (typeof tampilAlertWagroup === "function") tampilAlertWagroup();
    }, 5000);

    formcalistungB.reset();
  } catch (error) {
    console.error("Error:", error);
    calistungBLoading.classList.add("d-none");
    calistungBKirim.classList.remove("d-none");
    calistungBTutup.classList.remove("d-none");
    alert("Data gagal dikirim!");
  }
});

//kelas Dua

const scriptURLkelasDua = "https://script.google.com/macros/s/AKfycbyvXsyAkm_NbLfc_lqPz0REmB7lHHlrMuCYxMgIrLbA_0dF-cod3hEaRLWC2O5TfUlW/exec";
const formkelasDua = document.forms["kelasDua"];
const kelasDuaLoading = document.querySelector(".kelasDua-loading");
const kelasDuaKirim = document.querySelector(".kelasDua-kirim");
const kelasDuaTutup = document.querySelector(".kelasDua-tutup");
const kelasDuaAlert = document.querySelector(".kelasDua-alert");

formkelasDua.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  kelasDuaLoading.classList.remove("d-none");
  kelasDuaKirim.classList.add("d-none");
  kelasDuaTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURLkelasDua, {
    method: "POST",
    body: new FormData(formkelasDua),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      kelasDuaLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      kelasDuaKirim.classList.remove("d-none");
      kelasDuaTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      kelasDuaAlert.classList.remove("d-none");
      kelasDuaAlert.classList.add("bounce");
      //hilangkan alert
      setTimeout(() => {
        kelasDuaAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      formkelasDua.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      kelasDuaLoading.classList.add("d-none");
      kelasDuaKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});

//Kelas tiga
const scriptURLkelasTiga = "https://script.google.com/macros/s/AKfycbw-T_yZCXd_jB9FLms6B2Q3qEBHXpZbK6RpZgR3S4qkQG2S15M_AcsbvsEdC1tGgS9g/exec";
const formkelasTiga = document.forms["kelasTiga"];
const kelasTigaLoading = document.querySelector(".kelasTiga-loading");
const kelasTigaKirim = document.querySelector(".kelasTiga-kirim");
const kelasTigaTutup = document.querySelector(".kelasTiga-tutup");
const kelasTigaAlert = document.querySelector(".kelasTiga-alert");

formkelasTiga.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  kelasTigaLoading.classList.remove("d-none");
  kelasTigaKirim.classList.add("d-none");
  kelasTigaTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURLkelasTiga, {
    method: "POST",
    body: new FormData(formkelasTiga),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      kelasTigaLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      kelasTigaKirim.classList.remove("d-none");
      kelasTigaTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      kelasTigaAlert.classList.remove("d-none");
      kelasTigaAlert.classList.add("bounce");
      //hilangkan alert
      setTimeout(() => {
        kelasTigaAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      formkelasTiga.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      kelasTigaLoading.classList.add("d-none");
      kelasTigaKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});

//Bimbel Kelas Empat
const scriptURLkelasEmpat = "https://script.google.com/macros/s/AKfycbxcl1agqq99OFmnsqjJ7w8PETcsdllUUpiWDub-pewRcZr3fX4CFA1HvrmLb5wU_qjb/exec";
const formkelasEmpat = document.forms["kelasEmpat"];
const kelasEmpatLoading = document.querySelector(".kelasEmpat-loading");
const kelasEmpatKirim = document.querySelector(".kelasEmpat-kirim");
const kelasEmpatTutup = document.querySelector(".kelasEmpat-tutup");
const kelasEmpatAlert = document.querySelector(".kelasEmpat-alert");

formkelasEmpat.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  kelasEmpatLoading.classList.remove("d-none");
  kelasEmpatKirim.classList.add("d-none");
  kelasEmpatTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURLkelasEmpat, {
    method: "POST",
    body: new FormData(formkelasEmpat),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      kelasEmpatLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      kelasEmpatKirim.classList.remove("d-none");
      kelasEmpatTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      kelasEmpatAlert.classList.remove("d-none");
      kelasEmpatAlert.classList.add("bounce");
      //hilangkan alert
      setTimeout(() => {
        kelasEmpatAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      formkelasEmpat.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      kelasEmpatLoading.classList.add("d-none");
      kelasEmpatKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});
//Bimbel Kelas Enam
const scriptURLkelasEnam = "https://script.google.com/macros/s/AKfycbwN8w0VRxK7CXTHoqDOomr44wTpNn0oPvZFa1ehV3-v1bDppDpWo8FFq0356CY4LCiC/exec";
const formkelasEnam = document.forms["kelasEnam"];
const kelasEnamLoading = document.querySelector(".kelasEnam-loading");
const kelasEnamKirim = document.querySelector(".kelasEnam-kirim");
const kelasEnamTutup = document.querySelector(".kelasEnam-tutup");
const kelasEnamAlert = document.querySelector(".kelasEnam-alert");

formkelasEnam.addEventListener("submit", (e) => {
  // Jangan reload halaman
  e.preventDefault();

  // Tampilkan loading
  kelasEnamLoading.classList.remove("d-none");
  kelasEnamKirim.classList.add("d-none");
  kelasEnamTutup.classList.add("d-none");

  // KIRIM DATA KE GOOGLE APPS SCRIPT
  fetch(scriptURLkelasEnam, {
    method: "POST",
    body: new FormData(formkelasEnam),
  })
    .then((response) => response.json())

    .then((response) => {
      console.log("Berhasil:", response);

      // Sembunyikan loading
      kelasEnamLoading.classList.add("d-none");

      // Tampilkan tombol Kirim
      kelasEnamKirim.classList.remove("d-none");
      kelasEnamTutup.classList.remove("d-none");

      // Tampilkan pesan berhasil
      kelasEnamAlert.classList.remove("d-none");
      kelasEnamAlert.classList.add("bounce");
      //hilangkan alert
      setTimeout(() => {
        kelasEnamAlert.classList.add("d-none");
      }, 5000);

      setTimeout(() => {
        tampilAlertWagroup();
      }, 5000);

      // Kosongkan form
      formkelasEnam.reset();
    })

    .catch((error) => {
      console.error("Error:", error);

      kelasEnamLoading.classList.add("d-none");
      kelasEnamKirim.classList.remove("d-none");

      alert("Data gagal dikirim!");
    });
});

function tampilAlertWagroup() {
  const waGroups = document.querySelectorAll(".waGroup");
  waGroups.forEach((waGroup) => {
    waGroup.classList.remove("d-none");
  });
}

// tampilAlertWagroup();
