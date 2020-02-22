import {
  // SAVE_IMAGES,
  SAVE_INDEX,
  SAVE_GETCATENAVDATAS,
  SAVE_GETCATELISTS

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
  }
}