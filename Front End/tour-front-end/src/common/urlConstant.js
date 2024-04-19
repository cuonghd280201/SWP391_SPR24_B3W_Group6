const SERVICE_URL = "http://26.84.100.30:9000/tour-booking/api/v1";

export default {
    base: SERVICE_URL,
    endpoint:{
        auth: {    
            profile: "/user/profile",   
            updateProfile: "/user/update"

        },
        tour: {
            getAllTour: "/tour/all",
            paging: "pageNumber=${currentPage}&pageSize=${pageSize}",
            sorting: "sortBy=${sortBy}&sortOrder=${sortOrder}",
            getTourDetailByID: "/tour/get/${tourId}"
        }, 
        order: {
            createOrder: "/order/create",
        }
        
        
    }
}