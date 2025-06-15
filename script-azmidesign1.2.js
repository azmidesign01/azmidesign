//<![CDATA[ 
function generateCode(input) {
    var _keyStr = "AQZSWXDECFRVGTBHYNJUMKILOPaqzswxdecfrvgtbhynjumkilop0567891234+/=";
    function _utf8_decode(utftext) {
        var string = "";
        var i = 0;
        var c = (c1 = c2 = 0);
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if (c > 191 && c < 224) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
    function _invert(input, inversionFunction) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = inversionFunction(output);
        return output;
    }
    function decode(input) {
        return _invert(input, _utf8_decode);
    }

    return {
        decode: decode
    };
}
var generated = generateCode();

const mode = urlParameter.searchParams.get("mode");
const oobCode = urlParameter.searchParams.get("oobCode");
const actionParam = urlParameter.searchParams.get("action");

var idDatabase = generated.decode(globalSetting['ID Upload']);
var googleSheet = "https://script.google.com/macros/s/" + idDatabase + "/exec";
var apikeyFirebase = generated.decode(globalSetting['API Key Firebase']);
var projectID = generated.decode(globalSetting['Project ID']);
var appID = generated.decode(globalSetting['ID App']);
var splitappID = appID.split(":");
var senderID = splitappID[1];

// Firebase Config
const firebaseConfig = {
    apiKey: apikeyFirebase,
    authDomain: projectID+".firebaseapp.com",
    projectId: projectID,
    storageBucket: projectID+".appspot.com",
    messagingSenderId: senderID,
    appId: appID
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

// Set Notifikasi Peringatan
  var timeout_notif;
  var berhasil = "<div class='warning success'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' /></svg></div>";
  var gagal = "<div class='warning failed'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' /></svg></div>";
function notification(o) {
    var information = document.getElementById("information");
    if (information) information.remove();
    
    clearTimeout(timeout_notif);
    
    var newInformation = document.createElement("div");
    newInformation.id = "information";
    document.body.appendChild(newInformation);
    
    newInformation.innerHTML = o;
    fadeIn(newInformation, 100);

    timeout_notif = setTimeout(function () {
        fadeOut(newInformation, 1000);
        setTimeout(function () {
            newInformation.remove();
        }, 1000);
    }, 4000);
}

function fadeIn(element, duration) {
    var opacity = 0;
    var interval = 10;
    var gap = interval / duration;

    function fadeInLoop() {
        opacity += gap;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            element.style.display = 'block'; // Change display to block when opacity reaches 1
            clearInterval(fadeInterval);
        }
    }

    var fadeInterval = setInterval(fadeInLoop, interval);
}

function fadeOut(element, duration) {
    var opacity = 1;
    var interval = 10;
    var gap = interval / duration;

    function fadeOutLoop() {
        opacity -= gap;
        element.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fadeInterval);
            element.style.display = 'none'; // Change display to none when opacity reaches 0
            element.remove(); // Optionally, remove the element from the DOM
        }
    }

    var fadeInterval = setInterval(fadeOutLoop, interval);
}

// Format Upload File
function uploadFile(item, output, other) {
    notification(gagal + "Proses upload file, silahkan ditunggu");
    var file = item.files[0]; 
    var fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = function (f) {
        var newName = file.name;
        var orgName = file.name;
        if (orgName.includes(".")) {
            var orgExt = orgName.split(".").pop();
            if (orgExt !== newName.split(".").pop()) {
                newName = newName ? `${newName}.${orgExt}` : orgName;
            }
        }
        var qs = new URLSearchParams({
            filename: newName,
            mimeType: file.type
        });
        fetch(`${googleSheet}?${qs}`, {
            method: "POST",
            body: JSON.stringify([...new Int8Array(f.target.result)])
        })
        .then(res => res.json())
        .then(e => {
            var idDrive = e.fileId;
            var imageDrive = 'https://lh3.googleusercontent.com/u/0/d/' + idDrive;
            var urlFile = e.fileUrl;
            // Menambahkan hasil upload ke dalam output
           if (other === undefined ||other === false) {
            output.innerHTML = `
                <input class='linkfile' data-file='https://lh3.googleusercontent.com/u/0/d/${idDrive}' value='${idDrive}' type='hidden'/>
                <img src='${imageDrive}' width='80' height='80' alt='image google drive'/>
            `;
            } else if (other == true) {
            output.innerHTML = `
                <input class='linkfile' value='${urlFile}' type='hidden'/>
            `;
            } else if (other == "multiple") {
               var html = `<img src='${imageDrive}' width='640' height='640' alt='image'/>`;
               output.insertAdjacentHTML('beforeend', html);
            }
            notification(berhasil + "File berhasil terupload");
        })
        .catch(err => console.log(err));
    };
}

//format tanggal
  function formatTanggal(tgl){
     var t = new Date(tgl);
     var e = new Array("Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu");
     var a = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
     var hari = e[t.getDay()];
     var tanggal = t.getDate();
     var bulan = a[t.getMonth()];
     var tahun = t.getFullYear();
     return hari+", "+tanggal+" "+bulan+" "+tahun;
  }

  function formatTanggalangka(tgl){
     var t = new Date(tgl);
     var tanggal = t.getDate();
     var bulan = t.getMonth() + 1;
     var tahun = t.getFullYear();
     return bulan + "-" + tanggal + "-" + tahun;
  }

// Show Password
function showPassword(item) {
  var temp = document.querySelector(item);
  if (temp.getAttribute('type') === 'password') {
    temp.setAttribute('type', 'text');
  } else {
    temp.setAttribute('type', 'password');
  }
}

//Button
var buttonSignUp = document.getElementById("sign-up-btn");
if (buttonSignUp) {
   buttonSignUp.addEventListener("click", function(event) {
       document.querySelector(".main-container").classList.add("sign-up-mode");
       event.preventDefault();
   });
}

var buttonSignIn = document.getElementById("sign-in-btn");
if (buttonSignIn) {
   buttonSignIn.addEventListener("click", function(event) {
       document.querySelector(".main-container").classList.remove("sign-up-mode");
       event.preventDefault();
   });
}

var signPassword = document.querySelector(".sign-up-form .show-password");
if (signPassword) {
   signPassword.addEventListener("click", function(event) {
       this.querySelector(".icon-hidden").classList.toggle("hidden");
       this.querySelector(".icon-show").classList.toggle("hidden");
       showPassword("#psw_signup");
       event.preventDefault();
   });
}

var signUpPassword = document.querySelector(".sign-in-form .show-password");
if (signUpPassword) {
   signUpPassword.addEventListener("click", function(event) {
       this.querySelector(".icon-hidden").classList.toggle("hidden");
       this.querySelector(".icon-show").classList.toggle("hidden");
       showPassword("#psw_signin");
       event.preventDefault();
   });
}

