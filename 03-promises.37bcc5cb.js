!function(){var e=document.querySelector(".form");document.querySelector('[name="delay"]'),document.querySelector('[name="step"]'),document.querySelector('[name="amount"]');function n(e,n){return new Promise((function(o,t){var a=Math.random()>.3;setTimeout((function(){a?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var o=e.target.elements,t=o.amount,a=o.step,c=o.delay,u=Number(t.value),r=Number(a.value),i=Number(c.value),l=0;l<u;l+=1)n(l+1,i).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),i+=r}))}();
//# sourceMappingURL=03-promises.37bcc5cb.js.map
