
const menuBars = $('#menu-bars');
const overlay =$('#overlay');
const nav1 = $('#nav-1');
const nav2 = $('#nav-2');
const nav3 = $('#nav-3');
const nav4 = $('#nav-4');
const nav5 = $('#nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    if (nav.hasClass(`slide-${direction1}-${i + 1}`)) {
      nav.removeClass(`slide-${direction1}-${i + 1}`)
      nav.addClass( `slide-${direction2}-${i + 1}`);
    }
  });
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.toggleClass('change');
  // Toggle: Menu Active
  overlay.toggleClass('overlay-active');
  if (overlay.hasClass('overlay-active')) {
    // Animate In - Overlay
    overlay.removeClass('overlay-slide-left');
    overlay.addClass( 'overlay-slide-right');
    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.removeClass('overlay-slide-right');
    overlay.addClass( 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}

// Event Listeners
menuBars.click(toggleNav)
navItems.forEach((nav) => {
  nav.click( toggleNav);
});
