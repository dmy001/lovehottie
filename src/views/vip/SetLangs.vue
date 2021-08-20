<template>
<div></div>
    <!-- <div>
        <h2>Highlighted rows, borders</h2>
        <div style="margin: 16px">
            <van-button round block type="warning" @click="gitPush"> 提交中英文对照代码 </van-button>
        </div>
        <div style="margin: 16px">
            <van-button round block type="primary" @click="addItem"> 添加 </van-button>
        </div>

        <table class="bordered w-full border-solid border border-gray-400 rounded-md shadow-sm">
            <thead>
                <tr>
                    <th
                        v-for="item in titles"
                        :key="item"
                        class="border border-gray-400 p-2.5 text-left bg-blue-200 shadow-sm"
                    >
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tr v-for="item in values" :key="item.key" class="hover:bg-yellow-100">
                <td class="border border-gray-400 p-2.5 text-left">{{ item.key }}</td>
                <td class="border border-gray-400 p-2.5 text-left">{{ item['zh-cn'] }}</td>
                <td class="border border-gray-400 p-2.5 text-left">{{ item.en }}</td>
                <td class="border border-gray-400 p-2.5 text-left">
                    <van-button round type="primary" @click="updateItem(item)"> 修改 </van-button>
                    <van-button round type="primary" @click="deleteItem(item)"> 删除 </van-button>
                     <span @click="updateItem(item)">修改</span> <span @click="deleteItem(item)">删除</span> -->
                <!-- </td>
            </tr>
        </table>

        <van-dialog v-model:show="showEdit" title="标题" show-cancel-button @confirm="submitItem">
            <van-form>
                <van-cell-group inset>
                    <van-field
                        v-model="Chinese"
                        name="中文"
                        label="中文"
                        placeholder="中文"
                        :rules="[{ required: true, message: '请填写中文' }]"
                    />
                    <van-field
                        v-model="English"
                        name="英文"
                        label="英文"
                        placeholder="英文"
                        :rules="[{ required: true, message: '请填写英文' }]"
                    />
                </van-cell-group>
            </van-form>
        </van-dialog>
    </div> -->
</template>
<script>
// import { reactive, toRefs, onMounted } from 'vue';
// import { Toast, Dialog } from 'vant';
// import { getAllLangs, editLangs, deleteLangItem, gitPushLangs } from '@api';
//  export default{
//      data(){
//         return{
          
        // deleteItem,
        // updateItem,
        // submitItem,
        // addItem,
        // gitPush,
    //         showEdit: false,
    //          titles: ['key', '中文', '英文', '操作'],
    //         Chinese: '',
    //         English: '',
    //         key: '',
    //          values: [
    //             { key: 'key_0', 'zh-cn': '你好', en: 'hello' },
    //         ],
    //     }
    //  },
    //   methods:{
   
        // async deleteItem (item){
        //     try {
        //         await Dialog.confirm({
        //             title: '删除确认',
        //             message: '确认删除吗？',
        //         });
        //         //  { msg } = await deleteLangItem(item.key);
        //         // Toast(msg); git checkout
        //         await getData();
        //     } catch (e) {
        //         console.log(e);
        //     }
        // },
        //  updateItem = item => {
        //     this.key = item.key;
        //     this.English = item.en;
        //     this.Chinese = item['zh-cn'];
        //     this.showEdit = true;
        // },
        //  addItem = () => {
        //     this.key = '';
        //     this.English = '';
        //     this.Chinese = '';
        //     this.showEdit = true;
        // },
    //  async   gitPush ()  {
    //         try {
    //              beforeClose = async action => {
    //                 if (action === 'confirm') {
    //                     // resolve(true);
    //                     //  { msg } = await gitPushLangs();
    //                     await getData();
    //                     Toast(msg);
    //                 } 
    //                 return true
    //             };
    //             await Dialog.confirm({
    //                 title: '提交确认',
    //                 message: '确认提交代码吗？',
    //                 beforeClose,
    //             });
        //     } catch (e) {
        //         console.log(e);
        //     }
        // }

        // async   submitItem() {
        //      { msg, status }  await editLangs(this.Chinese, this.English, this.key);
        //     if (status !== 0) {
        //         return Toast(msg);
        //     }
        //     await getData();
        //     Toast('设置成功');
        // },
        //  getData = async () => {
        //      { data } = await getAllLangs();
        //      arr = [];
        //     for ( key in data.zh_cn) {
        //         if (Object.hasOwnProperty.call(data.zh_cn, key)) {
        //             arr.push({
        //                 key,
        //                 'zh-cn': data.zh_cn[key],
        //                 en: data.en[key],
        //             });
        //         }
        //     }
        //     this.values = arr;
        // },
    //     async(){
    //         await getData();
    //    }
//       },
//  };



// export default {
    
//     setup() {
//          this = reactive({
//             showEdit: false,
//             titles: ['key', '中文', '英文', '操作'],
//             Chinese: '',
//             English: '',
//             key: '',
//             values: [
//                 // { key: 'key_0', 'zh-cn': '你好', en: 'hello' },
//             ],
//         });
//          deleteItem = async item => {
//             try {
//                 await Dialog.confirm({
//                     title: '删除确认',
//                     message: '确认删除吗？',
//                 });
//                  { msg } = await deleteLangItem(item.key);
//                 Toast(msg);
//                 await getData();
//             } catch (e) {
//                 console.log(e);
//             }
//         };
//          updateItem = item => {
//             this.key = item.key;
//             this.English = item.en;
//             this.Chinese = item['zh-cn'];
//             this.showEdit = true;
//         };
//          addItem = () => {
//             this.key = '';
//             this.English = '';
//             this.Chinese = '';
//             this.showEdit = true;
//         };
//          gitPush = async () => {
//             try {
//                  beforeClose = async action => {
//                     if (action === 'confirm') {
//                         // resolve(true);
//                          { msg } = await gitPushLangs();
//                         await getData();
//                         Toast(msg);
//                     } 
//                     return true
//                 };
//                 await Dialog.confirm({
//                     title: '提交确认',
//                     message: '确认提交代码吗？',
//                     beforeClose,
//                 });
//             } catch (e) {
//                 console.log(e);
//             }
//         };
//          submitItem = async () => {
//              { msg, status } = await editLangs(this.Chinese, this.English, this.key);
//             if (status !== 0) {
//                 return Toast(msg);
//             }
//             await getData();
//             Toast('设置成功');
//         };
//          getData = async () => {
//              { data } = await getAllLangs();
//              arr = [];
//             for ( key in data.zh_cn) {
//                 if (Object.hasOwnProperty.call(data.zh_cn, key)) {
//                     arr.push({
//                         key,
//                         'zh-cn': data.zh_cn[key],
//                         en: data.en[key],
//                     });
//                 }
//             }
//             this.values = arr;
//         };
//         onMounted(async () => {
//             await getData();
//         });
//         // return {
//         //     ...toRefs(this),
//         //     deleteItem,
//         //     updateItem,
//         //     submitItem,
//         //     addItem,
//         //     gitPush,
//         // };
//     },
// };
</script>

