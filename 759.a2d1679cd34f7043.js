"use strict";(self.webpackChunkhms=self.webpackChunkhms||[]).push([[759],{9759:(O,c,e)=>{e.r(c),e.d(c,{LoginModule:()=>P});var p=e(9808),l=e(1196),n=e(1223),d=e(8913),u=e(2340),f=e(520);let m=(()=>{class o{constructor(t){this.http=t,this.API_URL=u.N.APIEndpoint}loginDetails(t){return console.log(localStorage.getItem("logDriverToken")),this.http.post(`${this.API_URL}/auth/driver-login`,t)}}return o.\u0275fac=function(t){return new(t||o)(n.LFG(f.eN))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var h=e(5190),C=e(4590),i=e(2382);const M=[{path:"",component:(()=>{class o{constructor(t,r,s,g,v){this.router=t,this.spinner=r,this.auth=s,this.jwt=g,this.dataService=v,this.email="",this.pass="",this.data={}}ngOnInit(){}onLogin(){this.data={type:"email",email:this.email,password:this.pass},this.spinner.show(),this.auth.loginDetails(this.data).subscribe(t=>{"Successfully Driver login"==t.message&&"Driver"==t.data.accountType?(this.jwt.saveToken(t.data.token),localStorage.setItem("logDriverName",t.data.username),localStorage.setItem("shipmentStatus",t.data.driver),this.dataService.saveDriverLoginDetails(t.data),this.router.navigate(["/image-upload"])):"admin"==t.data.accountType?alert("Try with Driver credentials"):alert("Something went wrong"),this.spinner.hide()},t=>{"Invalid Password"==t.error.message?alert("Invalid Password"):"User not found"==t.error.message?alert("User not found"):alert("Something went wrong"),this.spinner.hide()})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(l.F0),n.Y36(d.t2),n.Y36(m),n.Y36(h.T),n.Y36(C.D))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:20,vars:2,consts:[["bdColor","rgba(51,51,51,0.8)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"font-size","20px","color","white"],["id","login",1,"login"],[1,"head"],[1,"company"],[1,"msg"],[1,"form"],["type","text","placeholder","Username","name","email","id","username","required","",1,"text",3,"ngModel","ngModelChange"],["type","password","name","pass","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",1,"password",3,"ngModel","ngModelChange"],["id","do-login",1,"btn-login",3,"click"],["routerLink","/register",1,"forgot"]],template:function(t,r){1&t&&(n.TgZ(0,"ngx-spinner",0),n.TgZ(1,"p",1),n._uU(2,"Redirecting..."),n.qZA(),n.qZA(),n.TgZ(3,"body"),n.TgZ(4,"section",2),n.TgZ(5,"div",3),n.TgZ(6,"h1",4),n._uU(7,"HMS Driver Login"),n.qZA(),n.qZA(),n.TgZ(8,"p",5),n._uU(9,"Welcome back"),n.qZA(),n.TgZ(10,"div",6),n.TgZ(11,"form"),n.TgZ(12,"input",7),n.NdJ("ngModelChange",function(g){return r.email=g}),n.qZA(),n._UZ(13,"br"),n.TgZ(14,"input",8),n.NdJ("ngModelChange",function(g){return r.pass=g}),n.qZA(),n._UZ(15,"br"),n.TgZ(16,"a",9),n.NdJ("click",function(){return r.onLogin()}),n._uU(17,"Login"),n.qZA(),n.TgZ(18,"a",10),n._uU(19,"Forgot?"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(12),n.Q6J("ngModel",r.email),n.xp6(2),n.Q6J("ngModel",r.pass))},directives:[d.Ro,i._Y,i.JL,i.F,i.Fj,i.Q7,i.JJ,i.On,l.yS],styles:["body[_ngcontent-%COMP%]{background:#ABCDEF;font-family:Assistant,sans-serif;display:flex;min-height:90vh}.login[_ngcontent-%COMP%]{color:#fff;background:#136a8a;background:linear-gradient(to right,#267871,#136a8a);margin:auto;box-shadow:0 2px 10px #0003,0 10px 20px #0000004d,0 30px 60px 1px #00000080;border-radius:8px;padding:50px}.login[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.login[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]{font-size:2.2em}.login[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%]{text-align:center}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[type=text].text[_ngcontent-%COMP%]{border:none;background:none;box-shadow:0 2px #fff;width:100%;color:#fff;font-size:1em;outline:none}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]::placeholder{color:#d3d3d3}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[type=password].password[_ngcontent-%COMP%]{border:none;background:none;box-shadow:0 2px #fff;width:100%;color:#fff;font-size:1em;outline:none;margin-bottom:20px;margin-top:20px}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%]::placeholder{color:#d3d3d3}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]{background:none;text-decoration:none;color:#fff;box-shadow:0 0 0 2px #fff;border-radius:3px;padding:5px 2em;transition:.5s}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]:hover{background:white;color:#696969;transition:.5s}.login[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{text-decoration:none;color:#fff;float:right}footer[_ngcontent-%COMP%]{position:absolute;color:#136a8a;bottom:10px;padding-left:20px}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:green;text-decoration:none}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}footer[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{color:#b22222;font-size:1.5em}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[p.ez,i.u5,l.Bz.forChild(M)]]}),o})()}}]);