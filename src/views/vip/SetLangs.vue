<template>
  <div>
    <!-- <div> -->
    <!-- <h2>Highlighted rows, borders</h2> -->
    <!-- <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
        v-model="modal1"
        title="输入翻译内容"
        @on-ok="ok"
        @on-cancel="cancel">
        
    </Modal>
    </div> -->

    <div>
       <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
           </Modal>
    </div>
  </div>
  <!-- <div style="margin: 16px">
      <button class="w-full h-10 bg-green-300" type="error" long @click="addItem">
        添加
      </button >
    </div> -->
  <!-- 
    <table
      class="
        bordered
        w-full
        border-solid border border-gray-400
        rounded-md
        shadow-sm
      "
    >
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
        < 简体中文 -->
  <!-- <td class="border border-gray-400 p-2.5 text-left">
          {{ item["zh-cn"] }}
        </td> -->
  <!-- 繁体中文 -->
  <!-- <td class="border border-gray-400 p-2.5 text-left">{{ item.zh_tw }}</td> -->
  <!-- 英语 -->
  <!-- <td class="border border-gray-400 p-2.5 text-left">{{ item.en }}</td> -->
  <!-- 日语 -->
  <!-- <td class="border border-gray-400 p-2.5 text-left">{{ item.ja_jp }}</td> -->
  <!-- 韩语 -->
  <!-- <td class="border border-gray-400 p-2.5 text-left">{{ item.ko_kr }}</td> -->
  <!-- 俄语 -->
  <!-- <td class="border border-gray-400 p-2.5 text-left">{{ item.ru_ru }}</td> -->
  <!-- 德语 -->
  <!-- <td class="border border-gray-400 p-2.5 text-left">{{ item.de_de }}</td> -->
  <!-- 西班牙语 -->
  <!-- <td class="border border-gray-400 p-2.5 text-left">{{ item.es_es }}</td> -->

  <!-- <td class="border border-gray-400 p-2.5 text-left">
          <button round type="primary" @click="updateItem(item)">
            修改
          </button>
          <button round type="primary" @click="deleteItem(item)">
            删除
          </button>
          <span @click="updateItem(item)">修改</span>
          <span @click="deleteItem(item)">删除</span> -->
  <!-- </td>
      </tr>
    </table>  -->

  <!-- <van-dialog
      v-model="showEdit"
      title="标题"
      show-cancel-button
      @confirm="submitItem"
    >
      <van-form>
        <van-cell-group inset>
          <van-field
            v-model="zh_cn"
            name="简体中文"
            label="简体中文"
            placeholder="简体中文"
            :rules="[{ required: true, message: '请填写简体中文' }]"
          />
          <field
            v-model="en"
            name="英文"
            label="英文"
            placeholder="英文"
            :rules="[{ required: true, message: '请填写英文' }]"
          />
           <van-field
            v-model="zh_tw"
            name="繁体中文"
            label="繁体中文"
            placeholder="繁体中文"
            :rules="[{ required: true, message: '请填写繁体中文' }]"
          />
           <field
            v-model="ja_jp"
            name="日语"
            label="日语"
            placeholder="日语"
            :rules="[{ required: true, message: '请填写日语' }]"
          />
           <field
            v-model="ko_kr"
            name="韩语"
            label="韩语"
            placeholder="韩语"
            :rules="[{ required: true, message: '请填写韩语' }]"
          />
           <van-field
            v-model="ru_ru"
            name="俄语"
            label="俄语"
            placeholder="俄语"
            :rules="[{ required: true, message: '请填写俄语' }]"
          />
           <van-field
            v-model="de_de"
            name="德语"
            label="德语"
            placeholder="德语"
            :rules="[{ required: true, message: '请填写德语' }]"
          />
           <van-field
            v-model="es_es"
            name="西班牙语"
            label="西班牙语"
            placeholder="西班牙语"
            :rules="[{ required: true, message: '请填写西班牙语' }]"
          />
        </van-cell-group>
      </van-form>
    </van-dialog>  -->
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      modal1: false,
    };
  },
  methods: {
    // ok () {
    //     this.$Message.info('输入成功');

    // },
    ok() {
      this.$Message.info("输入");
    },

    // cancel () {
    //     this.$Message.info('Clicked 输入shib');
    // },
    cancel() {
      this.$Message.info("Clicked 输入成功");
    },
  },
};
// export const langOriginKeys = ['de_de', 'en', 'es_es', 'ja_jp', 'ko_kr', 'ru_ru', 'zh_cn', 'zh_tw'];

