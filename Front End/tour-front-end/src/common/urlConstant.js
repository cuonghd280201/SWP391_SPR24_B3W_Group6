const SERVICE_URL = "http://26.84.100.30:9000/tour-booking/api/v1";

export default {
    base: SERVICE_URL,
    endpoint:{
        auth: {         
        },
        tour: {
            getAllTour: "/tour/all",
            paging: "pageNumber=${currentPage}&pageSize=${pageSize}",
            sorting: "sortBy=${sortBy}&sortOrder=${sortOrder}",
            getTourDetailByID: "/staff/tourTime/get/${tourId}"
        },     
    }
}