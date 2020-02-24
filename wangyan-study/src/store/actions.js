import {
	// getAddress,
	getindex,
	getcateNavDatas,
	getcateLists,
	getWaterfall,
	getLanjiazai
} from '../api/index'

import {
	// SAVE_IMAGES
	SAVE_INDEX,
	SAVE_GETCATENAVDATAS,
	SAVE_GETCATELISTS,
	SAVE_GETWATERFALL,
	SAVE_GETLANJIAZAI
} from "./mutations_type";

export default {
  // async getAddImages({commit}){
	//   let result = await getAddress()
  //
	//   commit(SAVE_IMAGES,result[0])
  // },
	async getAddindex({commit}){
		let result = await getindex()

		commit(SAVE_INDEX,result)
	},
	async getAddcateNavDatas({commit}){
		let result = await getcateNavDatas()

		commit(SAVE_GETCATENAVDATAS,result)
	},
	async getcateLists({commit}){
		let result = await getcateLists()

		commit(SAVE_GETCATELISTS,result)
	},
	async getAddWatrtfall({commit}){
		let result = await getWaterfall()
		// console.log(result)

		if(result.code == 200){
			commit(SAVE_GETWATERFALL,result.data)
		}
	},
	async getAddLanjiazai({commit}){
		let result = await getLanjiazai()
		// console.log(result)

		if(result.code == 200){
			commit(SAVE_GETLANJIAZAI,result.data)
		}
	},

}