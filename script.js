// To add your real images, upload the named files to /assets/<project>/hero.webp.
// Missing images intentionally display editorial placeholders.
document.querySelectorAll('[data-asset]').forEach(el=>{const url=el.getAttribute('data-asset');const image=new Image();image.onload=()=>{el.style.backgroundImage=`url("${url}")`;el.classList.add('has-image');const placeholder=el.querySelector('.placeholder');if(placeholder)placeholder.style.visibility='hidden'};image.src=url});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
// Replace this with your actual public email address.
const email='anniepng_95@hotmail.com';document.querySelectorAll('[data-email]').forEach(el=>el.href='mailto:'+email);
