const closeModal = document.querySelector(".cancel");
const ModalWrapper = document.querySelector(".modal-box--wrapper");
const courses = document.querySelectorAll(".courses .course");

courses.forEach((course) => {
  course.addEventListener("click", () => {
    ModalWrapper.classList.add("active");
  });
});

closeModal.addEventListener("click", () =>
  ModalWrapper.classList.remove("active")
);
