import Vue from 'vue'
import App from 'pages/App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
    el: '#app',
    render: a => a(App)
});

// function getIndex(list, id) {
//     for(var i = 0; i < list.length; i++){
//         if(list[i].id === id) {
//             return i;
//         }
//     }
//
//     return -1;
// }
// var messageApi = Vue.resource('/message{/id}');
//
// Vue.component('message-form', {
//     props: ['messages', 'messageAttr'],
//     data: function () {
//         return {
//             text: '',
//             id: ''
//         }
//     },
//     watch: {
//         messageAttr: function(newVal, oldVal) {
//             this.text = newVal.text;
//             this.id = newVal.id;
//         }
//     },
//
    //template:
        // '<div>'+
        //     '<input type="text" placeholder="Write something" v-model="text" />' +
        //     '<input type="button" value="Save" @click = "save" />' +
        // '</div>',
    // methods: {
    //     save: function () {
    //         var message = {id: this.messages.length + 1, text: this.text};
    //         if (this.id){
    //             messageApi.update({id: this.id}, message).then(result =>
    //             result.json().then(data => {
    //                 var index = getIndex(this.messages, data.id);
    //                 this.messages.splice(index, 1, data);
    //                 this.text = '';
    //                 this.id = '';
    //             }))
    //         }else {
    //             messageApi.save({}, message).then(result =>
    //                 result.json().then(data => {
    //                     this.messages.push(message);
    //                     this.text = '';
    //                 })
    //             )
    //         }
    //     }
    // }
// });
//

//
// Vue.component('messages-list', {
//     props: ['messages'],
//     data: function(){
//         return{
//             message: null
//         }
//     },
//     template: '<div style="position: relative; width: 300px;">' +
//                     '<message-form :messages = "messages" :messageAttr="message" />' +
//                     '<message-row v-for="message in messages" :key="message.id" :message = "message" ' +
//                     ':editMethod="editMethod" :messages="messages"  />' +
//               '</div>',
//
//     methods: {
//         editMethod: function (message) {
//             this.message = message;
//         }
//     }
// });