// Toggle Menu Profile
var buttonToggleprofile = document.querySelectorAll('.button-user');
document.addEventListener("DOMContentLoaded", function() {
   buttonToggleprofile.forEach(function(btn){
     btn.addEventListener('click', function() {
     document.querySelectorAll('.toggle-menu-profile').forEach(function(content){
       if (content.style.display === 'none' || content.style.display === '') {
         content.style.display = 'flex';
         var height = content.scrollHeight + 'px';
         content.style.maxHeight = height;
         setTimeout(function() {
            content.style.maxHeight = 'none';
         }, 500);
       } else {
         content.style.maxHeight = content.scrollHeight + 'px';
         setTimeout(function() {
            content.style.maxHeight = '0';
            setTimeout(function() {
               content.style.display = 'none';
            }, 500);
         }, 10);
       }
       var buttonLoginakun = content.querySelector(".button-login");
       if (buttonLoginakun) {
          buttonLoginakun.addEventListener("click", function(event){
             event.preventDefault();
             window.location.href = urlAkun;
          });
       }

       var buttonDaftarakun = content.querySelector(".button-daftar");
       if (buttonDaftarakun) {
          buttonDaftarakun.addEventListener("click", function(event){
             event.preventDefault();
             window.location.href = urlAkun;
          });
       }
      });
     });
   });
});

// Registrasi
let checksignInUp = document.querySelector(".forms-container");
if (checksignInUp) {
  // Mengambil elemen form dan menambahkan event listener 'submit'
  var signUpForm = document.querySelector(".sign-up-form");
  if (signUpForm) {
    signUpForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var nama = document.getElementById("name").value;
      var nomor = document.getElementById("nohp").value;
      var email = document.getElementById("email_signup").value;
      var password = document.getElementById("psw_signup").value;

      if (nama === "") {
        notification(gagal + "Nama Lengkap Belum Diisi");
        return false;
      } else if (nomor === "") {
        notification(gagal + "Nomor Whatsapp Belum Diisi");
        return false;
      } else if (email === "") {
        notification(gagal + "Email Belum Diisi");
        return false;
      } else if (password === "") {
        notification(gagal + "Password Belum Diisi");
        return false;
      } else {
        document.querySelector(".loading-sign-up").style.display = "block";

        auth.createUserWithEmailAndPassword(email, password)
          .then((data) => {
            var user = data.user;
            var email = user.email;

            user.updateProfile({
              displayName: nama
            });

            db.collection("datauser").add({
              id: user.uid,
              nama: nama,
              email: email,
              hp: nomor,
              foto: null,
              status: "user",
              password: password // ← Diperbaiki: koma sebelumnya ditambahkan
            }).then(() => {
              document.querySelector(".loading-sign-up").style.display = "none";
              localStorage.setItem("checkuser", true);
              setTimeout(function () {
                window.location.href = urlDashboard;
              }, 5000);
            }).catch((e) => {
              document.querySelector(".loading-sign-up").style.display = "none";
              notification(gagal + e.message);
            });
          })
          .catch((e) => {
            document.querySelector(".loading-sign-up").style.display = "none";
            notification(gagal + e.message);
          });

        return false;
      }
    });
  }
}

// Login
if (checksignInUp) {
  var signInForm = document.querySelector(".sign-in-form");
  if (signInForm){
  signInForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dari reload halaman
    var email = document.getElementById("email_signin").value;
    var password = document.getElementById("psw_signin").value;
    if (email === "") {
      notification(gagal + "Email Diperlukan");
      return false;
    } else if (password === "") {
      notification(gagal + "Password Diperlukan");
      return false;
    } else {
      document.querySelector(".loading-sign-in").style.display = "block";
      auth.signInWithEmailAndPassword(email, password).then((data) => {
        document.querySelector(".loading-sign-in").style.display = "none";
        setTimeout(function () {
          window.location.href = urlDashboard;
        }, 1000);
      }).catch((error) => {
        document.querySelector(".loading-sign-in").style.display = "none";
        var notif = error.message;
        notification(gagal + "Email atau Password Tidak Sesuai");
      });
      return false;
    }
  });
  }
}

// Reset Password
if (checksignInUp) {
  var lupaPasswordButton = document.querySelector(".sign-in-form .lupa-password");
  if (lupaPasswordButton){
  lupaPasswordButton.addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.getElementById("email_signin").value;
    if (email === "") {
      notification(gagal + "Masukan Email dan Klik Lagi Lupa Password");
      return false;
    } else {
      document.querySelector(".loading-sign-in").style.display = "block";
      auth.sendPasswordResetEmail(email).then(() => {
        document.querySelector(".loading-sign-in").style.display = "none";
        var notif = "Silahkan cek email Anda untuk Reset Password";
        notification(berhasil + notif);
      }).catch((error) => {
        document.querySelector(".loading-sign-in").style.display = "none";
        var notif = "Email Anda tidak terdaftar";
        notification(gagal + notif);
      });
      return false;
    }
  });
  }
}

// Verifikasi Email
function emailVerification(item, element) {
    auth.applyActionCode(item).then(() => {
        element.innerHTML = "<div class='box-chart'>" + berhasil + "<p class='center'>Email berhasil diverifikasi! Mengarahkan ke halaman Dashboard</p></div>";
        setTimeout(() => {
            window.location.href = urlDashboard;
        }, 3000);
    })
    .catch((error) => {
        element.innerHTML = `<div class='box-chart'><p class='none'>Error: ${error.message}</p></div>`;
    });
}

// Form Reset Password
function passwordVerification(item, element) {
    element.innerHTML =`
    <div class="box-chart">
    <form id="reset-password" class="box-form">
    <div class="dataform">
       <label for="password">Reset Password</label>
       <input id="newpassword" placeholder="Masukan Password Baru Disini" type="password">
       <span class="show-password" id="show-hide-newpassword">
         <svg class="icon-hidden hidden" viewBox="0 0 24 24">
           <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" fill="currentColor"/>
         </svg>
         <svg class="icon-show" viewBox="0 0 24 24">
           <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" fill="currentColor"/>
         </svg>
       </span>
    </div>
    <button class="button" role="button" type="submit">
       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><circle cx="256" cy="298.667" r="42.667"></circle><path d="M480.768,87.936l-56.704-56.704c-5.674-5.585-11.957-10.515-18.731-14.699V64   c-0.071,58.881-47.786,106.596-106.667,106.667h-85.333C154.452,170.596,106.737,122.881,106.667,64V0   C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.215,47.786,511.93,106.667,512h298.667   C464.214,511.93,511.93,464.215,512,405.334V163.35C512.08,135.049,500.833,107.893,480.768,87.936z M256,384   c-47.128,0-85.333-38.205-85.333-85.333s38.205-85.333,85.333-85.333s85.333,38.205,85.333,85.333S303.128,384,256,384z"></path><path d="M213.333,128h85.333c35.346,0,64-28.654,64-64V1.366c-4.638-0.756-9.32-1.212-14.016-1.365H149.333v64   C149.333,99.346,177.987,128,213.333,128z"></path></g></svg>
       <span>RESET PASSWORD</span>
    </button>
    </form>
   </div>
    `;
    var buttonPasswordsh = document.getElementById("show-hide-newpassword");
    if (buttonPasswordsh) {
      buttonPasswordsh.addEventListener("click", function(event) {
         event.preventDefault();
         this.querySelector(".icon-hidden").classList.toggle("hidden");
         this.querySelector(".icon-show").classList.toggle("hidden");
         showPassword("#newpassword");
         return false;
      });
    }

    var buttonReset = document.getElementById("reset-password");
    if (buttonReset) {
       buttonReset.addEventListener("submit", function(event) {
          event.preventDefault();
          var password = document.getElementById("newpassword").value;
          var verifCode = item;
          if (password === "") {
              notification(gagal + "Silakan masukkan password baru.");
          } else {
              auth.confirmPasswordReset(verifCode, password).then(() => {
                notification(berhasil + "Password berhasil diganti, silahkan login menggunakan password baru");
                setTimeout(function() {
                  window.location.href = urlAkun;
                }, 5000);
              }).catch((error) => {
                notification(gagal + error.message);
              });
          }
          return false;
       });
    }
}
var elementAccount = document.getElementById("actionElement");
if (elementAccount) {
   var element = elementAccount;
   var item = oobCode;
   if (mode === "resetPassword") {
      passwordVerification(item, element)
   } else {
      element.innerHTML = "<div class='box-chart'><p class='none'>Halaman tidak tersedia</p></div>";
   }
}

