(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={contactsListItem:"ContactsList_contactsListItem__1mEl1",contactButton:"ContactsList_contactButton__1cHBy"}},10:function(t,e,n){t.exports={section:"Section_section__2bP5v",sectionTitle:"Section_sectionTitle__18yuL"}},15:function(t,e,n){t.exports={input:"ContactFilter_input__2PSRa"}},18:function(t,e,n){t.exports=n(37)},2:function(t,e,n){t.exports={form:"PhoneBook_form__I1Ysv",inputLabel:"PhoneBook_inputLabel__4WM3B",input:"PhoneBook_input__3-W12",formButton:"PhoneBook_formButton__21nn5"}},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),i=n(17),s=n(4),l=n(5),u=n(7),m=n(6),h=n(8),f=n(14),p=n(9),d=n.n(p),b=n(2),v=n.n(b),C=v.a.form,g=v.a.inputLabel,E=v.a.input,N=v.a.formButton,_=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleInputChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(f.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,c=e.number;isNaN(+a)?isNaN(+c)?alert("Enter valid Number"):(n.props.onAddContact(a,c),n.setState({name:"",number:""})):alert("Enter valid Name")},n.idName=d.a.generate(),n.idNumber=d.a.generate(),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:C,onSubmit:this.handleSubmit},c.a.createElement("label",{className:g,htmlFor:this.idName},"Name"),c.a.createElement("input",{className:E,type:"text",placeholder:"Enter user name*",value:e,onChange:this.handleInputChange,name:"name",id:this.idName,required:!0}),c.a.createElement("label",{className:g,htmlFor:this.idNumber},"Number"),c.a.createElement("input",{className:E,type:"text",placeholder:"Enter user phone number*",value:n,onChange:this.handleInputChange,name:"number",id:this.idNumber,required:!0}),c.a.createElement("button",{type:"submit",className:N},"Add contact"))}}]),e}(a.Component),y=n(1),S=n.n(y),k=S.a.contactsListItem,O=S.a.contactButton,L=function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return c.a.createElement("li",{className:k},c.a.createElement("p",null,e,": ",n),c.a.createElement("button",{type:"submit",onClick:a,className:O},"Delete"))},j=S.a.contactsList,B=function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement("ul",{className:j},e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement(L,{key:e,name:a,number:o,onDeleteContact:function(){return n(e)}})})))},w=n(15),F=n.n(w).a.input,I=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("input",{className:F,type:"text",placeholder:"Search contacts by name*",value:e,onChange:function(t){var e=t.target;return n(e.value)}})},x=n(10),D=n.n(x),P=D.a.section,A=D.a.sectionTitle,J=function(t){var e=t.title,n=t.children;return c.a.createElement("section",{className:P},c.a.createElement("h2",{className:A},e),n)},T=function(t){var e=t.message;return c.a.createElement("p",null,e)},q=n(16),M=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:""},n.createContact=function(t,e){return{id:Object(q.uuid)(),name:t,number:e}},n.addContact=function(t,e){if(n.state.contacts.some((function(e){return e.name.toLowerCase()===t.toLowerCase()})))alert("".concat(t," is already in contacts"));else{var a=n.createContact(t,e);n.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[a])}}))}},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n.changeFilter=function(t){n.setState({filter:t})},n.getFilteredContacts=function(){var t=n.state,e=t.contacts,a=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getFilteredContacts();return c.a.createElement(c.a.Fragment,null,c.a.createElement(J,{title:"Phonebook"},c.a.createElement(_,{onAddContact:this.addContact})),c.a.createElement(J,{title:"Contacts"},e.length>1&&c.a.createElement(I,{value:n,onChangeFilter:this.changeFilter}),e.length<1?c.a.createElement(T,{message:"There is no contact yet..."}):c.a.createElement(B,{contacts:a,onDeleteContact:this.deleteContact})))}}]),e}(a.Component);n(36);r.a.render(c.a.createElement(M,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b32c6fc2.chunk.js.map