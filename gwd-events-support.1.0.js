var gwd=gwd||{};gwd.actions=gwd.actions||{};gwd.actions.events=gwd.actions.events||{};gwd.actions.events.getElementById=function(id){var element=document.getElementById(id);if(!element){var pageDeck=document.querySelector("[is=gwd-pagedeck]");if(pageDeck){if(typeof pageDeck.getElementById==="function"){element=pageDeck.getElementById(id)}}}if(!element){switch(id){case"document.body":element=document.body;break;case"document":element=document;break;case"window":element=window;break;default:break}}return element};gwd.actions.events.addHandler=function(eventTarget,eventName,eventHandler,useCapture){var targetElement=gwd.actions.events.getElementById(eventTarget);if(targetElement){targetElement.addEventListener(eventName,eventHandler,useCapture)}};gwd.actions.events.removeHandler=function(eventTarget,eventName,eventHandler,useCapture){var targetElement=gwd.actions.events.getElementById(eventTarget);if(targetElement){targetElement.removeEventListener(eventName,eventHandler,useCapture)}};gwd.actions.events.setInlineStyle=function(id,styles){var element=gwd.actions.events.getElementById(id);if(!element||!styles){return}var transitionProperty=element.style.transition!==undefined?"transition":"-webkit-transition";var prevTransition=element.style[transitionProperty];var splitStyles=styles.split(/\s*;\s*/);var nameValue;splitStyles.forEach(function(splitStyle){if(splitStyle){var regex=new RegExp("[:](?![/]{2})");nameValue=splitStyle.split(regex);nameValue[1]=nameValue[1]?nameValue[1].trim():null;if(!(nameValue[0]&&nameValue[1])){return}element.style.setProperty(nameValue[0],nameValue[1])}});function restoreTransition(event){var el=event.target;el.style.transition=prevTransition;el.removeEventListener(event.type,restoreTransition,false)}element.addEventListener("transitionend",restoreTransition,false);element.addEventListener("webkitTransitionEnd",restoreTransition,false)};gwd.actions.gwdGenericad=gwd.actions.gwdGenericad||{};gwd.actions.gwdGenericad.goToPage=function(receiver,opt_pageId,opt_transition,opt_duration,opt_easing,opt_direction){gwd.actions.events.getElementById(receiver).goToPage(opt_pageId,opt_transition,opt_duration,opt_easing,opt_direction)};gwd.actions.gwdGenericad.exit=function(receiver,url,opt_collapseOnExit){gwd.actions.events.getElementById(receiver).exit(url,opt_collapseOnExit)};gwd.actions.gwdPagedeck=gwd.actions.gwdPagedeck||{};gwd.actions.gwdPagedeck.goToPage=function(receiver,pageId,opt_type,opt_duration,opt_easing,opt_direction){gwd.actions.events.getElementById("gwd-ad").goToPage(pageId,opt_type,opt_duration,opt_easing,opt_direction)}