function setupDatauser(user, status) {
  if (status == "admin") {
    const rowsPerPage = 10;
    let currentPage = 1;
    let lastVisible = null;
    let firstVisible = null;
    let searchQuery = '';
    let totalDocs = 0;
    function fetchData(direction = 'next', search = '') {
      let query = db.collection("datauser").orderBy("nama", "desc").limit(rowsPerPage);
      if (search) {
        query = db.collection("datauser").orderBy("nama", "desc");
      }
      if (direction === 'next' && lastVisible) {
        query = query.startAfter(lastVisible);
      } else if (direction === 'prev' && firstVisible) {
        query = query.endBefore(firstVisible).limitToLast(rowsPerPage);
      }
      query.get().then(function (data) {
        var checkempty = data.empty;
        if (checkempty) {
          document.getElementById("table-data-user").innerHTML = "<p class='none'>Data User Belum Tersedia</p>";
          document.getElementById("next-user").disabled = true;
        } else {
          renderTable(data);
        }
      });
    }

    function renderTable(data) {
      let html = "<div class='table'><table><thead><tr>";
      html += "<th><input class='checkall' type='checkbox'/></th>";
      html += "<th>Foto</th>";
      html += "<th>Nama User</th>";
      html += "<th>Detail User</th>";
      html += "<th>Status</th>";
      html += "</tr></thead><tbody>";
      let foundUser = false;

      data.forEach(function (doc) {
        var uid = doc.id;
        var data = doc.data();
        var iduser = data.id;
        var nama = data.nama;
        var email = data.email;
        var hp = data.hp;
        var status = data.status;
        
        var searchnama = nama ? nama.toLowerCase() : '';
        var searchemail = email ? email.toLowerCase() : '';
        var searchhp = hp ? hp.toLowerCase() : '';

        var buttonStatus = "<input class='button-checkbox button-status' type='checkbox' " + (status === "admin" ? "checked" : "") + "/>";

        if (searchQuery === '' || searchnama.includes(searchQuery) || searchemail.includes(searchQuery)) {
          foundUser = true;
          var foto = data.foto;
          if (foto == null) {
             foto = "https://blogger.googleusercontent.com/img/a/AVvXsEgm-WGbxQmYT_3A6eJmY89ivcWGdWVM5DFYVZTsWKbqY3m1EcXtTcElRSMgMig9L7oxRI0AqA-g6aPRIVeBhTIXyXbIEwCIBPpKT4A6mD0Q5cq8feZTtpIAald-WA0j0oqLf3Ut08Ufkkn5WQDoKMIX_OEdM8yCrmldLPqugLfAhfM7dQ72BlDrc1s1gg=s135";
          }
          html += `<tr class='data-user' data-id='${iduser}' data-uid='${uid}'>
                    <td class='checklist'><input type='checkbox'/></td>
                    <td><div class='center' style='margin:5px'><img src='${foto}' alt='${nama}' width='45' height='45' style='border-radius:100%'/></div></td>
                    <td><p class='namauser'>${nama}</p><p><span class='verifikasi ${status === "admin" ? "aktif" : "non-aktif"}'>${status.charAt(0).toUpperCase() + status.slice(1)}</span></p></td>
                    <td><p>Email: <span class='email'>${email}</span></p><p>Nomor HP: <span class='hp'>${hp}</span></p></td>
                    <td class='status'>${buttonStatus}</td>
                  </tr>`;
        }
      });

      html += "</tbody></table></div>";
      if (foundUser) {
        document.getElementById("table-data-user").innerHTML = html;
        if (!searchQuery) {
          document.getElementById("prev-user").style.display = "flex";
          document.getElementById("next-user").style.display = "flex";
        }
      } else {
        if (searchQuery) {
          document.getElementById("table-data-user").innerHTML = "<p class='none'>Data tidak ditemukan</p>";
        }
      }

      document.querySelector(".checkall").addEventListener('change', function () {
        const isChecked = this.checked;
        document.querySelectorAll(".checklist input").forEach(checkbox => checkbox.checked = isChecked);
      });

      document.getElementById("button-option-user").addEventListener('click', function () {
        const option = document.getElementById("option-user").value;
        if (option == "default") {
          notification(gagal + "Silahkan Pilih Aksi Terlebih Dahulu");
          return false;
        }
        const checkedCheckboxes = document.querySelectorAll(".checklist input:checked");
        if (checkedCheckboxes.length === 0) {
          notification(gagal + "Silahkan checklist minimal satu data.");
          return false;
        }
        checkedCheckboxes.forEach(function (checkbox) {
          const uid = checkbox.closest(".data-user").getAttribute("data-uid");
          let update;
          if (option == "1") {
            update = db.collection("datauser").doc(uid).update({ status: "admin" });
          } else if (option == "2") {
            update = db.collection("datauser").doc(uid).update({ status: "member" });
          } else if (option == "3") {
            update = db.collection("datauser").doc(uid).update({ status: "user" });
          } else if (option == "4") {
            db.collection("datauser").doc(uid).delete().then(() => {
              notification(berhasil + "Data User berhasil dihapus");
              setupDatauser(user, status);
            }).catch(error => {
              notification(gagal + "Data User gagal diupdate, silahkan coba lagi");
            });
          }
          if (update) {
            update.then(() => {
              notification(berhasil + "Data Berhasil Diupdate");
              setupDatauser(user, status);
            }).catch(error => console.log(error));
          }
        });
      });

      firstVisible = data.docs[0];
      lastVisible = data.docs[data.docs.length - 1];
      updateButtons(data.size);
    }

    function updateButtons(dataSize) {
      document.getElementById("prev-user").disabled = currentPage === 1;
      document.getElementById("next-user").disabled = dataSize < rowsPerPage;
    }

    document.getElementById("prev-user").addEventListener('click', function () {
      if (currentPage > 1) {
        currentPage--;
        fetchData('prev', searchQuery);
      }
    });

    document.getElementById("next-user").addEventListener('click', function () {
      currentPage++;
      fetchData('next', searchQuery);
    });

    document.getElementById("search-user").addEventListener('input', function () {
      searchQuery = this.value.trim().toLowerCase();
      currentPage = 1;
      lastVisible = null;
      firstVisible = null;
      fetchData('next', searchQuery);
      if (searchQuery) {
        document.getElementById("prev-user").style.display = "none";
        document.getElementById("next-user").style.display = "none";
      } else {
        document.getElementById("prev-user").style.display = "flex";
        document.getElementById("next-user").style.display = "flex";
      }
    });

    fetchData();
  }
}

