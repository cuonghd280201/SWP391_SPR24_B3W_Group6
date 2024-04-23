const SERVICE_URL = "http://26.84.100.30:9000/tour-booking/api/v1";

export default {
    base: SERVICE_URL,
    endpoint:{
        auth: {    
            profile: "/user/profile",   
            updateProfile: "/user/update"

        },
        tour: {
            createTour: "/staff/tour/create",
            getAllTour: "/tour/all",
            paging: "pageNumber=${currentPage}&pageSize=${pageSize}",
            sorting: "sortBy=${sortBy}&sortOrder=${sortOrder}",
            getTourDetailByID: "/tour/get/${tourId}",
            getSlotDetailByID: "/staff/tourTime/getTimeDetail/${timeId}",
            filterTour: "/tour/filter",
            keyWord: "keyWord=${keyWord}"
        }, 
        order: {
            createOrder: "/order/create?tourTimeId=${tourTimeId}&paid=${paid}",
            getAllTour: "/order/all",
            getOrderDetailByID: "/order/${orderId}"
        },
        payment: {
            checkout: "/payment/check-out?uuid=${uuid}",
            transaction: "/transaction/all",
            paging: "pageNumber=${currentPage}&pageSize=${pageSize}",
            sorting: "sortBy=${sortBy}&sortOrder=${sortOrder}",
        },
        staff:{
            updateImage:"/staff/tourImage/updateImage",
            addMoreImage:"/staff/tourImage/addMoreImage",
            deleteImage:"/staff/tourImage/${imageId}",
        },
        admin:{
            orderSumary:"/dashboard/orderSumary",
            getRoleNumber: "/dashboard/getRoleNumber"
        }
        
        
    }
}