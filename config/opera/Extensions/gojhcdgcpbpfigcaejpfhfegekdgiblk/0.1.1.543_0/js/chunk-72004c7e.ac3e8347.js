(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72004c7e"],{"048d":function(e,t,a){e.exports=a.p+"img/secure_backup_phrase.69f1bcf5.svg"},"4a72":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-grow flex flex-col justify-between"},[s("top-bar",{attrs:{title:e.$t("general.backupPhrase")}}),s("div",{staticClass:"flex-grow mx-14 my-7 flex flex-col justify-between"},[s("div",{staticClass:"my-14 flex flex-col items-center"},[s("h1",{staticClass:"my-5 mx-4 font-bold leading-tight text-2xl"},[e._v(" "+e._s(e.$t("views.backupView.securePhrase"))+" ")]),s("img",{staticClass:"my-7",attrs:{src:a("048d"),alt:""}}),s("p",{staticClass:"text-center text-dark-N77 my-5 mx-4"},[e._v(" "+e._s(e.$t("views.backupView.inTheNextStep")+" "+e.$t("views.backupView.doNotSharePhrase"))+" ")])]),s("div",{staticClass:"flex-grow"}),s("div",{staticClass:"flex flex-col items-center"},[s("div",{staticClass:"flex my-5 items-center"},[s("opera-checkbox",{staticClass:"t-backup_reveal_warning_view-disclaimer mr-4 p-1",attrs:{"model-value":e.disclaimerAcknowledged},on:{change:e.change}}),s("p",{staticClass:"text-sm text-dark-N77"},[e._v(e._s(e.$t("views.backupView.disclaimer")))])],1),s("primary-button",{staticClass:"t-backup_reveal_warning_view-next my-4 w-full",attrs:{disabled:!e.disclaimerAcknowledged,title:e.$t("general.next")},on:{click:e.revealPhrase}})],1)])],1)},r=[],c=a("1da1"),n=(a("96cf"),a("6c6f")),i=a("b043"),l=a("1c9b"),o=a("7b99"),u={name:"BackupRevealWarning",components:{PrimaryButton:n["a"],TopBar:i["a"],OperaCheckbox:l["a"]},data:function(){return{disclaimerAcknowledged:!1}},methods:{revealPhrase:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$progress.show(),t.prev=1,t.next=4,e.$wallet.getSecretPhrase();case 4:a=t.sent,e.$router.push({name:"Backup",params:{recovery:a}}),o["a"].sendStatsEvent(o["a"].types.CLICK,"wt_setpwd_suc"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),console.error(t.t0),o["a"].sendStatsEvent(o["a"].types.CLICK,"wt_setpwd_fail");case 13:e.$progress.hide();case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},change:function(e){this.disclaimerAcknowledged=e}}},d=u,p=a("2877"),w=Object(p["a"])(d,s,r,!1,null,null,null);t["default"]=w.exports}}]);