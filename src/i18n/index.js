import VueI18n from 'vue-i18n'
import de_de from './langs/de_de.json'
import en from './langs/en.json'
import es_es from './langs/es_es.json'
import ja_jp from './langs/ja_jp.json'
import ko_kr from './langs/ko_kr.json'
import ru_ru from './langs/ru_ru.json'
import zh_cn from './langs/zh_cn.json'
import zh_tw from './langs/zh_tw.json'


import Vue from 'vue'
window.Vue = Vue 
const i18n = new VueI18n({
    locale: 'ja-jp',
    messages: {
        'en-us': en,
        'es-es': es_es,
        'de-de': de_de,
        'ja-jp': ja_jp,
        'ko-kr': ko_kr,
        'ru-ru': ru_ru,
        'zh-cn': zh_cn,
        'zh_tw': zh_tw,
    }
    // something vue-i18n options here ...
})
/**
 * 中文内容转换
 * @param {string} zhContent 中文内容
 * @param {string[]} params 
 * @returns 
 */
export const trans = (zhContent, params = []) => {
    const kv = Object.entries(zh_cn).find((it) => it[1] === zhContent);
    if (!kv) return zhContent;
    const [key] = kv;
    return i18n.t(key, params);
}


export default i18n