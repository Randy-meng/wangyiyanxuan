import  ajax from './ajax'

// export const getAddress =()=>ajax({
// 	url:'/indexCateModule'
// })
export const getindex =()=>ajax({
	url:'/index'
});

export const getcateNavDatas =()=>ajax({
	url:'/cateNavDatas'
});
export const getcateLists =()=>ajax({
	url:'/cateLists'
});


