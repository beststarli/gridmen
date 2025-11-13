export interface GetTreeNodeInfoParams {
    nodeKey: string
    child_start_index?: number
    child_end_index?: number
}

export interface NodeMeta {
    node_key: string
    access_info: string | null
    template_name: string
    children: NodeMeta[] | null
}

export interface baseResponse {
    success: boolean
    message: string
}

export interface LinkNodeParams {
    icrmTag: string
    nodeKey: string
    accessMode: 'r' | 'w'
}

export interface UnlinkNodeParams {
    nodeKey: string
    lockId: string
}

export interface MountNodeParams {
    nodeKey: string
    nodeTemplateName: string
}