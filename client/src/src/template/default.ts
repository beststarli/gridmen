import { NodeTemplateFunctionSet } from "@/registry/viewRegistry";
import { IResourceNode } from "./scene/iscene";
import { IViewContext } from "./views/IViewContext";

export default class DefaultTemplate {
    static templateName: string = 'default'
    static viewModels: Record<string, NodeTemplateFunctionSet> = {}

    static checkViewModel(nodeSelf: IResourceNode, context: IViewContext): Function {
        return () => null
    }

    static creationViewModel(nodeSelf: IResourceNode, context: IViewContext): Function {
        return () => null
    }

    static editViewModel(nodeSelf: IResourceNode, context: IViewContext): Function {
        return () => null
    }
}