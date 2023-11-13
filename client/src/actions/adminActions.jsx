import { axiosAdminInstance } from "../constants/adminConstants"
import axios from 'axios'

export const addCategoryHandler = (details) => async (dispatch) => {
    console.log('details',details)
    const formData = new FormData()
    Object.entries(details).forEach(([key, value]) => { formData.append(key, value); });
    
    const { data } = await axiosAdminInstance.post('addCategory', formData)
}