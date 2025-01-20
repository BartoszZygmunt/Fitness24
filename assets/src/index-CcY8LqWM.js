var j=Object.defineProperty;var B=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var $=(t,e,s)=>B(t,typeof e!="symbol"?e+"":e,s);import{l as a,f as c,m as d,c as q,s as f,a as w,i as u}from"../scrollToTopButton-BoGMg3Td.js";const I=document.querySelector(".wrap-button"),H=document.querySelector(".muscles-list"),R=document.querySelector(".pagination-numbers"),F=document.querySelector(".title-exercises");I.addEventListener("click",Z);document.addEventListener("DOMContentLoaded",()=>{k({filter:"Muscles",page:1,limit:12})});function D(){var t=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),s=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return t+s>=e}async function Z(t){t.preventDefault(),F.innerHTML="Exercises";const{target:e,currentTarget:s}=t;if(e.nodeName!=="BUTTON")return;const i=e.dataset.name;e.classList.contains("btn-filter")&&[...s.children].forEach(o=>{o.firstElementChild.classList.remove("btn-filter-active")}),e.classList.add("btn-filter-active");const n={filter:i,page:1,limit:12};H.innerHTML="",k(n)}async function k(t){document.querySelector(".filter-list-js").classList.remove("exercises_list"),document.querySelector(".form-js").classList.add("hidden-form");try{a.open();const e=await c.getByFilterName(t);a.close();const s=e.results;if(!e||s.length===0){d.error("Przepraszamy, nie znaleziono nic zgodnego z Twoim zapytaniem.");return}H.insertAdjacentHTML("beforeend",_(s)),window.addEventListener("scroll",function(){D()&&(console.log("Strona została załadowana do końca!"),_(s))});const{totalPages:i}=e,n=JSON.stringify({totalPages:i,categoryName:t.filter});localStorage.setItem("infoRequest",n),document.querySelector(".filter-list-js").classList.add("muscles-list"),R.innerHTML="",x(i,t),S(1)}catch(e){console.log(e.message)}}function _(t){return t.map(({filter:s,name:i,imgURL:n})=>{let r=s.toLocaleLowerCase().replaceAll(" ","");return r==="bodyparts"&&(r="bodypart"),`
      <li class="muscles-item" data-name=${i} data-filter=${r}>
      <a href="" class="muscles-link" data-alt="${i}">
        <img loading="lazy" class="muscles-image" src="${n}" alt="${i}" width="290" height="242" >
        <button class="muscles-box-menu">
          <h3 class="muscles-small-title">${q(i)}</h3>
          <p class="muscles-text">${s}</p>
        </button>
      </a>
    </li>
    `}).join("")}const U=document.querySelector(".pagination-numbers"),m=document.querySelector(".filter-list-js"),G=document.querySelector(".title-exercises");m.addEventListener("click",J);async function J(t){t.preventDefault();const{target:e}=t;if(e.nodeName!=="IMG"&e.parentNode.nodeName!=="BUTTON")return;document.querySelector(".form-js").classList.remove("hidden-form");let s,i;try{e.nodeName==="IMG"&&(s=e.parentNode.parentNode.dataset.filter,i=e.alt),(e.nodeName==="P"||e.nodeName==="H3")&&(s=e.parentNode.parentNode.parentNode.dataset.filter,i=e.parentNode.parentNode.dataset.alt);const n={[s]:i,page:1,limit:10};G.innerHTML=`Exercises / <spam class="search-target" id="tagret-js">${q(i)}</spam>`,a.open();const r=await c.getByFilterCategory(n);if(a.close(),r!=null&&r.results.length){m.classList.add("exercises_list"),m.classList.remove("muscles-list"),v(r),U.innerHTML="";const{totalPages:o}=r;x(o,n),S(1)}else d.info("Oops. please, try other category this list empty :(")}catch(n){d.error(n.message)}}function v(t){if(t.results.length){const e=t.results.map(({_id:s,target:i,rating:n,name:r,burnedCalories:o,time:E,bodyPart:O})=>`
      <li class="exercises_list_item" id=${s}>
      <div class="exercises_list_item_up">
        <div class="exercises_list_item_up_left">
          <div class="exercises_workout">${i.toString().length>8?i.slice(0,8)+"...":i}</div>
          <p class="exercises_rating">${n.toFixed(1)}</p>
          <div class="rating-container-not-cursore">
            <svg class="exercises_start_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${f}#icon-star" data-id=${s}></use>
              />
            </svg>
          </div>
        </div>
        <div class="exercises_list_item_up_right" >
          <button class="exercises_btn_start exercises_btn_start_text" data-id=${s}>Start
          <div class="arrow-container">
            <svg class="exercises_btn_arrow_icon" width="56" height="18" data-id=${s}>
              <use xlink:href="${f}#icon-arrow" data-id=${s}></use>
              />
            </svg>
            </div>
          </button>
        </div>
      </div>
      <div class="exercises_list_item_middle">
        <div class="exercises_list_item_middle_icon">
          <svg class="exercises_list_item_middle_icon_svg" width="24" height="24">
            <use xlink:href="${f}#icon-run-man"></use>
            />
          </svg>
        </div>
        <h3 class="exercises_list_item_middle_title" id="name">${r.toString().length>20?r.slice(0,20)+"...":r} </h3>
      </div>
      <div class="exercises_list_item_bottom">
        <ul class="exercises_list_item_bottom_list">
          <li class="exercises_list_item_bottom_list_item">
            <p class="exercises_list_item_bottom_list_item_text">
              Burned calories: <span>${o||""} / ${E||"your wish"} min</span>
            </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
          <p class="exercises_list_item_bottom_list_item_text">
            Body part: <span>${w(O,5)}</span>
          </p>
          </li>
          <li class="exercises_list_item_bottom_list_item">
<p class="exercises_list_item_bottom_list_item_text"">Target: <span>${w(i,7)}</span></p>
</li>
      </ul>
        </div>
    </li>`).join("");m.innerHTML=e}}const b=document.querySelector(".pagination-numbers"),X=document.querySelector(".muscles-list");let g=1,C,M;try{b.addEventListener("click",t=>{t.target.nodeName==="BUTTON"&&Y(t)})}catch(t){console.error("Error initializing pagination:",t)}async function Y(t){const e=Number(t.target.textContent);if(e===g)return;const s={...C,page:e};try{if(a.open(),s.filter){const i=await c.getByFilterName(s);X.innerHTML=_(i.results)}else{const i=await c.getByFilterCategory(s);v(i)}a.close(),g=e,N()}catch(i){console.error("Error fetching data:",i),a.close()}}function K(t){const e=document.createElement("button");e.className="pagination-number",e.textContent=t,e.setAttribute("page-index",t),e.setAttribute("aria-label",`Page ${t}`),b.appendChild(e)}function x(t,e){if(M=t,C=e,!(t<=1)){b.innerHTML="";for(let s=1;s<=t;s++)K(s);N()}}function N(){document.querySelectorAll(".pagination-number").forEach(t=>{const e=Number(t.getAttribute("page-index"));t.classList.toggle("active",e===g)})}function S(t){if(t>M){console.error("Invalid page number:",t);return}g=t,N()}const l=class l{open(){(!l.loaderEl||l.loaderEl.classList.contains("js-loader"))&&(l.loaderEl.style.display="block")}close(){l.loaderEl&&(l.loaderEl.style.display="none")}};$(l,"loaderEl",document.querySelector(".js-loader"));let h=l;const L=new h;u.settings({timeout:3e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});class Q{error(e){u.error({title:"Error",message:e})}success(e){u.success({title:"OK",message:e})}info(e){u.info({title:"Info",message:e})}}const T=new Q,P=document.querySelector("#subscribe-form"),p=P.querySelector("#email");P.addEventListener("submit",V);async function V(t){t.preventDefault();const{value:e}=p;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){T.info("Please provide a valid email address"),p.value="";return}try{L.open();const i=await c.addSubscription({email:e});L.close(),T.success(i.message)}catch(i){console.log(i)}finally{p.value=""}}const z=document.querySelector(".form-js"),W=document.querySelector(".pagination-numbers");z.addEventListener("submit",ee);async function ee(t){t.preventDefault();const e=t.target.elements.search.value.trim();if(!e)return;let{categoryName:s}=JSON.parse(localStorage.getItem("infoRequest")),i=s.toLocaleLowerCase().replaceAll(" ","");i==="bodyparts"&&(i="bodypart");const n={[i]:e,page:1,limit:10};try{a.open();const r=await c.getByFilterCategory(n);a.open(),r.results.length||d.info("Nothing was found for this query"),W.innerHTML="";const{totalPages:o}=r;x(o,n),S(1),z.reset(),v(r)}catch(r){console.log(r)}}const A=document.querySelector("#subscribe-form"),y=A.querySelector("#email");A.addEventListener("submit",te);async function te(t){t.preventDefault();const{value:e}=y;if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)){d.info("Enter the following sample email - 'test@gmail.com'"),y.value="";return}try{a.open();const i=await c.addSubscription({email:e});a.close(),d.success(i.message)}catch(i){console.log(i)}finally{y.value=""}}