// export default {
//   data() {
//     return {
//       editLangs: "",
//       deleteLangItem: "",
//       gitPushLangs: "",
//       modall: false,
//       getAllLangs: "",
//       showEdit: false,
//       titles: [
//         "key",
//         "简体中文",
//         "英语",
//         "繁体中文",
//         "日语",
//         "韩语",
//         "俄语",
//         "德语",
//         "西班牙语",
//         "操作",
//       ],
//       zh_cn: "",
//       en: "",
//       zh_tw: "",
//       ja_jp: "",
//       ko_kr: "",
//       ru_ru: "",
//       de_de: "",
//       es_es: "",
//       key: "",
//       values: [
//         // { key: 'key_0', 'zh-cn': '你好', en: 'hello' },
//       ],
//     };
//   },
//   methods: {
//     async deleteItem(item) {
//       try {
//         await this.confirm({
//           title: "删除确认",
//           message: "确认删除吗？",
//         });
//         const { msg } = await this.deleteLangItem(item.key);
//         this.Toast(msg);
//         await this.getData();
//       } catch (e) {
//         console.log(e);
//       }
//     },

//     updateItem(item) {
//       this.key = item.key;
//       this.zh_cn = item["zh-cn"];
//       this.zh_tw = item.zh_tw;
//       this.ja_jp = item.ja_jp;
//       this.en = item.en;
//       this.ko_kr = item.ko_kr;
//       this.ru_ru = item.ru_ru;
//       this.de_de = item.de_de;
//       this.es_es = item.es_es;
//       this.showEdit = true;
//     },
//     addItem() {
//       this.key = "";
//       this.zh_cn = "";
//       this.zh_tw = "";
//       this.ja_jp = "";
//       this.en = "";
//       this.ko_kr = "";
//       this.ru_ru = "";
//       this.de_de = "";
//       this.es_es = "";
//       this.showEdit = true;
//     },
//     async gitPush() {
//       try {
//         const beforeClose = async (action) => {
//           if (action === "confirm") {
//             // resolve(true);
//             const { msg } = await this.gitPushLangs();
//             await this.getData();
//             this.Toast(msg);
//           }
//           return true;
//         };
//         await this.confirm({
//           title: "提交确认",
//           message: "确认提交代码吗？",
//           beforeClose,
//         });
//       } catch (e) {
//         console.log(e);
//       }
//     },

//     async submitItem() {
//       const { msg, status } = await this.editLangs(
//         this.zh_cn,
//         this.en,
//         this.ja_jp,
//         this.es_es,
//         this.ko_kr,
//         this.ru_ru,
//         this.zh_cn,
//         this.zh_tw
//       );
//       if (status !== 0) {
//         return this.Toast(msg);
//       }
//       await this.getData();
//       this.Toast("设置成功");
//     },
//     async getData() {
//       const { data } = await this.getAllLangs();
//       const arr = [];

//       for (const key in data.zh_cn) {
//         if (Object.hasOwnProperty.call(data.zh_cn, key)) {
//           arr.push({
//             key,
//             "zh-cn": data.zh_cn[key],
//             de_de: data.de_de[key],
//             en: data.en[key],
//             es_es: data.es_es[key],
//             ja_jp: data.ja_jp[key],
//             ko_kr: data.ko_kr[key],
//             ru_ru: data.ru_ru[key],
//             zh_tw: data.zh_tw[key],
//           });
//         }
//       }
//       this.values = arr;
//     },
//   },
// };
</script>

