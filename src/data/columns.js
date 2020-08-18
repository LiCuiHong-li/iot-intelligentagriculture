//组织列表
export const orgListColumns = [{ //组织列表
		title: 'ID',
		key: 'id',
		align: 'center',
		// width: 100
	},
	{
		title: '组织名称',
		key: 'orgName',
		align: 'center',
		// minWidth: 100

	},
	{
		title: '组织Logo',
		slot: 'orgLogo',
		align: 'center',
		//width:'100'
		// minWidth: 100
	},
	{
		title: '类型',
		key: 'orgTypeName',
		align: 'center',
		//minWidth: 100

	},
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		// width: 200

	},
]

export const rtuListColumns = [{ //设备列表
		title: 'ID',
		key: 'id',
		align: 'center',
		width: 100

	},
	{
		title: '设备图',
		slot: 'rtuTypeImgUrl',
		align: 'center',
		//width: '100'
		width: 100

	},
	{
		title: '编号(名称)/序列号',
		slot: 'nameAndserialNum',
		align: 'center',
		width: 250


	},
	{
		title: '类型',
		key: 'rtuTypeName',
		align: 'center',
		width: 150

	},
	{
		title: '所属组织',
		key: 'orgName',
		align: 'center',
		//width: 150

	},
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		width: 320


	}
]

export const rtuListColumns1 = [ //手机端设备列表
	{
		title: '设备图',
		slot: 'rtuTypeImgUrl',
		align: 'center',
		//width: '100'
		// width: 100

	},
	{
		title: '编号(名称)',
		slot: 'nameAndserialNum',
		align: 'center',
		// width: 250


	},

	{
		title: '状态',
		slot: 'rtuState',
		align: 'center',
		//width: 150

	},
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		// width: 320


	}
]

export const userListColumns = [{ //用户列表
		title: 'ID',
		key: 'id',
		align: 'center',
		width: 100
	},
	{
		title: '用户名',
		key: 'userName',
		align: 'center',
		//width: 100

	},

	{
		title: '用户头像',
		slot: 'userHeadImgUrl',
		align: 'center',
		width: 100
	},

	{
		title: '真实姓名',
		key: 'realName',
		align: 'center',
		// width: 100
	},

	{
		title: '级别',
		key: 'userRolesName',
		align: 'center',
		//width: 150
	},
	{
		title: '联系电话',
		key: 'telephone',
		align: 'center',
		//width: 150
	},
	{
		title: '创建时间',
		key: 'createTime',
		align: 'center',
		width: 160

	},
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		width: 250

	},
]

export const userListColumns1 = [{ //用户列表
		title: 'ID',
		key: 'id',
		align: 'center',
		// width: 100
	},
	{
		title: '用户名',
		key: 'userName',
		align: 'center',
		//width: 100

	},


	{
		title: '真实姓名',
		key: 'realName',
		align: 'center',
		// width: 100
	},

	{
		title: '级别',
		key: 'userRolesName',
		align: 'center',
		//width: 150
	},
	{
		title: '联系电话',
		key: 'telephone',
		align: 'center',
		//width: 150
	},

	{
		title: '操作',
		slot: 'action',
		align: 'center',
		// width: 250

	},
]

export const mapListColumns = [{ //农场列表
		title: 'ID',
		key: 'id',
		align: 'center',
		width: 70
	},
	{
		title: '地图名称',
		key: 'mapName',
		align: 'center',
		width: 100
	},
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		// width: 250

	},
]

export const strategyColumns = [{ //策略列表
		title: 'ID',
		key: 'id',
		align: 'center',
		width: 70
	},
	{
		title: '策略名称',
		key: 'strategyName',
		align: 'center',
	},
	{
		title: '所属组织',
		key: 'orgName',
		align: 'center',
		// width: 100
	},
	{
		title: '创建人',
		key: 'userName',
		align: 'center',
		// width: 100
	},
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		// width: 250

	},
]

export const warnListColumns = [{ //告警列表
		title: 'ID',
		key: 'id',
		align: 'center',
		width: 70
	},
	{
		title: '告警名称',
		key: 'warnName',
		align: 'center',
	},
	{
		title: '告警上限',
		key: 'warnMaxValue',
		align: 'center',
		// width: 100
	},
	{
		title: '告警下限',
		key: 'warnMinValue',
		align: 'center',
		// width: 100
	},
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		// width: 250
		

	},
]

export const warnRtuColumns = [{ //告警设备列表
		title: 'ID',
		key: 'id',
		align: 'center',
		width: 70
	},
	{
		title: '设备编号',
		key: 'rtuNumber',
		align: 'center',
	},
	{
		title: '设备名称',
		key: 'rtuName',
		align: 'center',
		// width: 100
	},
	
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		// width: 250

	},
]

export const wRDetailsColumns = [{ //告警设备列表
		title: 'ID',
		key: 'parameterId',
		align: 'center',
		width: 70
	},
	{
		title: '参数名称',
		key: 'parameterName',
		align: 'center',
	},
	{
		title: '告警名称',
		key: 'warnName',
		align: 'center',
		// width: 100
	},
	{
		title: '上限',
		key: 'warnMaxValue',
		align: 'center',
		// width: 100
	},
	{
		title: '下限',
		key: 'warnMinValue',
		align: 'center',
		// width: 100
	},
	
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		// width: 250
		width: 70

	},
]

export const plotColumns = [{ //地块列表
		title: 'ID',
		key: 'id',
		align: 'center',
		width: 70
	},
	{
		title: '地块名称',
		key: 'massifName',
		align: 'center',
	},
	{
		title: '作物名称',
		key: 'cropName',
		align: 'center',
		// width: 100
	},
	{
		title: '作物图片',
		slot: 'cropImgUrl',
		align: 'center',
		// width: 100
	},
	// {
	// 	title: '下限',
	// 	key: 'warnMinValue',
	// 	align: 'center',
	// 	// width: 100
	// },
	// 
	{
		title: '操作',
		slot: 'action',
		align: 'center',
		// width: 250
		// width: 70

	},
]

