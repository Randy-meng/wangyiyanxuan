import {
  // SAVE_IMAGES,
  SAVE_INDEX,
  SAVE_GETCATENAVDATAS,
  SAVE_GETCATELISTS,
  SAVE_GETWATERFALL,
  SAVE_GETLANJIAZAI


} from './mutations_type'


export default{
  // async [SAVE_IMAGES](state,indexCateModule){
  //  state.indexCateModule = indexCateModule
  // },
  async [SAVE_INDEX](state,index){
    state.index = index
  },
  async [SAVE_GETCATENAVDATAS](state,getcateNavDatas){
    state.getcateNavDatas = getcateNavDatas
  },
  async [SAVE_GETCATELISTS](state ,getcateLists){
    state.getcateLists = getcateLists
  },
  async [SAVE_GETWATERFALL](state ,waterFall){
    state.waterFall = waterFall
  },
  async [SAVE_GETLANJIAZAI](state ,getlanjiazai){
    state.getlanjiazai = getlanjiazai
  }
}