const t={startBtn:document.querySelector("button[data-actions-start]"),stopBtn:document.querySelector("button[data-actions-stop]"),clockface:document.querySelector(".js-clockface")};const e=new class{init(){const t=this.getTimeComponents(0);this.onTick(t)}start(){if(this.isActive)return;const t=Date.now();this.isActive=!0,this.intervalId=setInterval((()=>{const e=Date.now()-t,n=this.getTimeComponents(e);this.onTick(n)}),1e3)}stop(){clearInterval(this.intervalId),this.isActive=!1;const t=this.getTimeComponents(0);this.onTick(t)}getTimeComponents(t){return{hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}constructor({onTick:t}){this.intervalId=null,this.isActive=!1,this.onTick=t,this.init()}}({onTick:function({hours:e,mins:n,secs:s}){t.clockface.textContent=`${e}:${n}:${s}`}});t.startBtn.addEventListener("click",e.start.bind(e)),t.stopBtn.addEventListener("click",e.stop.bind(e));
//# sourceMappingURL=timer.dff5bf53.js.map
