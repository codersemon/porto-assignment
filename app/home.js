// slider wrap selector
const sliderWrap = document.querySelector(".owl-stage");

let sliderHTML = "";

heroSlides.forEach((item) => {
  sliderHTML += `
    <div
class="owl-item position-relative"
style="
  background-image: url(${item.image});
  background-color: #2e3136;
  background-size: cover;
  background-position: center;
"
>
<div class="container position-relative z-index-1 h-100">
  <div
    class="d-flex flex-column align-items-center justify-content-center h-100"
  >
    <h3
      class="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
      data-appear-animation="fadeInDownShorter"
      data-plugin-options="{'minWindowWidth': 0}"
    >
      <span
        class="position-absolute right-100pct top-50pct transform3dy-n50"
      >
        <img
          src="https://www.okler.net/previews/porto/9.9.3/img/slides/slide-title-border.png"
          class="w-auto appear-animation"
          data-appear-animation="fadeInLeftShorter"
          data-appear-animation-delay="250"
          data-plugin-options="{'minWindowWidth': 0}"
          alt=""
        />
      </span>
      ${item.sub_title}
      <span
        class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3"
      >
        <img
          src="https://www.okler.net/previews/porto/9.9.3/img/slides/slide-title-border.png"
          class="w-auto appear-animation"
          data-appear-animation="fadeInRightShorter"
          data-appear-animation-delay="250"
          data-plugin-options="{'minWindowWidth': 0}"
          alt=""
        />
      </span>
    </h3>
    <h1
      class="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
      data-appear-animation="blurIn"
      data-appear-animation-delay="500"
      data-plugin-options="{'minWindowWidth': 0}"
    >
      ${item.title}
    </h1>
    <p
      class="text-4 text-color-light font-weight-light opacity-7 mb-0"
      data-plugin-animated-letters
      data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0}"
    >
      ${item.description}
    </p>
  </div>
</div>
</div>
    `;
});

sliderWrap.innerHTML = sliderHTML;

/************************
 * Features List - start
 ***********************/
let featuresHTML = "";
const featuresOut = document.querySelector(".feature-list");

features.forEach((item) => {
  featuresHTML += `
  <div class="col-sm-6">
<div class="feature-box feature-box-style-2">
  <div class="feature-box-icon">
    <i class="icons ${item.icon} text-color-primary"></i>
  </div>
  <div class="feature-box-info">
    <h4 class="font-weight-bold text-4-5 mb-1">
      ${item.title}
    </h4>
    <p class="mb-4">
      ${item.desc}
    </p>
  </div>
</div>
</div>
  `;
});
featuresOut.innerHTML = featuresHTML;

/**********************
 * Features List - end
 *********************/

/**********************
 * FAQs List - start
 *********************/
const faqOut = document.querySelector("#accordion");
let faqHTML = "";

faqs.forEach((item) => {
  let show = "";
  if (item.id == 1) {
    show = "show";
  }
  faqHTML += `
  <div class="card card-default">
                  <div class="card-header">
                    <h4 class="card-title m-0">
                      <a
                        class="accordion-toggle text-color-dark font-weight-bold"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse-${item.id}"
                      >
                        <i class="icons ${item.icon} text-color-primary"></i>
                        ${item.title}
                      </a>
                    </h4>
                  </div>
                  <div id="collapse-${item.id}" class="collapse ${show}">
                    <div class="card-body text-2">
                      <p>
                        ${item.des}
                      </p>
                    </div>
                  </div>
                </div>
  `;
});
faqOut.innerHTML = faqHTML;
/**********************
 * FAQs List - end
 *********************/

/*********************
 * Partners - start
 *********************/
const partnersOut = document.querySelector(".partners-wrap");
let partnersHTML = "";

partners.forEach((item) => {
  partnersHTML += `
  <div>
    <img class="img-fluid" src="${item.img}" alt="" />
  </div>
  `;
});
partnersOut.innerHTML = partnersHTML;
/*********************
 * Partners - end
 *********************/

/*********************
 * Blogs - start
 *********************/
const blogOut = document.querySelector("#blog-wrap");
let blogHTML = "";
const monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

blogs.forEach(item => {
  let dateObj = new Date(item.date);
  
  blogHTML += `
    <div class="col-lg-6 mb-4 mb-lg-0">
    <article>
      <div class="row">
        <div class="col-auto pr-0">
          <div class="date">
            <span class="day font-weight-extra-bold">${dateObj.getDate()}</span>
            <span class="month text-1">${monthName[dateObj.getMonth()]}</span>
          </div>
        </div>
        <div class="col pl-1">
          <h4 class="text-primary text-4">
            <a class="d-block" href="${item.url}"
              >${item.title}</a
            >
          </h4>
          <p class="pr-4 mb-0">
            ${item.content}
          </p>
          <a
            href="${item.url}"
            class="read-more text-color-dark font-weight-semibold text-2"
            >read more
            <i class="fas fa-angle-right position-relative top-1 ml-1"></i
          ></a>
        </div>
      </div>
    </article>
  </div>
  `;

})
blogOut.innerHTML = blogHTML;
/*********************
 * Blogs - end
 *********************/

/*********************
 * Testimonial - start
 *********************/
const testiOut = document.querySelector(".testi-wrap");
let testiHTML = "";

testimonials.forEach(item => {
  testiHTML += `
  <div>
  <div class="col">
    <div class="testimonial testimonial-primary">
      <blockquote>
        <p class="mb-0">
          ${item.quote}
        </p>
      </blockquote>
      <div class="testimonial-arrow-down"></div>
      <div class="testimonial-author">
        <div class="testimonial-author-thumbnail">
          <img src="${item.img}" class="rounded-circle" alt="" />
        </div>
        <p>
          <strong>${item.name}</strong>
          <span>${item.designation}</span>
        </p>
      </div>
    </div>
  </div>
</div>
  `;
});
testiOut.innerHTML = testiHTML;

/*********************
 * Testimonial - end
 *********************/

console.log(3%2);