const state = {
    lang:'zh-CN',
    curTheme: "defult", // 当前主题
    bgStyleList:{
       defult:{
            headerStyle:["#339999"],
            menuStyle:["#666699"],
            contentStyle:["#CCCCCC"],
        },
        fresh:{
            headerStyle:["#99CC00"],
            menuStyle:["#339933"],
            contentStyle:["#FFFFCC"],
        },
        lively:{
            headerStyle:["#996600"],
            menuStyle:["#FF9966"],
            contentStyle:["#CCCC00"],
        }
    }
    
};
const mutations={
    changeLang(state,params){
        state.lang=params;
    },
    changeTheme(state,params){
        state.curTheme=params;
    },
};
export default {
    namespaced: true,
    state,
    mutations
};
  