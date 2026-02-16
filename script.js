// smooth scroll
document.querySelectorAll("nav a").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
  });
});

// typing animation
const words=["Web Developer","Frontend Developer","Python Developer"];
let i=0,j=0,current="",isDeleting=false;
const typing=document.querySelector(".typing");

function type(){
  current=words[i];
  typing.textContent=current.substring(0,j);

  if(!isDeleting && j<current.length){ j++; setTimeout(type,80);}
  else if(isDeleting && j>0){ j--; setTimeout(type,40);}
  else{
    isDeleting=!isDeleting;
    if(!isDeleting) i=(i+1)%words.length;
    setTimeout(type,800);
  }
}
type();

// animate skill bars on scroll
const spans=document.querySelectorAll(".bar span");
window.addEventListener("scroll",()=>{
  const trigger=window.innerHeight*0.8;
  spans.forEach(span=>{
    const top=span.getBoundingClientRect().top;
    if(top<trigger){
      span.style.width=span.dataset.width;
    }
  });
});
