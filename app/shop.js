// init tag list
const tagList = [];
// init category list
const catList = [];

// product html markup init
let productHTML = "";
// output selector
const output = document.querySelector(".product-thumb-info-list");

// aside category markup
let asideCat = "";
// category output selection
const catOut = document.querySelector(".aside-category");

// run loop on all products
products.forEach((item) => {
  // init discount percentage
  let discount = 0;
  //   if have sale price
  if (item.sale_price) {
    discount =
      ((item.regular_price - item.sale_price) / item.regular_price) * 100;
  }

  // push if not available in tagList
  if (!tagList.includes(...item.tags)) {
    tagList.push(...item.tags);
  }

  // push if not available in catList
  if (!catList.includes(...item.category)) {
    catList.push(...item.category);
  }

  productHTML += `
  <div class="col-sm-6 col-lg-4">
<div class="product mb-0">
<div class="product-thumb-info border-0 mb-3">
<div class="product-thumb-info-badges-wrapper"><span class="badge badge-ecommerce badge-success">${item.label.toUpperCase()}</span>
</div>
<div class="addtocart-btn-wrapper">
<a href="shop-cart.html" class="text-decoration-none addtocart-btn" data-tooltip data-original-title="Add to Cart">
<i class="icons icon-bag"></i>
</a>
</div>
<a href="ajax/shop-product-quick-view.html" class="quick-view text-uppercase font-weight-semibold text-2">
QUICK VIEW
</a>
<a href="shop-product-sidebar-left.html">
<div class="product-thumb-info-image">
<img alt="" class="img-fluid" src="${item.thumbnail}">
</div>
</a>
</div>
<div class="d-flex justify-content-between">
<div>
<a href="#" class="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1">${item.category.join(
    ", "
  )}</a>
<h3 class="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"><a href="shop-product-sidebar-right.html" class="text-color-dark text-color-hover-primary">Photo Camera</a></h3>
</div>
<a href="#" class="text-decoration-none text-color-default text-color-hover-dark text-4"><i class="far fa-heart"></i></a>
</div>
<div title="Rated 5 out of 5">
<input type="text" class="d-none" value="5" title="" data-plugin-star-rating data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}">
</div>
<p class="price text-5 mb-3">
<span class="sale text-color-dark font-weight-semi-bold">$${
    item.sale_price
  }</span>
<span class="amount">$${item.regular_price}</span>
</p>
</div>
</div>
  `;
});

catList.forEach((item) => {
  asideCat += `
  <li class="nav-item">
  <a class="nav-link" href="#">${item.toUpperCase()}</a>
  </li>
  `;
});

let tagHTML = "";
const tagOut = document.querySelector('.tag-wrap');
tagList.forEach((item) => {
  tagHTML += `
  <a href="#"><span
  class="badge badge-dark badge-sm badge-pill text-uppercase px-2 py-1 mr-1"
  >${item.toUpperCase()}</span></a>
  `;
});

output.innerHTML = productHTML;
catOut.innerHTML = asideCat;
tagOut.innerHTML = tagHTML;