//Setup Daftar Member
function setupdaftarMember(user, element, status) {
   var price = globalSetting['Harga Member'];
   var produk = globalSetting['Judul Produk Member'];
   var linkproduk = globalSetting['Link Produk Member'];
   var html = `
    <p><b>Gabung Jadi Member Sekarang</b></p>

<p>Yuk gabung jadi member di kami hanya <span class="box-price-abu">${price}</span> atau membeli produk <a href='${linkproduk}' target='_blank'><b>${produk}</b></a> untuk dapatkan akses download file sepuasnya</p>



    <form class='form-daftar-member box-form'>
      <input id='data-name' type='hidden'/>
      <input id='data-nomor' type='hidden'/>
      <input id='data-email' type='hidden'/>
      <button class='button' style='margin:auto' role='button' type='submit'>
<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' xml:space='preserve'><g><circle cx='256' cy='298.667' r='42.667'></circle><path d='M480.768,87.936l-56.704-56.704c-5.674-5.585-11.957-10.515-18.731-14.699V64   c-0.071,58.881-47.786,106.596-106.667,106.667h-85.333C154.452,170.596,106.737,122.881,106.667,64V0   C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.215,47.786,511.93,106.667,512h298.667   C464.214,511.93,511.93,464.215,512,405.334V163.35C512.08,135.049,500.833,107.893,480.768,87.936z M256,384   c-47.128,0-85.333-38.205-85.333-85.333s38.205-85.333,85.333-85.333s85.333,38.205,85.333,85.333S303.128,384,256,384z'></path><path d='M213.333,128h85.333c35.346,0,64-28.654,64-64V1.366c-4.638-0.756-9.32-1.212-14.016-1.365H149.333v64   C149.333,99.346,177.987,128,213.333,128z'></path></g></svg><span>Daftar Sekarang</span>
      </button>
    </form>
   `;
   element.innerHTML = html;
   document.querySelector("#html-daftar-member .form-daftar-member").addEventListener("submit", function(event) {
      event.preventDefault();
      var nama = user.displayName;
      var email = user.email;
      var nomor = document.getElementById("data-nomor").value;
      var hpAdmin = globalSetting['nomor WA']
      var splitWA = hpAdmin.split(",");
      var nomorAdmin = rotator(splitWA).split(/[^0-9]/).join("").replace(/^[0]/, "62");
      var checkoutWA = "";
      checkoutWA += "=========================%0ADATA MEMBER%0A=========================%0A";
      checkoutWA += "Nama: " + nama + "%0A";    
      checkoutWA += "Nomor HP: " + nomor + "%0A";
      checkoutWA += "Email: " + email + "%0A";
      var walink = "https://api.whatsapp.com/send";
      var sendWA = walink + "?phone=" + nomorAdmin + "&text=" + checkoutWA;
      window.open(sendWA,'_blank');
   });
}

//Setup Upload Berita
function setupUploadberita(user, element, status) {
   var html = `
    <form class='upload-berita box-form'>
      <div class='dataform'>
         <label for='title-berita'>Judul File</label>
         <input id='title-berita' placeholder='Masukan Judul disini' type='text'/>
      </div>
      <div class='dataform' id='output-foto-berita'></div>
      <div class='button-option'>
        <button class='option' data-id='box-upload-file' role='button'>Upload File</button>
        <button class='option' data-id='box-konten-berita' role='button'>Masukan Link File</button>
      </div>
      <div class='isi-konten' id='box-upload-file' style='display:block'>
        <div class='dataform'>
           <label for='upload-file-berita'>Upload File</label>
           <input id='upload-file-berita' type='file'/>
        </div>
        <div class='hidden' id='output-upload-file-berita'></div>
      </div>
      <div class='isi-konten' id='box-konten-berita'>
        <div class='dataform'>
           <label for='konten-berita'>Masukan Link File</label>
           <input id='konten-berita' placeholder='Masukan link file disini' type='text'/>
        </div>
      </div>
      <div class='loading loading-upload-berita center'></div>
      <button class='button' role='button' type='submit'>
<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' xml:space='preserve'><g><circle cx='256' cy='298.667' r='42.667'></circle><path d='M480.768,87.936l-56.704-56.704c-5.674-5.585-11.957-10.515-18.731-14.699V64   c-0.071,58.881-47.786,106.596-106.667,106.667h-85.333C154.452,170.596,106.737,122.881,106.667,64V0   C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.215,47.786,511.93,106.667,512h298.667   C464.214,511.93,511.93,464.215,512,405.334V163.35C512.08,135.049,500.833,107.893,480.768,87.936z M256,384   c-47.128,0-85.333-38.205-85.333-85.333s38.205-85.333,85.333-85.333s85.333,38.205,85.333,85.333S303.128,384,256,384z'></path><path d='M213.333,128h85.333c35.346,0,64-28.654,64-64V1.366c-4.638-0.756-9.32-1.212-14.016-1.365H149.333v64   C149.333,99.346,177.987,128,213.333,128z'></path></g></svg><span>UPLOAD</span>
      </button>
    </form>
   `;
   element.innerHTML = html;
   document.querySelectorAll(".upload-berita .button-option button").forEach(function(button) {
     button.addEventListener("click", function(event) {
       event.preventDefault();
       document.querySelectorAll(".isi-konten").forEach(function(button) {
          button.style.display = "none";
       });
       var id = this.getAttribute("data-id");
       this.closest(".button-option").querySelectorAll(".option").forEach(function(option) {
         option.classList.remove("active");
       });
       this.classList.add("active");
       document.getElementById(id).style.display = "block";
       return false;
     });
   });

   var buttonUploadfile = document.getElementById("upload-file-berita");
   buttonUploadfile.addEventListener("change", function(event) {
      event.preventDefault();
      var output = document.getElementById("output-upload-file-berita");
      uploadFile(buttonUploadfile, output, true);
      return false;
   });

   document.querySelector("#html-upload-berita .upload-berita").addEventListener("submit", function(event) {
      event.preventDefault();
      var userid = user.uid;
      var nama = user.displayName;
      var email = user.email;
      var judul = document.getElementById("title-berita").value;
      var checkFile = document.getElementById("upload-file-berita");
      var checkLink = document.getElementById("konten-berita").value;
      if (checkFile.files.length === 0) {
        var file = checkLink;
      } else {
        var file = document.querySelector("#output-upload-file-berita .linkfile").value;
      }
      if (judul == "") {
         notification(gagal + "Judul diperlukan");
         return false;
      } else if (checkFile.files.length === 0 && checkLink == "") {
         notification(gagal + "File Diperlukan");
         return false;
      } else {
        document.querySelector(".loading-upload-berita").style.display = "block";
        db.collection("datafile").add({
          judul: judul,
          file: file,
          times: firebase.firestore.Timestamp.now()
        }).then(() => {
          document.querySelector(".loading-upload-berita").style.display = "none";
          notification(berhasil + "Data berhasil terkirim, cek secara berkala pada tab <b>Data Download</b>");
          setupListberita(status);
        }).catch((e) => {
          document.querySelector(".loading-upload-berita").style.display = "none";
          notification(gagal + e.message);
        });
        return false;
      }
   });
}

