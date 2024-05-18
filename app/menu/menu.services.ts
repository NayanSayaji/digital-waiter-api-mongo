import menuRepo from "./menu.repo";
import { menuResponses } from "./menu.repsonse";
const getMenu = async () => {
    try {
        const response = await menuRepo.getMenu();
        return response;
    } catch (e) {
        throw menuResponses.INTERNAL_SERVER_ERROR;
    }
}

export default {
    getMenu
}