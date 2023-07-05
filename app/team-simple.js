const teamNav = document.getElementById('team-nav');
const memberWrap = document.querySelector('#simple-team');
let membersHTML = '';

const memberCats = [];
teamMemebers.map(item => {
    // creating array for making navigation 
    let designation = item.designation.toLowerCase();
    if(!memberCats.includes(designation)){
        memberCats.push(designation);
    }

    membersHTML += `
    <div class="col-12 col-sm-6 col-lg-3 isotope-item ${designation}">
        <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
            <span class="thumb-info-wrapper">
            <a href="about-me.html">
                <img src="${item.photo}" class="img-fluid" alt="" />
                <span class="thumb-info-title">
                <span class="thumb-info-inner">${item.name}</span>
                <span class="thumb-info-type">${item.designation}</span>
                </span>
            </a>
            </span>
            <span class="thumb-info-caption">
            <span class="thumb-info-caption-text"
                >${item.bio}</span
            >
            <span class="thumb-info-social-icons mb-4">
                ${item.social.map(sitem => {
                    return `<a href="${sitem.url}"
                    ><i class="fab ${sitem.icon}"></i
                    ><span>Linkedin</span></a
                    >`;
                })}
                
            </span>
            </span>
        </span>
    </div>
    `;

});
// output the html 
memberWrap.innerHTML = membersHTML;

// Creating Team Member Nav 
memberCats.map(item => {
    let navItem = document.createElement('li');
    navItem.setAttribute('data-option-value', '.'+item);
    navItem.innerHTML = `<a class="nav-link text-1 text-uppercase" href="#">${item}</a>`
    teamNav.appendChild(navItem);
})