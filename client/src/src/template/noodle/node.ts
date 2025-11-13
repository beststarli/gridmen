import { GetTreeNodeInfoParams, LinkNodeParams, MountNodeParams, NodeMeta, UnlinkNodeParams } from './types'

const API_PREFIX = '/noodle/node'

export const getNodeInfo = async ({ nodeKey, child_start_index, child_end_index }: GetTreeNodeInfoParams) => {
    try {
        let url = `${API_PREFIX}?node_key=${nodeKey}&child_start_index=${child_start_index || 0}`
        if (child_end_index !== undefined) url += `&child_end_index=${child_end_index}`

        const response = await fetch(url, { method: "GET" })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const responseData: NodeMeta = await response.json()
        return responseData
    } catch (error) {
        throw new Error(`Failed to get tree node info: ${error}`)

    }
}

export const linkNode = async ({ icrmTag, nodeKey, accessMode }: LinkNodeParams) => {
    try {
        let url = `${API_PREFIX}/link?icrm_tag=${icrmTag}&node_key=${nodeKey}&access_mode=${accessMode}`
        const response = await fetch(url, { method: "GET" })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const responseData = await response.json()
        return responseData
    } catch (error) {
        throw new Error(`Failed to link node: ${error}`)
    }
}

export const unlinkNode = async ({ nodeKey, lockId }: UnlinkNodeParams) => {
    try {
        let url = `${API_PREFIX}/unlink?node_key=${nodeKey}&lock_id=${lockId}`
        const response = await fetch(url, { method: "GET" })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const responseData = await response.json()
        return responseData
    } catch (error) {
        throw new Error(`Failed to unlink node: ${error}`)
    }
}

export const mountNode = async ({ nodeKey, nodeTemplateName }: MountNodeParams) => {
    try {
        let url = `${API_PREFIX}/mount?node_key=${nodeKey}&node_template_name=${nodeTemplateName}`
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ node_key: nodeKey, node_template_name: nodeTemplateName })
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const responseData = await response.json()
        return responseData
    } catch (error) {
        throw new Error(`Failed to mount node: ${error}`)
    }
}