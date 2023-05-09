import { getSession } from "next-auth/react"
import { FormValues } from "../../../components/accountComponents/Forms/ReviewForm"
import strapi from "../../../utils/strapi"
import { Datum } from "../types/Review"

interface ReviewForm extends  FormValues  {
    product_id:number | null
}
//  create Review 
export const createReview = async (data:ReviewForm)=>{
    const session = await getSession()
    const response = await strapi.create("reviews",{...data,user:session?.user.id})
    return response.data
}

// get Reviews By Product Id

export const getReviewsByProductId = async (id:number): Promise<any> => {
    const response = await strapi.find(`reviews`,{
        filters:{
            product_id:id
        },
        populate:["*","user"]
    })
    let data = response
    return data
}