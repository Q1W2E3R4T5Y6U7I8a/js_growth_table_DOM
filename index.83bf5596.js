document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".field"),t=document.querySelector(".append-row"),n=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),r=document.querySelector(".remove-column"),d=function(){var d=e.rows.length,o=e.rows[0].cells.length;t.disabled=d>=10,n.disabled=d<=2,l.disabled=o>=10,r.disabled=o<=2};t.addEventListener("click",function(){for(var t=e.insertRow(),n=0;n<e.rows[0].cells.length;n++){var l=t.insertCell();l.style.width="50px",l.style.height="50px",l.style.background="#0093eb",l.style.borderRadius="10px",l.style.padding="0"}d()}),n.addEventListener("click",function(){e.rows.length>2&&e.deleteRow(-1),d()}),l.addEventListener("click",function(){for(var t=0;t<e.rows.length;t++){var n=e.rows[t].insertCell();n.style.width="50px",n.style.height="50px",n.style.background="#0093eb",n.style.borderRadius="10px",n.style.padding="0"}d()}),r.addEventListener("click",function(){if(e.rows[0].cells.length>2)for(var t=0;t<e.rows.length;t++)e.rows[t].deleteCell(-1);d()}),d()});
//# sourceMappingURL=index.83bf5596.js.map
