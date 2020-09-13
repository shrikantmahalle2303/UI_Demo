(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{h4KG:function(e,t,r){"use strict";r.r(t),r.d(t,"AddCustomerModule",(function(){return E}));var i=r("3Pt+"),s=r("ofXK"),o=r("tyNb"),b=r("SxV6"),n=r("fXoL"),c=r("2Vo4"),d=r("lJxs"),u=r("AytR"),a=r("tk/3");let l=(()=>{class e{constructor(e,t){this.router=e,this.http=t,this.customerSubject=new c.a(JSON.parse(localStorage.getItem("customer"))),this.customer=this.customerSubject.asObservable()}get customerValue(){return this.customerSubject.value}register(e){return console.log("service call ke pahale"),this.http.post(u.a.apiUrl+"/api/Customer/Add",e)}getAll(){return this.http.get(u.a.apiUrl+"/api/Customer/Get")}getByCustomerId(e){return this.http.get(`${u.a.apiUrl}/api/Customer/${e}/getCustomerById`)}update(e,t){return console.log(e),console.log(t),this.http.put(u.a.apiUrl+"/api/Customer/Edit",t).pipe(Object(d.a)(e=>e))}delete(e){return this.http.delete(`${u.a.apiUrl}/api/Customer/Remove?customerId=${e}`).pipe(Object(d.a)(e=>e))}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(o.c),n.Qb(a.b))},e.\u0275prov=n.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=r("J9tS");function f(e,t){1&e&&n.Kb(0)}function p(e,t){1&e&&(n.Mb(0,"p"),n.ic(1,"Y"),n.Lb())}function g(e,t){1&e&&(n.Mb(0,"p"),n.ic(1,"N"),n.Lb())}function h(e,t){1&e&&n.Jb(0,"span",15)}function v(e,t){1&e&&(n.Mb(0,"span"),n.ic(1,"Delete"),n.Lb())}function M(e,t){if(1&e){const e=n.Nb();n.Mb(0,"tr"),n.Mb(1,"td"),n.ic(2),n.Lb(),n.Mb(3,"td"),n.ic(4),n.Lb(),n.Mb(5,"td"),n.ic(6),n.Lb(),n.Mb(7,"td"),n.ic(8),n.Lb(),n.Mb(9,"td"),n.ic(10),n.Lb(),n.Mb(11,"td"),n.gc(12,f,1,0,"ng-container",6),n.gc(13,p,2,0,"ng-template",null,7,n.hc),n.gc(15,g,2,0,"ng-template",null,8,n.hc),n.Lb(),n.Mb(17,"td"),n.ic(18),n.Lb(),n.Mb(19,"td"),n.ic(20),n.Lb(),n.Mb(21,"td",9),n.Mb(22,"a",10),n.Jb(23,"i",11),n.ic(24,"Edit"),n.Lb(),n.Mb(25,"button",12),n.Tb("click",(function(){n.cc(e);const r=t.$implicit;return n.Vb().deleteCustomer(r.customerId)})),n.Jb(26,"i",13),n.gc(27,h,1,0,"span",14),n.gc(28,v,2,0,"span",5),n.Lb(),n.Lb(),n.Lb()}if(2&e){const e=t.$implicit,r=n.bc(14),i=n.bc(16);n.xb(2),n.jc(e.name),n.xb(2),n.jc(e.phoneNumber),n.xb(2),n.jc(e.mobileNumber),n.xb(2),n.jc(e.address),n.xb(2),n.jc(e.zipcode),n.xb(2),n.Wb("ngIf",e.isActive)("ngIfThen",r)("ngIfElse",i),n.xb(6),n.jc(e.createdBy),n.xb(2),n.jc(e.updatedBy),n.xb(2),n.Xb("routerLink","edit/",e.customerId,""),n.xb(3),n.Wb("disabled",e.isDeleting),n.xb(2),n.Wb("ngIf",e.isDeleting),n.xb(1),n.Wb("ngIf",!e.isDeleting)}}function L(e,t){1&e&&(n.Mb(0,"tr"),n.Mb(1,"td",16),n.Jb(2,"span",17),n.Lb(),n.Lb())}let I=(()=>{class e{constructor(e,t){this.customerService=e,this.alertService=t,this.customer=null,this.shrikant="shrikant_sharad",this.la=null,this.lg=null}ngOnInit(){this.customerService.getAll().pipe(Object(b.a)()).subscribe(e=>this.customer=e),navigator.geolocation.getCurrentPosition(e=>{console.log("HI"),console.log(e.coords.latitude),this.la=e.coords.latitude,this.lg=e.coords.longitude,console.log(`lat: ${e.coords.latitude}, lon: ${e.coords.longitude}`)})}deleteCustomer(e){this.customer.find(t=>t.customerId===e).isDeleting=!0,this.customerService.delete(e).pipe(Object(b.a)()).subscribe(()=>{this.customer=this.customer.filter(t=>t.customerId!==e),this.alertService.success("Customer Deleted successfully",{keepAfterRouteChange:!0})})}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(l),n.Ib(m.b))},e.\u0275cmp=n.Cb({type:e,selectors:[["app-add-customer"]],decls:28,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"fa","fa-user-plus",2,"font-size","17px"],[1,"table","table-striped"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[4,"ngIf","ngIfThen","ngIfElse"],["yes",""],["no",""],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"fas","fa-user-edit",2,"font-size","17px"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],[1,"fa","fa-trash",2,"font-size","17px"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,t){1&e&&(n.Mb(0,"h1"),n.ic(1,"Add Customer"),n.Lb(),n.Mb(2,"a",0),n.Jb(3,"i",1),n.ic(4," Add Customer"),n.Lb(),n.Mb(5,"table",2),n.Mb(6,"thead"),n.Mb(7,"tr"),n.Mb(8,"th",3),n.ic(9," Name"),n.Lb(),n.Mb(10,"th",3),n.ic(11,"Phone Number "),n.Lb(),n.Mb(12,"th",3),n.ic(13," Mobile Number"),n.Lb(),n.Mb(14,"th",3),n.ic(15," Address "),n.Lb(),n.Mb(16,"th",3),n.ic(17," Zipcode "),n.Lb(),n.Mb(18,"th",3),n.ic(19," Active "),n.Lb(),n.Mb(20,"th",3),n.ic(21," CreatedBy "),n.Lb(),n.Mb(22,"th",3),n.ic(23," UpdatedBy "),n.Lb(),n.Jb(24,"th",3),n.Lb(),n.Lb(),n.Mb(25,"tbody"),n.gc(26,M,29,14,"tr",4),n.gc(27,L,3,0,"tr",5),n.Lb(),n.Lb()),2&e&&(n.xb(26),n.Wb("ngForOf",t.customer),n.xb(1),n.Wb("ngIf",!t.customer))},directives:[o.e,s.i,s.j],styles:[""]}),e})();function C(e,t){1&e&&(n.Mb(0,"h1"),n.ic(1,"Add Customer"),n.Lb())}function x(e,t){1&e&&(n.Mb(0,"h1"),n.ic(1,"Edit Customer"),n.Lb())}function y(e,t){1&e&&(n.Mb(0,"div"),n.ic(1," Name is required"),n.Lb())}function N(e,t){if(1&e&&(n.Mb(0,"div",21),n.gc(1,y,2,0,"div",0),n.Lb()),2&e){const e=n.Vb();n.xb(1),n.Wb("ngIf",e.f.name.errors.required)}}function W(e,t){1&e&&(n.Mb(0,"div"),n.ic(1,"Last Name is required"),n.Lb())}function S(e,t){if(1&e&&(n.Mb(0,"div",21),n.gc(1,W,2,0,"div",0),n.Lb()),2&e){const e=n.Vb();n.xb(1),n.Wb("ngIf",e.f.phoneNumber.errors.required)}}function q(e,t){1&e&&(n.Mb(0,"div"),n.ic(1,"Mobile Number is required"),n.Lb())}function A(e,t){if(1&e&&(n.Mb(0,"div",21),n.gc(1,q,2,0,"div",0),n.Lb()),2&e){const e=n.Vb();n.xb(1),n.Wb("ngIf",e.f.mobileNumber.errors.required)}}function j(e,t){1&e&&(n.Mb(0,"div"),n.ic(1,"Zip Code is required"),n.Lb())}function k(e,t){if(1&e&&(n.Mb(0,"div",21),n.gc(1,j,2,0,"div",0),n.Lb()),2&e){const e=n.Vb();n.xb(1),n.Wb("ngIf",e.f.zipcode.errors.required)}}function J(e,t){1&e&&(n.Mb(0,"div"),n.ic(1,"Address is required"),n.Lb())}function w(e,t){if(1&e&&(n.Mb(0,"div",21),n.gc(1,J,2,0,"div",0),n.Lb()),2&e){const e=n.Vb();n.xb(1),n.Wb("ngIf",e.f.address.errors.required)}}function V(e,t){1&e&&(n.Mb(0,"div"),n.ic(1,"Logistic Company is required"),n.Lb())}function z(e,t){if(1&e&&(n.Mb(0,"div",21),n.gc(1,V,2,0,"div",0),n.Lb()),2&e){const e=n.Vb();n.xb(1),n.Wb("ngIf",e.f.logisticCompanyId.errors.required)}}function O(e,t){1&e&&n.Jb(0,"span",22)}const $=function(e){return{"is-invalid":e}};let B=(()=>{class e{constructor(e,t,r,i,s,o){this.formBuilder=e,this.route=t,this.router=r,this.customerService=i,this.alertService=s,this.accountService=o,this.loading=!1,this.submitted=!1,this.la=null,this.lg=null}ngOnInit(){navigator.geolocation.getCurrentPosition(e=>{console.log("HI"),console.log(e.coords.latitude),this.la=e.coords.latitude,this.lg=e.coords.longitude,console.log(`lat: ${e.coords.latitude}, lon: ${e.coords.longitude}`)}),this.customerId=this.route.snapshot.params.customerId,this.isAddMode=!this.customerId;const e=[i.i.minLength(6)];this.isAddMode&&e.push(i.i.required),this.form=this.formBuilder.group(this.isAddMode?{name:["",i.i.required],phoneNumber:["",i.i.required],mobileNumber:["",i.i.required],zipcode:["",i.i.required],address:["",i.i.required],logisticCompanyId:["",i.i.required]}:{name:["",i.i.required],phoneNumber:["",i.i.required],mobileNumber:["",i.i.required],zipcode:["",i.i.required],address:["",i.i.required],logisticCompanyId:["",i.i.required],customerId:Number(this.customerId)}),this.isAddMode||this.customerService.getByCustomerId(this.customerId).pipe(Object(b.a)()).subscribe(e=>{this.f.name.setValue(e.name),this.f.phoneNumber.setValue(e.phoneNumber),this.f.mobileNumber.setValue(e.mobileNumber),this.f.zipcode.setValue(e.zipcode),this.f.address.setValue(e.address),this.f.logisticCompanyId.setValue(e.logisticCompanyId)})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?(console.log("Add me aaya"),this.createCustomer()):(console.log("Edit me aaya"),console.log(this.customerId),this.updateCustomer()))}createCustomer(){this.customerService.register(this.form.value).pipe(Object(b.a)()).subscribe(e=>{this.alertService.success("Customer added successfully",{keepAfterRouteChange:!0}),this.router.navigate([".",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}updateCustomer(){this.customerService.update(this.customerId,this.form.value).pipe(Object(b.a)()).subscribe(e=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["..",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(i.b),n.Ib(o.a),n.Ib(o.c),n.Ib(l),n.Ib(m.b),n.Ib(m.a))},e.\u0275cmp=n.Cb({type:e,selectors:[["ng-component"]],decls:42,vars:29,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","name"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","phoneNumber"],["type","text","formControlName","phoneNumber",1,"form-control",3,"ngClass"],["for","mobileNumber"],["type","number","formControlName","mobileNumber",1,"form-control",3,"ngClass"],["for","zipcode"],["type","text","formControlName","zipcode",1,"form-control",3,"ngClass"],["for","address"],["type","text","formControlName","address",1,"form-control",3,"ngClass"],["for","logisticCompanyId"],["type","number","formControlName","logisticCompanyId",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/add-customer",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(n.gc(0,C,2,0,"h1",0),n.gc(1,x,2,0,"h1",0),n.Mb(2,"form",1),n.Tb("ngSubmit",(function(){return t.onSubmit()})),n.Mb(3,"div",2),n.Mb(4,"div",3),n.Mb(5,"label",4),n.ic(6,"Name"),n.Lb(),n.Jb(7,"input",5),n.gc(8,N,2,1,"div",6),n.Lb(),n.Mb(9,"div",3),n.Mb(10,"label",7),n.ic(11,"Phone Number"),n.Lb(),n.Jb(12,"input",8),n.gc(13,S,2,1,"div",6),n.Lb(),n.Lb(),n.Mb(14,"div",2),n.Mb(15,"div",3),n.Mb(16,"label",9),n.ic(17,"Mobile Number"),n.Lb(),n.Jb(18,"input",10),n.gc(19,A,2,1,"div",6),n.Lb(),n.Mb(20,"div",3),n.Mb(21,"label",11),n.ic(22,"Zip Code"),n.Lb(),n.Jb(23,"input",12),n.gc(24,k,2,1,"div",6),n.Lb(),n.Lb(),n.Mb(25,"div",2),n.Mb(26,"div",3),n.Mb(27,"label",13),n.ic(28,"Address"),n.Lb(),n.Jb(29,"input",14),n.gc(30,w,2,1,"div",6),n.Lb(),n.Mb(31,"div",3),n.Mb(32,"label",15),n.ic(33,"Logistic Company ID"),n.Lb(),n.Jb(34,"input",16),n.gc(35,z,2,1,"div",6),n.Lb(),n.Lb(),n.Mb(36,"div",17),n.Mb(37,"button",18),n.gc(38,O,1,0,"span",19),n.ic(39," Save "),n.Lb(),n.Mb(40,"a",20),n.ic(41,"Cancel"),n.Lb(),n.Lb(),n.Lb()),2&e&&(n.Wb("ngIf",t.isAddMode),n.xb(1),n.Wb("ngIf",!t.isAddMode),n.xb(1),n.Wb("formGroup",t.form),n.xb(5),n.Wb("ngClass",n.Zb(17,$,t.submitted&&t.f.name.errors)),n.xb(1),n.Wb("ngIf",t.submitted&&t.f.name.errors),n.xb(4),n.Wb("ngClass",n.Zb(19,$,t.submitted&&t.f.phoneNumber.errors)),n.xb(1),n.Wb("ngIf",t.submitted&&t.f.phoneNumber.errors),n.xb(5),n.Wb("ngClass",n.Zb(21,$,t.submitted&&t.f.mobileNumber.errors)),n.xb(1),n.Wb("ngIf",t.submitted&&t.f.mobileNumber.errors),n.xb(4),n.Wb("ngClass",n.Zb(23,$,t.submitted&&t.f.zipcode.errors)),n.xb(1),n.Wb("ngIf",t.submitted&&t.f.zipcode.errors),n.xb(5),n.Wb("ngClass",n.Zb(25,$,t.submitted&&t.f.address.errors)),n.xb(1),n.Wb("ngIf",t.submitted&&t.f.address.errors),n.xb(4),n.Wb("ngClass",n.Zb(27,$,t.submitted&&t.f.logisticCompanyId.errors)),n.xb(1),n.Wb("ngIf",t.submitted&&t.f.logisticCompanyId.errors),n.xb(2),n.Wb("disabled",t.loading),n.xb(1),n.Wb("ngIf",t.loading))},directives:[s.j,i.j,i.f,i.d,i.a,i.e,i.c,s.h,i.g,o.e],styles:[""]}),e})();const Z=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Cb({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,t){1&e&&(n.Mb(0,"div",0),n.Mb(1,"div",1),n.Jb(2,"router-outlet"),n.Lb(),n.Lb())},directives:[o.g],encapsulation:2}),e})(),children:[{path:"",component:I},{path:"add",component:B},{path:"edit/:customerId",component:B}]}];let D=(()=>{class e{}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(t){return new(t||e)},imports:[[o.f.forChild(Z)],o.f]}),e})(),E=(()=>{class e{}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(t){return new(t||e)},imports:[[s.b,i.h,D]]}),e})()}}]);