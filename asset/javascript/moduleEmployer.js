function showPostForm(){
    var BtnPost = document.querySelector('#post-btn');
        var postForm = document.querySelector('.modal-post');
        var btnClose = document.querySelector('.modal-close');
        BtnPost.addEventListener('click', function () {
            postForm.style = "visibility:active";
        })

        btnClose.addEventListener('click', function () {
            postForm.style.display = "none";
        });
}

function logout(){
    var btnlogout = document.getElementById('btn-logout');
    btnlogout.addEventListener('click', function show() {
        var configrmation = document.querySelector('.modal-logout');
        configrmation.style = "visibility: active";
    })

    var btnYes = document.querySelector('#no-btn')
    btnYes.addEventListener('click', function hideLogoutConfirmation() {
        var confirmation = document.querySelector('.modal-logout');
        confirmation.style = 'visibility: hidden';
    })

    var btnNo = document.querySelector('#yes-btn');
    btnNo.addEventListener('click', logout)
    function logout() {
        window.location.href = "/JobsGO/login.html"
    }
}

//Thay đổi trạng thái hoạt động của doanh nghiệp
function ToggleSwitchStatus(){
    var selectionStatus = document.getElementById("switch-status");
    var statusOn = document.getElementById('status-name-on');
    var statusOff = document.getElementById('status-name-off');
    selectionStatus.addEventListener('click', function () {
        if (selectionStatus.checked == true) {
            statusOff.style.display = 'none';
            statusOn.style.display = 'inline';
        } else {
            statusOff.style.display = 'inline';
            statusOn.style.display = 'none';
        }
    })
}
//------------------------------Chuyển đổi form khi chọn list các chức năng----------------------------------
function ConvertForm(){
  // Click chọn thông tin doanh nghiệp
  var clickInforEmployer = document.querySelector('#btn-employer');
  var EmployerForm = document.querySelector('.information-Employer')

  clickInforEmployer.addEventListener('click', function () {
      AccountForm.style.display = 'none';
      chanePassForm.style.display = "none";
      // listPostForm.style.display = 'none';
      EmployerForm.style.display = "block";
  })

  //  Click chọn thông tin tài khoản
  var btnInforAccount = document.querySelector('#js-infor-account');
  var AccountForm = document.querySelector('.information-account-form');

  btnInforAccount.addEventListener('click', function () {
      EmployerForm.style.display = "none";
      chanePassForm.style.display = "none";
      // listPostForm.style.display = 'none';
      AccountForm.style.display = 'block';
  });

  // Chọn form đổi mật khẩu
  var chanePassForm = document.querySelector('.changePassword-form');
  var btnChangePass = document.querySelector('#js-change-password');

  btnChangePass.addEventListener('click', function () {
      EmployerForm.style.display = "none";
      AccountForm.style.display = 'none';
      // listPostForm.style.display = 'none';
      chanePassForm.style.display = "block";
  });

  var btnCadidate = document.querySelector('#js-btn-candidate');
  //Click chọn Danh sách các JOB
  var listPostForm = document.getElementsByClassName('post-management-form');
  var btnListJobs = document.getElementById('js-btn-list-jobs');
  btnCadidate.addEventListener('click',function(){
      EmployerForm.style.display = "none";
      AccountForm.style.display = 'none';
      chanePassForm.style.display = "none";
      listPostForm.style.display = "block";
  })
  
}
//------ KHÓA - MỞ BÀI VIẾT----------------- 
function openlockPost(){
    var btnLockPost = getElementById('btn-lock');
    var iconOpen = querySelector('#js-post-open');
    var iconLock = querySelector('#js-post-lock');
    btnLockPost.addEventListener('click', function () {
        if (iconLock.style.display = "none") {
            iconOpen.style.display = "none"
            iconLock.style.display = "inline"
        } else {
            iconOpen.style.display = "inline"
            iconLock.style.display = "none"
        }
    })
}