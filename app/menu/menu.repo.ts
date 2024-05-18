import { MenuModel } from "./menu.schema";

const getMenu = async () => {
    try {
        const response = await MenuModel.find({})
        return response;
    } catch (e) {
        throw e
    }
}

export default{
    getMenu
}