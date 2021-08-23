import axios from '../index';
// export const langOriginKeys = ['de_de', 'en', 'es_es', 'ja_jp', 'ko_kr', 'ru_ru', 'zh_cn', 'zh_tw'];

export const getAllLangs = async () => {
    const res = await axios.get('http://172.21.1.66:8081/getLangs', {
        headers: {
            projectname: 'hilive',
            langkeys: 'zh_cn,zh_tw,en,ja_jp,ko_kr,ru_ru,de_de,es_es',
        },
    });
    return res.data;
};
/**
 * 设置语言
 * @param {*} zh_cn//简体中文
 * @param {*} en//英语
 *  @param {*} zh_tw//繁体中文
 *  *  @param {*} ja_jp//日语
 *  *  @param {*} ko_kr//韩语
 *  *  @param {*} ru_ru//俄语
 *  *  @param {*} de_de//德语
 *  *  @param {*} es_es//西班牙语
 * @param {*} key
 * @returns
 */
export const editLangs = async (zh_cn,zh_tw,en,ja_jp,ko_kr,ru_ru,de_de,es_es, key) => {
    const res = await axios.post(
        'http://172.21.1.66:8081/setLangs',
        { zh_cn,zh_tw,en,ja_jp,ko_kr,ru_ru,de_de,es_es, key },
        {
            headers: {
                projectname: 'hilive',
                langkeys: 'zh_cn,zh_tw,en,ja_jp,ko_kr,ru_ru,de_de,es_es',
            },
        }
    );
    return res.data;
};

export const deleteLangItem = async key => {
    const res = await axios.post(
        'http://172.21.1.66:8081/deleteLangItem',
        { key },
        {
            headers: {
                projectname: 'hilive',
                langkeys: 'zh_cn,zh_tw,en,ja_jp,ko_kr,ru_ru,de_de,es_es',
            },
        }
    );
    return res.data;
};

export const gitPushLangs = async () => {
    const res = await axios.post('http://172.21.1.66:8081/gitPushLangs');
    return res.data;
};
/**
 *
 * @return {*}
 */
export const DictLanguageList = async () => {
    const res = await axios.post('commonService/dictLanguageList');
    return res.data;
};
