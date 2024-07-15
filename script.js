    const toggleBtn = document.querySelector(".sidebar-toggle");
    const closeBtn = document.querySelector(".close-btn");
    const sidebar = document.querySelector(".sidebar");

    toggleBtn.addEventListener("click", function () {

    sidebar.classList.toggle("show-sidebar");
    toggleBtn.classList.toggle("no-bounce");
    });

    closeBtn.addEventListener("click", function () {
      sidebar.classList.remove("show-sidebar");
    toggleBtn.classList.remove("no-bounce");
    });

