$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("#mobile-menu").toggleClass("hidden");
  });
});

//  SLIDER FILTER PRODUCT
$(document).ready(function () {
  // Swiper for interior Exterior
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 20,
    // centeredSlides: true,
    navigation: {
      // nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop: true,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  // Show all products in both sections initially
  $(".product").show();

  // Filter products based on Interior/Eksterior dropdown selection
  $("#DesignTab").change(function () {
    var category = $(this).val();
    filterDesignProducts(category);
  });

  // Filter products based on Interior/Eksterior tab clicks
  $(".design-tab").click(function (e) {
    e.preventDefault();
    var category = $(this).data("category");
    $("#DesignTab").val(category); // Sync dropdown value with tab
    filterDesignProducts(category);
  });

  function filterDesignProducts(category) {
    $(".product.eksterior-design, .product.interior-design").each(function () {
      if (category === "all" || $(this).hasClass(category)) {
        $(this).show(); // Show product
      } else {
        $(this).hide(); // Hide product
      }
    });
  }

  // Filter products based on Furniture dropdown selection
  $("#FurnitureTab").change(function () {
    var category = $(this).val();
    filterFurnitureProducts(category);
  });

  // Filter products based on Furniture tab clicks
  $(".furniture-tab").click(function (e) {
    e.preventDefault();
    var category = $(this).data("category");
    $("#FurnitureTab").val(category); // Sync dropdown value with tab
    filterFurnitureProducts(category);
  });

  function filterFurnitureProducts(category) {
    $(
      ".product.homeliving, .product.bathroom, .product.houseware, .product.kitchenware, .product.mattresses"
    ).each(function () {
      if (category === "all" || $(this).hasClass(category)) {
        $(this).show(); // Show product
      } else {
        $(this).hide(); // Hide product
      }
    });
  }
});

// SLIDER HOME
$(document).ready(function () {
  let currentSlide = 0;
  const slides = $(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    const offset = index * -100; // Move by 100% for each slide
    $(".slider").css("transform", `translateX(${offset}%)`);
  }

  $("#next").click(function () {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop to first after last
    showSlide(currentSlide);
  });

  $("#prev").click(function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop to last after first
    showSlide(currentSlide);
  });

  // Show the first slide initially
  showSlide(currentSlide);
});

