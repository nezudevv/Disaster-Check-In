(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[25],{185:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_authenticator",(function(){return b}));var a,i=n(8),r=n(28),s=n(150),o=n(242),u=n(15),h=n(67),c=(n(241),n(240)),l=n(243),f=n(247),p=function(t,e,n,a){return new(n||(n=Promise))((function(i,r){function s(t){try{u(a.next(t))}catch(e){r(e)}}function o(t){try{u(a.throw(t))}catch(e){r(e)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,o)}u((a=a.apply(t,e||[])).next())}))},d=function(t,e){var n,a,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(r){return function(o){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,a=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(o){r=[6,o],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,o])}}},g=((a={})[o.a.SignIn]="sign-in",a[o.a.ConfirmSignIn]="confirm-sign-in",a[o.a.SignUp]="sign-up",a[o.a.ConfirmSignUp]="confirm-sign-up",a[o.a.ForgotPassword]="forgot-password",a[o.a.ResetPassword]="require-new-password",a[o.a.VerifyContact]="verify-contact",a[o.a.TOTPSetup]="totp-setup",a[o.a.Loading]="loading",a),m=new r.a("Authenticator"),b=function(){function t(t){var e=this;Object(i.k)(this,t),this.initialAuthState=o.a.SignIn,this.handleAuthStateChange=function(){},this.hideToast=!1,this.authState=o.a.Loading,this.toastMessage="",this.handleExternalAuthEvent=function(t){var n=t.payload;switch(n.event){case"cognitoHostedUI":case"signIn":Object(f.a)(n.data,l.d);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return Object(l.d)(e.initialAuthState)}},this.handleToastEvent=function(t){var n=t.payload;switch(n.event){case c.f:n.message&&(e.toastMessage=n.message)}}}return t.prototype.componentWillLoad=function(){return p(this,void 0,void 0,(function(){var t=this;return d(this,(function(e){switch(e.label){case 0:return Object(l.i)((function(e,n){t.onAuthStateChange(e,n),t.toastMessage=""})),this.hideToast||s.a.listen(c.g,this.handleToastEvent),s.a.listen(c.a,this.handleExternalAuthEvent),Object(u.j)("amplify-authenticator"),[4,this.checkUser()];case 1:return e.sent(),[2]}}))}))},t.prototype.checkUser=function(){return p(this,void 0,void 0,(function(){var t=this;return d(this,(function(e){if(!h.a||"function"!==typeof h.a.currentAuthenticatedUser)throw new Error(c.d);return[2,h.a.currentAuthenticatedUser().then((function(t){Object(l.d)(o.a.SignedIn,t)})).catch((function(){Object(l.d)(t.initialAuthState)}))]}))}))},t.prototype.onAuthStateChange=function(t,e){return p(this,void 0,void 0,(function(){return d(this,(function(n){return void 0===t?[2,m.error("nextAuthState cannot be undefined")]:(m.info("Inside onAuthStateChange Method current authState:",this.authState),t===o.a.SignedOut?this.authState=this.initialAuthState:this.authState=t,this.authData=e,this.authData&&m.log("Auth Data was set:",this.authData),this.authState===t&&(this.handleAuthStateChange(this.authState,this.authData),m.info("authState has been updated to "+this.authState)),[2])}))}))},t.prototype.getAuthComponent=function(t){switch(t){case o.a.SignIn:return Object(i.i)("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias});case o.a.ConfirmSignIn:return Object(i.i)("amplify-confirm-sign-in",{user:this.authData});case o.a.SignUp:return Object(i.i)("amplify-sign-up",{usernameAlias:this.usernameAlias});case o.a.ConfirmSignUp:return Object(i.i)("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias});case o.a.ForgotPassword:return Object(i.i)("amplify-forgot-password",{usernameAlias:this.usernameAlias});case o.a.ResetPassword:return Object(i.i)("amplify-require-new-password",{user:this.authData});case o.a.VerifyContact:return Object(i.i)("amplify-verify-contact",{user:this.authData});case o.a.TOTPSetup:return Object(i.i)("amplify-totp-setup",{user:this.authData});case o.a.Loading:return Object(i.i)("div",null,"Loading...");default:throw new Error("Unhandled auth state: "+t)}},t.prototype.getSlotWithAuthComponent=function(t){var e=this.getAuthComponent(t),n=g[t],a=null===this.el.querySelector('[slot="'+n+'"]');return Object(i.i)("slot",{name:n},a&&e)},t.prototype.disconnectedCallback=function(){return s.a.remove(c.a,this.handleExternalAuthEvent),this.hideToast||s.a.remove(c.g,this.handleToastEvent),l.i},t.prototype.render=function(){var t=this;return Object(i.i)(i.b,null,!this.hideToast&&this.toastMessage&&Object(i.i)("amplify-toast",{message:this.toastMessage,handleClose:function(){t.toastMessage=""},"data-test":"authenticator-error"}),this.authState===o.a.SignedIn?[Object(i.i)("slot",{name:"greetings"}),Object(i.i)("slot",null)]:Object(i.i)("div",{class:"auth-container"},this.getSlotWithAuthComponent(this.authState)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.h)(this)},enumerable:!1,configurable:!0}),t}();b.style=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}"}}]);
//# sourceMappingURL=25.2abcd21a.chunk.js.map