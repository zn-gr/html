"use strict";const e=require("../../common/vendor.js"),t={data:()=>({selectid:0}),components:{home:()=>"../../components/home/home.js",riji:()=>"../../components/riji/riji.js",my:()=>"../../components/my/my.js"},onLoad(){},methods:{gettabar(e){this.selectid=e}}};if(!Array){(e.resolveComponent("home")+e.resolveComponent("riji")+e.resolveComponent("my"))()}Math||((()=>"../../components/home/home.js")+(()=>"../../components/riji/riji.js")+(()=>"../../components/my/my.js"))();const i=e._export_sfc(t,[["render",function(t,i,c,o,s,n){return e.e({a:0==s.selectid},(s.selectid,{}),{b:1==s.selectid},(s.selectid,{}),{c:2==s.selectid},(s.selectid,{}),{d:3==s.selectid},(s.selectid,{}),{e:e.n(0==s.selectid?"love-tabbar-item-icon select":"love-tabbar-item-icon"),f:0==s.selectid?"../../static/icon/home-select.png":"../../static/icon/home.png",g:e.n(0==s.selectid?"title select":"title noselect"),h:e.o((e=>n.gettabar(0))),i:e.n(1==s.selectid?"love-tabbar-item-icon select":"love-tabbar-item-icon"),j:1==s.selectid?"../../static/icon/riji-select.png":"../../static/icon/riji.png",k:e.n(1==s.selectid?"title select":"title noselect"),l:e.o((e=>n.gettabar(1))),m:e.n(2==s.selectid?"love-tabbar-item-icon select":"love-tabbar-item-icon"),n:2==s.selectid?"../../static/icon/yueding-select.png":"../../static/icon/yueding.png",o:e.n(2==s.selectid?"title select":"title noselect"),p:e.o((e=>n.gettabar(2))),q:e.n(3==s.selectid?"love-tabbar-item-icon select":"love-tabbar-item-icon"),r:3==s.selectid?"../../static/icon/my-select.png":"../../static/icon/my.png",s:e.n(3==s.selectid?"title select":"title noselect"),t:e.o((e=>n.gettabar(3)))})}]]);wx.createPage(i);