// Slider Project
const projects = [
  {
    title: "Project Custom Interior Co-Working Office Island",
    description:
      "Temukan berbagai pilihan dari projek kami untuk desain interior,eksterior dan furniture Anda.",
    image: "/src/asset/Project/project1.png",
    images: [
      "/src/asset/eksterior dan interior/projectofficeisland/1.png",
      "/src/asset/eksterior dan interior/projectofficeisland/2.png",
      "/src/asset/eksterior dan interior/projectofficeisland/3.png",
      "/src/asset/eksterior dan interior/projectofficeisland/4.png",
      "/src/asset/eksterior dan interior/projectofficeisland/5.png",
      "/src/asset/eksterior dan interior/projectofficeisland/6.png",
      "/src/asset/eksterior dan interior/projectofficeisland/7.png",
      "/src/asset/eksterior dan interior/projectofficeisland/8.png",
      "/src/asset/eksterior dan interior/projectofficeisland/9.png",
      "/src/asset/eksterior dan interior/projectofficeisland/10.png",
      "/src/asset/eksterior dan interior/projectofficeisland/11.png",
      "/src/asset/eksterior dan interior/projectofficeisland/12.png",
    ],
  },
  {
    title: "Project Custom Interior Mr.R",
    description:
      "Temukan berbagai pilihan dari projek kami untuk desain interior,eksterior dan furniture Anda.",
    image: "/src/asset/Project/project2.png",
    images: [
      "/src/asset/eksterior dan interior/projectcustominteriormr.r/1.png",
      "/src/asset/eksterior dan interior/projectcustominteriormr.r/2.png",
      "/src/asset/eksterior dan interior/projectcustominteriormr.r/3.png",
      "/src/asset/eksterior dan interior/projectcustominteriormr.r/4.png",
      "/src/asset/eksterior dan interior/projectcustominteriormr.r/5.png",
      "/src/asset/eksterior dan interior/projectcustominteriormr.r/6.png",
      "/src/asset/eksterior dan interior/projectcustominteriormr.r/7.png",
    ],
  },
  {
    title: "Project Custom Interior Office BC 2",
    description:
      "Temukan berbagai pilihan dari projek kami untuk desain interior,eksterior dan furniture Anda.",
    image: "/src/asset/Project/project3.png",
    images: [
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/1.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/2.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/3.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/4.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/5.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/6.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/7.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/8.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/9.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/10.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/11.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/12.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/13.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/14.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficebc2/15.png",
    ],
  },
  {
    title: "Project Kitchen Space Mr. F",
    description:
      "Temukan berbagai pilihan dari projek kami untuk desain interior, eksterior dan furniture Anda.",
    image: "/src/asset/Project/project4.png",
    images: [
      "/src/asset/eksterior dan interior/projectkitchenmrf/1.png",
      "/src/asset/eksterior dan interior/projectkitchenmrf/2.png",
      "/src/asset/eksterior dan interior/projectkitchenmrf/3.png",
      "/src/asset/eksterior dan interior/projectkitchenmrf/4.png",
      "/src/asset/eksterior dan interior/projectkitchenmrf/5.png",
      "/src/asset/eksterior dan interior/projectkitchenmrf/6.png",
      "/src/asset/eksterior dan interior/projectkitchenmrf/7.png",
      "/src/asset/eksterior dan interior/projectkitchenmrf/8.png",
      "/src/asset/eksterior dan interior/projectkitchenmrf/9.png",
    ],
  },
  {
    title: "Project Custom Interior Office B",
    description:
      "Temukan berbagai pilihan dari projek kami untuk desain interior,eksterior dan furniture Anda.",
    image: "/src/asset/Project/project5.png",
    images: [
      "/src/asset/eksterior dan interior/projectcustom interiorofficeb/1.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficeb/2.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficeb/3.png",
      "/src/asset/eksterior dan interior/projectcustom interiorofficeb/4.png",
    ],
  },
  {
    title: "Project Custom Interior Barbershop Artology",
    description:
      "Temukan berbagai pilihan dari projek kami untuk desain interior,eksterior dan furniture Anda.",
    image: "/src/asset/Project/project6.png",
    images: [
      "/src/asset/eksterior dan interior/projectcustombarber/1.png",
      "/src/asset/eksterior dan interior/projectcustombarber/2.png",
      "/src/asset/eksterior dan interior/projectcustombarber/3.png",
      "/src/asset/eksterior dan interior/projectcustombarber/4.png",
      "/src/asset/eksterior dan interior/projectcustombarber/5.png",
    ],
  },
  {
    title: "Project Custom Interior Barbar Wells",
    description:
      "Temukan berbagai pilihan dari projek kami untuk desain interior,eksterior dan furniture Anda.",
    image: "/src/asset/Project/project7.png",
    images: [
      "/src/asset/eksterior dan interior/projectcustombarbarwalls/1.png",
      "/src/asset/eksterior dan interior/projectcustombarbarwalls/2.png",
    ],
  },
];

// Function to generate project sections
function generateProjects() {
  const container = document.getElementById("projectsContainer");
  projects.forEach((project, index) => {
    const projectHTML = `
        <hr class="border-t-2 border-neutral-500">
        <div class="flex justify-between flex-col-reverse sm:flex-row">
            <div class="py-2 sm:p-6">
                <h2 class="text-left text-2xl sm:text-4xl font-semibold text-neutral-700 py-4">${project.title}</h2>
                <p class="text-neutral-400 text-base py-2 mb-5">${project.description}</p>
                <button onclick="openProjectModal(${index})" class="px-6 border border-orange-400 rounded-lg hover:text-neutral-700 font-semibold text-orange-400 py-2">Lihat Projek</button>
            </div>
            <div class="mx-auto justify-center items-center flex w-fit">
                <img src="${project.image}" alt="">
            </div>
        </div>
    `;
    container.insertAdjacentHTML("beforeend", projectHTML);
  });
}

// Open modal function
function openProjectModal(index) {
  const project = projects[index];
  const modalTitle = document.getElementById("modalTitle");
  const swiperWrapper = document.getElementById("swiperWrapper");

  // Clear existing slides
  swiperWrapper.innerHTML = "";

  // Set modal title
  modalTitle.textContent = project.title;

  // Populate the swiper with project images
  project.images.forEach((image) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `<img src="${image}" alt="${project.title}" class="w-full rounded-lg">`;
    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Show modal
  const modal = document.getElementById("myModal");
  modal.classList.remove("hidden");
}

// Close modal function
const closeModalButton = document.getElementById("closeModal");
closeModalButton.onclick = function () {
  const modal = document.getElementById("myModal");
  modal.classList.add("hidden");
};

// Listen for outside click
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
};

// Generate projects on page load
generateProjects();