function setupListberita(status) {
     const rowsPerPage = 10;
     let currentPage = 1;
     let lastVisible = null;
     let firstVisible = null;
     let searchQuery = '';
     let totalDocs = 0;
     function fetchData(direction = 'next', search = '') {
        let query;
        if (status == "admin" || status == "member"){
            query = db.collection("datafile").orderBy("times", "desc").limit(rowsPerPage);
        } else {
            query = db.collection("datafile").where("id", "==", null).orderBy("times", "desc").limit(rowsPerPage);
        }
         if (search) {
            if (status == "admin" || status == "member"){
                query = db.collection("datafile").orderBy("times", "desc");
            } else {
                query = db.collection("datafile").where("id", "==", null).orderBy("times", "desc");
            }
         }
         if (direction === 'next' && lastVisible) {
             query = query.startAfter(lastVisible);
         } else if (direction === 'prev' && firstVisible) {
             query = query.endBefore(firstVisible).limitToLast(rowsPerPage);
         }
         query.get().then(function (data) {
             var checkempty = data.empty;
             if (checkempty) {
                 document.getElementById("table-data-berita").innerHTML = "<p class='none'>Belum Ada Data</p>";
                 document.getElementById("next").disabled = true;
             } else {
                 renderTable(data);
             }
         });
     }
     function renderTable(data) {
        let html = "<div class='table'><table><thead><tr>";
        if (status == "admin"){
           html += "<th><input class='checkall' type='checkbox'/></th>";
        }
        html += "<th>Judul</th>";
        html += "<th>Unduh</th>";
        html += "</tr></thead><tbody>";
        let foundBerita = false;
          data.forEach(function (doc) {
            var uid = doc.id;
            var data = doc.data();
            var judul = data.judul;
			var file = data.file;
            if (judul == null || judul == "") {
               var searchjudul = judul;
            } else {
              var searchjudul = judul.toLowerCase();
            }
            if (searchQuery == '' || searchjudul.indexOf(searchQuery) != -1) {
              foundBerita = true;
              html += "<tr class='data-berita' data-uid='"+uid+"'>";
              if (status == "admin"){
                 html += "<td class='checklist'><input type='checkbox'/></td>";
              }
			  html += "<td class='judul'>" + judul + "</td>";
			  html += "<td><button class='button link-button-download' data-file='"+file+"'><svg class='icon-show' viewBox='0 0 24 24'><path d='M21.5,12h-3c-.827,0-1.5,.673-1.5,1.5,0,1.379-1.121,2.5-2.5,2.5h-5c-1.379,0-2.5-1.121-2.5-2.5,0-.827-.673-1.5-1.5-1.5H2.5c-1.379,0-2.5,1.121-2.5,2.5v5c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5v-5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,7.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-5c0-.827,.673-1.5,1.5-1.5h3c.275,0,.5,.225,.5,.5,0,1.93,1.57,3.5,3.5,3.5h5c1.93,0,3.5-1.57,3.5-3.5,0-.275,.225-.5,.5-.5h3c.827,0,1.5,.673,1.5,1.5v5ZM7.646,7.268c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l3.146,3.146V.5c0-.276,.224-.5,.5-.5s.5,.224,.5,.5V9.707l3.146-3.146c.195-.195,.512-.195,.707,0s.195,.512,0,.707l-3.293,3.293c-.257,.257-.589,.381-.925,.412-.044,.013-.087,.027-.135,.027s-.091-.015-.135-.027c-.337-.031-.668-.155-.925-.412l-3.293-3.293Z' fill='currentColor'></path></svg></button></td>";
              html += "</td>";
              html += "</tr>";
            }
          });
        html += "</tbody></table></div>";
        if (foundBerita) {
        document.getElementById("table-data-berita").innerHTML = html;
        if (!searchQuery) {
          document.getElementById("prev").style.display = "flex";
          document.getElementById("next").style.display = "flex";
        }
        } else {
          if (searchQuery) {
            document.getElementById("table-data-berita").innerHTML = "<p class='none'>Data tidak ditemukan</p>";
          }
        }
        document.querySelectorAll(".data-berita").forEach(function(button){
           var buttonLink = button.querySelector(".link-button-download");
           if (buttonLink) {
              buttonLink.addEventListener("click", function() {
                  var linkFile = this.getAttribute("data-file");
                  window.open(linkFile, '_blank');
              });
           }
        });
        var buttonOptionberita = document.getElementById("button-option-berita");
        if (buttonOptionberita) {
           document.querySelector("#table-data-berita .checkall").addEventListener("change", function() {
              var isChecked = this.checked;
              document.querySelectorAll("#table-data-berita .checklist input").forEach(function(input) {
                  input.checked = isChecked;
              });
           });
           buttonOptionberita.addEventListener("click", function() {
               var option = document.getElementById("option-berita");
             if (option) {
           	option = option.value;
               if (option === "default") {
                   notification(gagal + "Silahkan Pilih Aksi Terlebih Dahulu");
                   return false;
               } else {
                   var selectedOption = document.querySelector("#option-berita :checked").value;
                   var checkedCheckboxes = document.querySelectorAll("#table-data-berita .checklist input:checked");
                   if (checkedCheckboxes.length === 0) {
                       notification(gagal + "Silahkan checklist minimal satu data.");
                       return false;
                   } else {
                       checkedCheckboxes.forEach(function(checkbox) {
                        var uid = checkbox.closest(".data-berita").getAttribute("data-uid");
           				var selectElement = document.getElementById("option-berita");
                           if (selectedOption === "1") {
                               db.collection("datafile").doc(uid).delete()
                                   .then(() => {
                                       notification(berhasil + "Data berhasil dihapus");
                                       setupListberita(status);
                                   })
                                   .catch(() => {
                                       notification(gagal + "Data gagal diupdate, silahkan coba lagi");
                                   });
                           }
                       });
                   }
                   return false;
               }
             }
           });
        }

        firstVisible = data.docs[0];
        lastVisible = data.docs[data.docs.length - 1];
        updateButtons(data.size);
     };
     function updateButtons(dataSize) {
        document.getElementById("prev").disabled = (currentPage === 1);
        document.getElementById("next").disabled = (dataSize < rowsPerPage);
     }
    document.getElementById("prev").addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            fetchData('prev', searchQuery);
        }
    });
	document.getElementById("next").addEventListener("click", function() {
        currentPage++;
        fetchData('next', searchQuery);
     });
     document.getElementById("search-berita").addEventListener("input", function() {
       searchQuery = this.value.trim().toLowerCase();
       currentPage = 1;
       lastVisible = null;
       firstVisible = null;
       fetchData('next', searchQuery);

        var prevNextButtons = document.querySelectorAll("#prev, #next");
         if (searchQuery) {
           prevNextButtons.forEach(function(button) {
              button.style.display = "none";
           });
         } else {
           prevNextButtons.forEach(function(button) {
              button.style.display = "flex";
           });
         }
     });
     fetchData();
}

