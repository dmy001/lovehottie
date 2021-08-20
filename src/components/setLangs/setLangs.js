// import axios from '../http';
// // export const langOriginKeys = ['de_de', 'en', 'es_es', 'ja_jp', 'ko_kr', 'ru_ru', 'zh_cn', 'zh_tw'];

// export const getAllLangs = async () => {
//     const res = await axios.get('http://172.21.1.66:8081/getLangs', {
//         headers: {
//             projectname: 'hilive',
//             langkeys: 'zh_cn,en',
//         },
//     });
//     return res.data;
// };
// /**
//  * 设置语言
//  * @param {*} zh_cn
//  * @param {*} en
//  * @param {*} key
//  * @returns
//  */
// export const editLangs = async (zh_cn, en, key) => {
//     const res = await axios.post(
//         'http://172.21.1.66:8081/setLangs',
//         { zh_cn, en, key },
//         {
//             headers: {
//                 projectname: 'hilive',
//                 langkeys: 'zh_cn,en',
//             },
//         }
//     );
//     return res.data;
// };

// export const deleteLangItem = async key => {
//     const res = await axios.post(
//         'http://172.21.1.66:8081/deleteLangItem',
//         { key },
//         {
//             headers: {
//                 projectname: 'hilive',
//                 langkeys: 'zh_cn,en',
//             },
//         }
//     );
//     return res.data;
// };

// export const gitPushLangs = async () => {
//     const res = await axios.post('http://172.21.1.66:8081/gitPushLangs');
//     return res.data;
// };
// /**
//  *
//  * @return {*}
//  */
// export const DictLanguageList = async () => {
//     const res = await axios.post('commonService/dictLanguageList');
//     return res.data;
// };