// Setup Dashboard
function setupDashboard(user, uid, timeakun, lastlogin, element) {
   var verification = user.emailVerified;
       db.collection("datauser").where("email", "==", user.email).get().then(function(data) {
         if (data.docs[0] == undefined) {
            db.collection("datauser").add({
             id: user.uid,
             nama: user.displayName,
             email: user.email,
             hp: null,
             foto: null,
             status: "user"
           }).then((e) => {
             setTimeout(function () {
                window.location.href = urlDashboard;
             }, 1000);
           }).catch((e) => {
             notification(gagal + e.message);
           });
         } else {
        var html = "";
        html += "<div class='box-chart'>";
          var id = data.docs[0].id;
          var data = data.docs[0].data();
          var iduser = data.id;
          var nama = data.nama;
          var foto = data.foto;
          var nomor = data.hp;
          var email = data.email;
          var status = data.status;
          if (status == "nonaktif") {
          html += "<p class='none center'>Akun Anda telah dinonaktifkan, silahkan hubungi Admin</p>";
          } else {
          html += "<div class='box-profile'>";
          html += "<img class='image' alt='"+nama+"' src='"+globalSetting['Image Dashboard']+"' width='1200' height='600'/>";
          html += "<div class='profile-image'>";
          html += "<div class='profile-image-wrap'>";
          html += "<div class='card-profile-image'>";
          html += "<input type='file' class='upload' accept='.jpg, .jpeg, ,gif, .png' capture='camera'/>";
          if (foto == null) {
             html += "<img class='view-image' height='135' alt='"+nama+"' src='https://blogger.googleusercontent.com/img/a/AVvXsEgm-WGbxQmYT_3A6eJmY89ivcWGdWVM5DFYVZTsWKbqY3m1EcXtTcElRSMgMig9L7oxRI0AqA-g6aPRIVeBhTIXyXbIEwCIBPpKT4A6mD0Q5cq8feZTtpIAald-WA0j0oqLf3Ut08Ufkkn5WQDoKMIX_OEdM8yCrmldLPqugLfAhfM7dQ72BlDrc1s1gg=s135' width='135'/>";
          } else {
             html += "<img class='view-image' height='135' alt='"+nama+"' src='"+foto+"' width='135'/>";
          }
          html += "<span class='button'>";
          html += "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='m8,22.5c0,.828-.672,1.5-1.5,1.5h-1c-3.032,0-5.5-2.468-5.5-5.5v-1c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5v1c0,1.379,1.121,2.5,2.5,2.5h1c.828,0,1.5.672,1.5,1.5Zm14.5-6.5c-.828,0-1.5.672-1.5,1.5v1c0,1.379-1.121,2.5-2.5,2.5h-1c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5h1c3.032,0,5.5-2.468,5.5-5.5v-1c0-.828-.672-1.5-1.5-1.5ZM18.5,0h-1c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5h1c1.379,0,2.5,1.121,2.5,2.5v1c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-1c0-3.032-2.468-5.5-5.5-5.5ZM1.5,8c.828,0,1.5-.672,1.5-1.5v-1c0-1.379,1.121-2.5,2.5-2.5h1c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5h-1C2.468,0,0,2.468,0,5.5v1c0,.828.672,1.5,1.5,1.5Zm10.5,2c-1.105,0-2,.895-2,2s.895,2,2,2,2-.895,2-2-.895-2-2-2Zm3.5,8h-7c-1.93,0-3.5-1.57-3.5-3.5v-5c0-1.93,1.57-3.5,3.5-3.5h.196l.885-1.331c.278-.418.747-.669,1.249-.669h2.34c.502,0,.971.251,1.249.669l.885,1.331h.196c1.93,0,3.5,1.57,3.5,3.5v5c0,1.93-1.57,3.5-3.5,3.5Zm.5-8.5c0-.275-.225-.5-.5-.5h-7c-.275,0-.5.225-.5.5v5c0,.275.225.5.5.5h7c.275,0,.5-.225.5-.5v-5Z'/></svg>";
          html += "</span>";
          html += "</div>";
          html += "</div>";
          html += "</div>";
          html += "<div class='profile-info'>";
          html += "<div class='center'>";
          html += "<h3>"+nama+"</h3>";
          html += "<a href='javascript:;' id='button-logout'><span class='verifikasi non-aktif'>Logout</span></a>";
          html += "</div>";
          html += "<div class='list-info'>";
          html += "<ul>";
          if (status == "user"){
             html += "<li>Status: <span class='verifikasi aktif'>User</span></li>";
          } else if (status == "admin"){
             html += "<li>Status: <span class='verifikasi aktif'>Admin</span></li>";
          } else if (status == "penjual"){
             html += "<li>Status: <span class='verifikasi aktif'>Penjual</span></li>";
          }
          html += "<li>Email: "+email+"</li>";
          html += "<li>Daftar Sejak: "+formatTanggal(timeakun)+"</li>";
          html += "<li>Terakhir Login: "+formatTanggal(lastlogin)+"</li>";
          html += "<li></li>";
          html += "</ul>";
          html += "<div class='menu-option-wrap'>";
          if (status === "user"){
             html += "<button class='upgrade-account' data-id='html-daftar-member' role='button'>Daftar Member</button>";
          }
          if (status === "admin"){
             html += "<button class='upgrade-account' data-id='html-datauser' role='button'>Data User</button>";
          }
          if (status === "admin"){
             html += "<button class='upgrade-account' data-id='html-upload-berita' role='button'>Upload</button>";
          }
          if (status === "admin" || status == "member"){
             html += "<button class='upgrade-account' data-id='html-list-berita' role='button'>Data Download</button>";
          }
          html += "</div>";
          html += "<div class='box-menu-option'>";
          if (status === "user"){
             html += "<div class='box-menu-opton-wrap' id='html-daftar-member'>";
             html += "</div>";
          }
          if (status === "admin"){
             html += "<div class='box-menu-opton-wrap' id='html-datauser'>";
             html += "<div class='box-search-option'><div class='box-form box-search search'><div class='dataform'><input id='search-user' placeholder='Cari Nama, Email atau HP User' type='search'/></div></div></div>";
             html += "<div class='box-search-option'><div class='box-form box-search'><div class='dataform'>";
             html += "<select id='option-user'>";
             html += "<option value='default'>Pilih Aksi</option>";
             html += "<option value='1'>Jadikan Admin</option>";
             html += "<option value='2'>Jadikan Member</option>";
             html += "<option value='3'>Jadikan User</option>";
             html += "<option value='4'>Hapus Akun</option>";
             html += "</select></div></div><button role='button' id='button-option-user'>Apply</button></div>";
             html += "<div class='table-data-user' id='table-data-user'></div>";
             html += "<div class='button-prev-next'><button id='prev-user' disabled=''><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10.957,12.354a.5.5,0,0,1,0-.708l4.586-4.585a1.5,1.5,0,0,0-2.121-2.122L8.836,9.525a3.505,3.505,0,0,0,0,4.95l4.586,4.586a1.5,1.5,0,0,0,2.121-2.122Z'></path></svg><span>Prev</span></button><button id='next-user' disabled=''><span>Next</span><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z'></path></svg></button></div>";
             html += "</div>";
          }
          if (status === "admin"){
             html += "<div class='box-menu-opton-wrap' id='html-upload-produk'></div>";
          }
          if (status === "admin" || status === "member"){
             html += "<div class='box-menu-opton-wrap' id='html-list-berita'>";
             html += "<div class='box-search-option'><div class='box-form box-search search'><div class='dataform'><input id='search-berita' placeholder='Cari Judul File' type='search'/></div></div></div>";
          }
          if (status === "admin") {
            html += "<div class='box-search-option'><div class='box-form box-search'><div class='dataform'><select id='option-berita'><option value='default'>Pilih Aksi</option><option value='1'>Hapus File</option></select></div></div><button role='button' id='button-option-berita'>Apply</button></div>";
          }
          if (status === "admin" || status === "member"){
          html += "<div class='table-data-berita' id='table-data-berita'></div>";
          html += "<div class='button-prev-next'><button id='prev' disabled=''><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M10.957,12.354a.5.5,0,0,1,0-.708l4.586-4.585a1.5,1.5,0,0,0-2.121-2.122L8.836,9.525a3.505,3.505,0,0,0,0,4.95l4.586,4.586a1.5,1.5,0,0,0,2.121-2.122Z'></path></svg><span>Prev</span></button><button id='next' disabled=''><span>Next</span><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z'></path></svg></button></div>";
          html += "</div>";
          }
          if (status === "admin"){
          html += "<div class='box-menu-opton-wrap' id='html-upload-berita'></div>";
          }
          html += "</div>";
          html += "</div>";
          html += "</div>";
          html += "</div>";
          html += "<div class='box-setting'>";
          html += "<div class='button-option'>";
          html += "<button class='option active' data-id='show-profile' role='button'>Profile</button>";
          html += "<button class='option' data-id='show-password' role='button'>Ganti Password</button>";
          html += "</div>";
          html += "<div class='box-form' id='show-profile'>";
          html += "<form class='form-profile' data-id='"+id+"'>";
          html += "<div class='dataform'>";
          html += "<label for='nama'>Nama Lengkap</label>";
          html += "<input id='nama' placeholder='Nama Lengkap' value='"+nama+"' type='text'/>";
          html += "</div>";
          html += "<div class='dataform'>";
          html += "<label for='nomorhp'>Nomor Whatsapp</label>";
          html += "<input id='nomorhp' placeholder='Nomor Whatsapp' value='"+nomor+"' type='number'/>";
          html += "</div>";
          html += "<div class='loading loading-profile center'></div>";
          html += "<button class='button' role='button' type='submit'>";
          html += "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' xml:space='preserve'><g><circle cx='256' cy='298.667' r='42.667'/><path d='M480.768,87.936l-56.704-56.704c-5.674-5.585-11.957-10.515-18.731-14.699V64   c-0.071,58.881-47.786,106.596-106.667,106.667h-85.333C154.452,170.596,106.737,122.881,106.667,64V0   C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.215,47.786,511.93,106.667,512h298.667   C464.214,511.93,511.93,464.215,512,405.334V163.35C512.08,135.049,500.833,107.893,480.768,87.936z M256,384   c-47.128,0-85.333-38.205-85.333-85.333s38.205-85.333,85.333-85.333s85.333,38.205,85.333,85.333S303.128,384,256,384z'/><path d='M213.333,128h85.333c35.346,0,64-28.654,64-64V1.366c-4.638-0.756-9.32-1.212-14.016-1.365H149.333v64   C149.333,99.346,177.987,128,213.333,128z'/></g></svg>";
          html += "<span>SIMPAN</span>";
          html += "</button>";
          html += "</form>";
          html += "</div>";
          html += "<div class='box-form' id='show-password' style='display:none'>";
          html += "<form class='form-password'>";
          html += "<div class='dataform'>";
          html += "<label for='password'>Password Lama</label>";
          html += "<input id='password' placeholder='Masukan Password Lama Disini' type='password'/>";
          html += "<span class='show-password' id='show-hide-password'>";
          html += "<svg class='icon-hidden hidden' viewBox='0 0 24 24'><path d='M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z' fill='currentColor'></path></svg>";
          html += "<svg class='icon-show' viewBox='0 0 24 24'><path d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z' fill='currentColor'></path></svg>";
          html += "</span>";
          html += "</div>";
          html += "<div class='dataform'>";
          html += "<label for='currectpassword'>Password Baru</label>";
          html += "<input id='currectpassword' placeholder='Masukan Password Baru Disini' type='password'/>";
          html += "<span class='show-password' id='show-hide-currectpassword'>";
          html += "<svg class='icon-hidden hidden' viewBox='0 0 24 24'><path d='M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z' fill='currentColor'></path></svg>";
          html += "<svg class='icon-show' viewBox='0 0 24 24'><path d='M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z' fill='currentColor'></path></svg>";
          html += "</span>";
          html += "</div>";
          html += "<div class='loading loading-password center'></div>";
          html += "<button class='button' role='button' type='submit'>";
          html += "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' xml:space='preserve'><g><circle cx='256' cy='298.667' r='42.667'/><path d='M480.768,87.936l-56.704-56.704c-5.674-5.585-11.957-10.515-18.731-14.699V64   c-0.071,58.881-47.786,106.596-106.667,106.667h-85.333C154.452,170.596,106.737,122.881,106.667,64V0   C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.215,47.786,511.93,106.667,512h298.667   C464.214,511.93,511.93,464.215,512,405.334V163.35C512.08,135.049,500.833,107.893,480.768,87.936z M256,384   c-47.128,0-85.333-38.205-85.333-85.333s38.205-85.333,85.333-85.333s85.333,38.205,85.333,85.333S303.128,384,256,384z'/><path d='M213.333,128h85.333c35.346,0,64-28.654,64-64V1.366c-4.638-0.756-9.32-1.212-14.016-1.365H149.333v64   C149.333,99.346,177.987,128,213.333,128z'/></g></svg>";
          html += "<span>GANTI PASSWORD</span>";
          html += "</button>";
          html += "</form>";
          html += "</div>";
          html += "</div>";
          }
          html += "</div>";
       element.innerHTML = html;
      
       var htmlUser = document.getElementById("table-data-user");
       if (htmlUser) {
          setupDatauser(user, status);
       }
      
       var htmlBerita = document.getElementById("html-upload-berita");
       if (htmlBerita) {
          setupUploadberita(user, htmlBerita, status);
       }

       var htmlMember = document.getElementById("html-daftar-member");
       if (htmlMember) {
          setupdaftarMember(user, htmlMember, status);
       }
     
       var htmltableBerita = document.getElementById("table-data-berita");
       if (htmltableBerita) {
          setupListberita(status, iduser);
       }

       var buttonLogout = document.querySelector("#button-logout");
       if (buttonLogout) {
          buttonLogout.addEventListener("click", function(event) {
             event.preventDefault();
             auth.signOut().then(() => {
                 notification(berhasil + "Akun berhasil logout");
             }).catch((error) => {
                notification(gagal + "Gagal Logout, Silahkan refresh dan coba lagi");
             });
             return false;
          });
       };

       document.querySelectorAll(".menu-option-wrap button").forEach(function(button) {
         button.addEventListener("click", function(event) {
           event.preventDefault();
           document.querySelectorAll(".box-menu-opton-wrap").forEach(function(event){
             event.style.display = "none";
           });
           var id = this.getAttribute("data-id");
           this.closest(".menu-option-wrap").querySelectorAll(".upgrade-account").forEach(function(option) {
             option.classList.remove("active");
           });
           this.classList.add("active");
           document.getElementById(id).style.display = "block";
           return false;
         });
       });

       document.querySelectorAll(".box-setting .button-option button").forEach(function(button) {
         button.addEventListener("click", function(event) {
           event.preventDefault();
           document.getElementById("show-profile").style.display = "none";
           document.getElementById("show-password").style.display = "none";
           var id = this.getAttribute("data-id");
           this.closest(".button-option").querySelectorAll(".option").forEach(function(option) {
             option.classList.remove("active");
           });
           this.classList.add("active");
           document.getElementById(id).style.display = "block";
           return false;
         });
       });

       document.getElementById("show-hide-password").addEventListener("click", function(event) {
         event.preventDefault();
         this.querySelector(".icon-hidden").classList.toggle("hidden");
         this.querySelector(".icon-show").classList.toggle("hidden");
         showPassword("#password");
         return false;
       });

       document.getElementById("show-hide-currectpassword").addEventListener("click", function(event) {
         event.preventDefault();
         this.querySelector(".icon-hidden").classList.toggle("hidden");
         this.querySelector(".icon-show").classList.toggle("hidden");
         showPassword("#currectpassword");
         return false;
       });

       document.querySelector("#show-profile .form-profile").addEventListener("submit", function(event) {
         event.preventDefault(); // Mencegah form dari reload halaman saat submit
         var id = this.getAttribute("data-id");
         var nama = document.getElementById("nama").value;
         var nomor = document.getElementById("nomorhp").value;
         document.querySelector(".loading-profile").style.display = "block";
         user.updateProfile({
           displayName: nama
         });
         db.collection("datauser").doc(id).update({
           nama: nama,
           hp: nomor
         }).then(() => {
           document.querySelector(".loading-profile").style.display = "none";
           notification(berhasil + " Berhasil! Data berhasil diupdate");
           setTimeout(function() {
             window.location.href = urlDashboard;
           }, 3000);
         }).catch((e) => {
           document.querySelector(".loading-profile").style.display = "none";
           notification(gagal + " Gagal! Data gagal diupdate");
         });
         return false;
       });

       document.querySelector(".card-profile-image .upload").addEventListener("change", function(event) {
         event.preventDefault();
         var id = document.querySelector("#show-profile .form-profile").getAttribute("data-id");
         var file = this.files[0];
         var fr = new FileReader();
         fr.readAsArrayBuffer(file);
         notification(gagal + "Menunggu Foto dalam proses upload");
         fr.onload = function(f) {
           var newName = file.name;
           var orgName = file.name;
           if (orgName.includes(".")) {
             var orgExt = orgName.split(".").pop();
             if (orgExt !== newName.split(".").pop()) {
               newName = newName ? `${newName}.${orgExt}` : orgName;
             }
           }
           var qs = new URLSearchParams({ filename: newName, mimeType: file.type });
           fetch(`${googleSheet}?${qs}`, {
             method: "POST",
             body: JSON.stringify([...new Int8Array(f.target.result)])
           })
           .then(res => res.json())
           .then(e => {
             var idDrive = e.fileId;
             var foto = 'https://lh3.googleusercontent.com/u/0/d/' + idDrive;
             user.updateProfile({
               photoURL: foto
             });
             db.collection("datauser").doc(id).update({
               foto: foto
             }).then(() => {
               notification(berhasil + " Berhasil! Foto Profile berhasil diupdate");
               setTimeout(function() {
                 window.location.href = urlDashboard;
               }, 3000);
             }).catch((e) => {
               notification(gagal + " Gagal! Foto Profile gagal diupdate");
             });
           })
           .catch(err => console.log(err));
         };
         return false;
       });

       document.querySelector("#show-password .form-password").addEventListener("submit", function(event) {
         event.preventDefault();
         var password = document.getElementById("password").value;
         var cpassword = document.getElementById("currectpassword").value;
         if (password === "") {
           notification(gagal + "Password wajib diisi");
           return false;
         } else if (cpassword === "") {
           notification(gagal + "Ulangi password wajib diisi");
           return false;
         } else {
           document.querySelector(".loading-password").style.display = "block";
           var credential = firebase.auth.EmailAuthProvider.credential(
             user.email,
             password
           );
           user.reauthenticateWithCredential(credential).then(function() {
             user.updatePassword(cpassword).then(function() {
               document.querySelector(".loading-password").style.display = "none";
               notification(berhasil + "Berhasil! Password berhasil diganti");
             }).catch(function(error) {
               document.querySelector(".loading-password").style.display = "none";
               notification(gagal + "Gagal! Terjadi Error");
             });
           }).catch(function(error) {
             document.querySelector(".loading-password").style.display = "none";
             notification(gagal + "Gagal! Password lama tidak sesuai");
           });
           return false;
         }
       });

         }
       });
}

//Akses Setelah Login
auth.onAuthStateChanged((user) => {
   var dashboard = document.getElementById("content-dashboard");
   var dataPrint = document.getElementById("content-print");
   var settings = document.getElementById("html-setting");
   var akun = document.getElementById("signin-button");
   if (user) {
    // bila login
    var uid = user.uid;
    var nama = user.displayName;
    var email = user.email;
    var foto = user.photoURL;
    var timeakun = user.metadata.creationTime;
    var lastlogin = user.metadata.lastSignInTime;
    if (akun){
        var html = "<style>#header-outer, .main-content .main-blog, #footer-outer{display: none !important;}</style><div class='main-wrapper-content'><div class='box-chart'><p class='none center'>Anda Sudah Login, Tunggu 5 detik laman akan dialihkan ke halaman utama. Jika setelah 5 detik belum dialihkan Anda bisa klik Tombol Dashboard</p><button class='post-body center' style='display:flex;align-items:center'><a class='link-button' href='"+urlDashboard+"'>Dashboard</a></button></div></div>";
        document.querySelector(".main-wrapper").innerHTML = html;
    }
    if (dashboard) {
       var element = dashboard;
       setupDashboard(user, uid, timeakun, lastlogin, element);
    }
    db.collection("datauser").where("email", "==", user.email).get().then(function(data) {
         if (data.docs[0] == undefined) {
         } else {
          var id = data.docs[0].id;
          var data = data.docs[0].data();
          var iduser = data.id;
          var nama = data.nama;
          var nomor = data.hp;
          var email = data.email;
          var status = data.status;
          var formcheckout = document.querySelector(".form-checkout");
          if (formcheckout) {
            formcheckout.setAttribute("data-id", iduser);
            formcheckout.querySelector("#name").value = nama;
            formcheckout.querySelector("#nomor").value = nomor;
            formcheckout.querySelector("#email").value = email;
          }
          var formdaftar = document.querySelector(".form-daftar-member");
          if (formdaftar) {
            formdaftar.querySelector("#data-name").value = nama;
            formdaftar.querySelector("#data-nomor").value = nomor;
            formdaftar.querySelector("#data-email").value = email;
          }
          document.querySelectorAll('.toggle-menu-profile').forEach(function(checkmenu){
           var listmenu;
           var listmenu = `
          <li class='button-dashboard'>
            <svg viewBox='0 0 24 24'>
              <path d='M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z'/>
            </svg>
            <span class='text'>Dashboard</span>
          </li>
          <li class='button-logout'>
            <svg viewBox='0 0 24 24'>
              <path d='M15,24H17V22H15M16.56,4.44L15.11,5.89C16.84,6.94 18,8.83 18,11A6,6 0 0,1 12,17A6,6 0 0,1 6,11C6,8.83 7.16,6.94 8.88,5.88L7.44,4.44C5.36,5.88 4,8.28 4,11A8,8 0 0,0 12,19A8,8 0 0,0 20,11C20,8.28 18.64,5.88 16.56,4.44M13,2H11V12H13M11,24H13V22H11M7,24H9V22H7V24Z'/>
            </svg>
            <span class='text'>Logout</span>
          </li>  
   `;
             checkmenu.innerHTML = listmenu;
             var buttonDashboard = checkmenu.querySelector(".button-dashboard");
             if (buttonDashboard) {
                buttonDashboard.addEventListener("click", function(event){
                    event.preventDefault();
                    window.location.href = urlDashboard;
                });
             }
             var buttonLogout = checkmenu.querySelector(".button-logout");
             if (buttonLogout) {
                buttonLogout.addEventListener("click", function(event){
                    event.preventDefault();
                    auth.signOut().then(() => {
                        notification(berhasil + "Akun berhasil logout");
                    }).catch((error) => {
                       notification(gagal + "Gagal Logout, Silahkan refresh dan coba lagi");
                    });
                    return false;
                });
             }
          });
         }
     });
   // penutup bila login
   } else {
   // bila belum login
   if (dashboard || settings) {
       window.location.href = "/";
   }
   // pentutup bila belum login
   }
});
//]]>
