import React, { useEffect, useState } from "react";

import '../Admin/dashboard.css'
import { Layout } from 'antd';


import NavBarWebAdmin from "./Navbar/NavBarWebAdmin";
import SiderBarWebAdmin from "./SlideBar/SiderBarWebAdmin";
import adminServices from "../../services/admin.services";
const { Content } = Layout;


const Dashboard = () => {
    const [orderSumary, setOrderSumary] = useState(); // Initialize users as an object
    const [roleNumber, setRoleNumber] = useState(); //

    useEffect(() => {
        fetchOrderSumary();
        fetchRoleNumber();
    }, []);

    const fetchOrderSumary = async () => {
        const response = await adminServices.getOrderSumary();
        setOrderSumary(response.data.data);
    }

    const fetchRoleNumber = async () => {
        const response = await adminServices.getRoleNumber();
        setRoleNumber(response.data.data);
    }
    return (

        <Layout style={{ minHeight: "100vh" }}>
            <SiderBarWebAdmin choose={"menu-key/1"}></SiderBarWebAdmin>
            <Layout>
                <NavBarWebAdmin></NavBarWebAdmin>
                <div
                    style={{
                        padding: "30px",
                        background: "white",
                        margin: "30px",
                        borderRadius: "12px",
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                >
                    <Content>

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h2 className="pageheader-title">Dashboard </h2>
                                </div>
                            </div>
                        </div>
                        <div className="ecommerce-widget">
                            <div className="row row-with-margin">
                                <div className="col-xl-3 ">
                                    <div className="card border-5 border-top border-info-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Tổng tiền</h5>
                                            <div className="metric-value d-inline-block">
                                                <h2>{orderSumary?.completedCount}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="card border-5 border-top border-success-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Tổng số tiền hoàn trả</h5>
                                            <div className="metric-value d-inline-block">
                                            <h2>{orderSumary?.refundedCount}</h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="card border-5 border-top border-warning-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Số lượng khách hàng</h5>
                                            <div className="metric-value d-inline-block">
                                                <h2>{roleNumber?.countUser}</h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="card border-5 border-top border-primary-subtle">
                                        <div className="card-body-dashboard">
                                            <h5 className="text-muted">Số lượng nhân viên</h5>
                                            <div className="metric-value d-inline-block">
                                            <h2>{roleNumber?.countStaff}</h2>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row row-with-margin">
                                <div className="col-xl-7 ">
                                    <div className="card border-info-subtle border-3">
                                        <h5 className="card-header">Recent Hiring Requests</h5>
                                        <div className="card-body-dashboard p-0">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead className="bg-light">
                                                        <tr className="border-0">
                                                            <th className="border-0" >Request Code</th>
                                                            <th className="border-0">Job Title</th>
                                                            <th className="border-0">Posted Time</th>
                                                            <th className="border-0">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Product #1 </td>
                                                            <td>id000001 </td>
                                                            <td>20</td>
                                                        </tr>
                                                        {/* {listRecentHiringRequest.map((request) => (
                                                                <tr key={request.requestId}>
                                                                    <td >{request.requestCode}</td>
                                                                    <td >{request.jobTitle}</td>
                                                                    <td >{request.postedTime}</td>
                                                                    <td >
                                                                        <Badge
                                                                            status={
                                                                                request.statusString === 'Completed'
                                                                                    ? 'success'
                                                                                    : request.statusString === 'In Progress'
                                                                                        ? 'processing'
                                                                                        : request.statusString === 'Closed'
                                                                                            ? 'error'
                                                                                            : request.statusString === 'Waiting Approval'
                                                                                                ? 'warning' // You can replace 'warning' with the desired status for 'Waiting Approval'
                                                                                                : 'default' // Or any other status you want for unmatched cases
                                                                            }
                                                                            text={request.statusString}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            ))} */}
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5">
                                    <div className="card">
                                        <h5 className="card-header">User By Chart</h5>
                                        <div className="card-body">
                                            <div id="c3chart_category" style={{ height: 420 }} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                {/* <div className="card">
                                    <h5 className="card-header">Fixed Header</h5>
                                    <div className="card-datatable table-responsive">
                                        <div id="DataTables_Table_1_wrapper" className="dataTables_wrapper dt-bootstrap5"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="DataTables_Table_1_length"><label>Show <select name="DataTables_Table_1_length" aria-controls="DataTables_Table_1" className="form-select"><option value={7}>7</option><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={75}>75</option><option value={100}>100</option></select> entries</label></div></div><div className="col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"><div id="DataTables_Table_1_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control" placeholder aria-controls="DataTables_Table_1" /></label></div></div></div><table className="dt-fixedheader table border-top dataTable dtr-column collapsed" id="DataTables_Table_1" aria-describedby="DataTables_Table_1_info" style={{ width: 1211 }}><thead>
                                            <tr><th className="control sorting_disabled" rowSpan={1} colSpan={1} style={{ width: 0 }} aria-label /><th className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowSpan={1} colSpan={1} style={{ width: 18 }} data-col={1} aria-label><input type="checkbox" className="form-check-input" /></th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{ width: '207.875px' }} aria-label="Name: activate to sort column ascending">Name</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{ width: '205.413px' }} aria-label="Email: activate to sort column ascending">Email</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{ width: '75.1px' }} aria-label="Date: activate to sort column ascending">Date</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{ width: '72.8125px' }} aria-label="Salary: activate to sort column ascending">Salary</th><th className="sorting dtr-hidden" tabIndex={0} aria-controls="DataTables_Table_1" rowSpan={1} colSpan={1} style={{ width: '117.625px', display: 'none' }} aria-label="Status: activate to sort column ascending">Status</th><th className="sorting_disabled dtr-hidden" rowSpan={1} colSpan={1} style={{ width: '70.8125px', display: 'none' }} aria-label="Actions">Actions</th></tr>
                                        </thead>
                                            <tbody><tr className="odd"><td className="control" tabIndex={0} style={{}} />
                                                <td className="  dt-checkboxes-cell">
                                                    <input type="checkbox" className="dt-checkboxes form-check-input" /></td><td>
                                                    <div className="d-flex justify-content-start align-items-center">
                                                        <div className="avatar-wrapper"><div className="avatar me-2">
                                                            <span className="avatar-initial rounded-circle bg-label-success">GG</span></div>
                                                        </div><div className="d-flex flex-column"><span className="emp_name text-truncate">Glyn Giacoppo</span>
                                                            <small className="emp_post text-truncate text-muted">Software Test Engineer</small></div>
                                                    </div></td><td>ggiacoppo2r@apache.org</td><td className style={{}}>04/15/2021</td>
                                                <td>$24973.48</td><td className="dtr-hidden" style={{ display: 'none' }}><span className="badge  bg-label-success">Professional</span></td>
                                                <td className="dtr-hidden" style={{ display: 'none' }}><div className="d-inline-block"><a href="javascript:;" className="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded" /></a>
                                                    <div className="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" className="dropdown-item">Details</a>
                                                        <a href="javascript:;" className="dropdown-item">Archive</a><div className="dropdown-divider" /><a href="javascript:;" className="dropdown-item text-danger delete-record">Delete</a></div>
                                                </div><a href="javascript:;" className="btn btn-sm btn-icon item-edit"><i className="bx bxs-edit" /></a></td>
                                            </tr><tr className="even">
                                            <td className="control" tabIndex={0} style={{}} /><td className="  dt-checkboxes-cell">
                                            <input type="checkbox" className="dt-checkboxes form-check-input" /></td><td>
                                            <div className="d-flex justify-content-start align-items-center">
                                            <div className="avatar-wrapper"><div className="avatar me-2">
                                            <img src="../../assets/img/avatars/10.png" alt="Avatar" className="rounded-circle" />
                                            </div></div><div className="d-flex flex-column">
                                            <span className="emp_name text-truncate">Evangelina Carnock</span>
                                            <small className="emp_post text-truncate text-muted">Cost Accountant</small>
                                            </div></div></td><td>ecarnock2q@washington.edu</td>
                                            <td className style={{}}>01/26/2021</td><td>$23704.82</td>
                                            <td className="dtr-hidden" style={{ display: 'none' }}><span className="badge  bg-label-warning">Resigned</span></td><td className="dtr-hidden" style={{ display: 'none' }}><div className="d-inline-block"><a href="javascript:;" className="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded" /></a><div className="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" className="dropdown-item">Details</a><a href="javascript:;" className="dropdown-item">Archive</a><div className="dropdown-divider" /><a href="javascript:;" className="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" className="btn btn-sm btn-icon item-edit"><i className="bx bxs-edit" /></a></td></tr><tr className="odd"><td className="control" tabIndex={0} style={{}} /><td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td><div className="d-flex justify-content-start align-items-center"><div className="avatar-wrapper"><div className="avatar me-2"><img src="../../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" /></div></div><div className="d-flex flex-column"><span className="emp_name text-truncate">Olivette Gudgin</span><small className="emp_post text-truncate text-muted">Paralegal</small></div></div></td><td>ogudgin2p@gizmodo.com</td><td className style={{}}>04/09/2021</td><td>$15211.60</td><td className="dtr-hidden" style={{ display: 'none' }}><span className="badge  bg-label-success">Professional</span></td><td className="dtr-hidden" style={{ display: 'none' }}>
                                            <div className="d-inline-block"><a href="javascript:;" className="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded" /></a><div className="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" className="dropdown-item">Details</a><a href="javascript:;" className="dropdown-item">Archive</a>
                                            <div className="dropdown-divider" /><a href="javascript:;" className="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" className="btn btn-sm btn-icon item-edit">
                                            <i className="bx bxs-edit" /></a></td></tr>
                                            <tr className="even"><td className="control" tabIndex={0} style={{}} />
                                            <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td>
                                            <div className="d-flex justify-content-start align-items-center"><div className="avatar-wrapper">
                                            <div className="avatar me-2"><span className="avatar-initial rounded-circle bg-label-danger">RP</span></div>
                                            </div><div className="d-flex flex-column"><span className="emp_name text-truncate">Reina Peckett</span><small className="emp_post text-truncate text-muted">Quality Control Specialist</small></div></div>
                                            </td><td>rpeckett2o@timesonline.co.uk</td><td className style={{}}>05/20/2021</td><td>$16619.40</td><td className="dtr-hidden" style={{ display: 'none' }}><span className="badge  bg-label-warning">Resigned</span></td><td className="dtr-hidden" style={{ display: 'none' }}><div className="d-inline-block"><a href="javascript:;" className="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded" /></a><div className="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" className="dropdown-item">Details</a><a href="javascript:;" className="dropdown-item">Archive</a><div className="dropdown-divider" />
                                            <a href="javascript:;" className="dropdown-item text-danger delete-record">Delete</a></div>
                                            </div><a href="javascript:;" className="btn btn-sm btn-icon item-edit"><i className="bx bxs-edit" /></a></td></tr><tr className="odd"><td className="control" tabIndex={0} style={{}} /><td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td><div className="d-flex justify-content-start align-items-center"><div className="avatar-wrapper"><div className="avatar me-2"><span className="avatar-initial rounded-circle bg-label-dark">AB</span></div></div><div className="d-flex flex-column"><span className="emp_name text-truncate">Alaric Beslier</span><small className="emp_post text-truncate text-muted">Tax Accountant</small></div></div></td><td>abeslier2n@zimbio.com</td><td className style={{}}>04/16/2021</td><td>$19366.53</td><td className="dtr-hidden" style={{ display: 'none' }}><span className="badge  bg-label-warning">Resigned</span></td><td className="dtr-hidden" style={{ display: 'none' }}><div className="d-inline-block"><a href="javascript:;" className="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded" /></a><div className="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" className="dropdown-item">Details</a><a href="javascript:;" className="dropdown-item">Archive</a><div className="dropdown-divider" /><a href="javascript:;" className="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" className="btn btn-sm btn-icon item-edit"><i className="bx bxs-edit" /></a></td></tr><tr className="even"><td className="control" tabIndex={0} style={{}} /><td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td><div className="d-flex justify-content-start align-items-center"><div className="avatar-wrapper"><div className="avatar me-2"><img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" /></div></div><div className="d-flex flex-column"><span className="emp_name text-truncate">Edwina Ebsworth</span><small className="emp_post text-truncate text-muted">Human Resources Assistant</small></div></div></td><td>eebsworth2m@sbwire.com</td><td className style={{}}>09/27/2021</td><td>$19586.23</td><td className="dtr-hidden" style={{ display: 'none' }}><span className="badge bg-label-primary">Current</span></td><td className="dtr-hidden" style={{ display: 'none' }}>
                                            <div className="d-inline-block"><a href="javascript:;" className="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded" /></a><div className="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" className="dropdown-item">Details</a>
                                            <a href="javascript:;" className="dropdown-item">Archive</a><div className="dropdown-divider" /><a href="javascript:;" className="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" className="btn btn-sm btn-icon item-edit"><i className="bx bxs-edit" /></a></td></tr><tr className="odd"><td className="control" tabIndex={0} style={{}} /><td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td><td><div className="d-flex justify-content-start align-items-center"><div className="avatar-wrapper"><div className="avatar me-2"><span className="avatar-initial rounded-circle bg-label-success">RH</span></div></div><div className="d-flex flex-column"><span className="emp_name text-truncate">Ronica Hasted</span><small className="emp_post text-truncate text-muted">Software Consultant</small></div></div></td><td>rhasted2l@hexun.com</td><td className style={{}}>07/04/2021</td><td>$24866.66</td><td className="dtr-hidden" style={{ display: 'none' }}><span className="badge  bg-label-warning">Resigned</span></td><td className="dtr-hidden" style={{ display: 'none' }}><div className="d-inline-block"><a href="javascript:;" className="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i className="bx bx-dots-vertical-rounded" /></a>
                                            <div className="dropdown-menu dropdown-menu-end m-0"><a href="javascript:;" className="dropdown-item">Details</a><a href="javascript:;" className="dropdown-item">Archive</a><div className="dropdown-divider" /><a href="javascript:;" className="dropdown-item text-danger delete-record">Delete</a></div></div><a href="javascript:;" className="btn btn-sm btn-icon item-edit"><i className="bx bxs-edit" /></a></td></tr></tbody>
                                            <tfoot>
                                                <tr><th className="control" rowSpan={1} colSpan={1} style={{}} /><th rowSpan={1} colSpan={1} /><th rowSpan={1} colSpan={1}>Name</th><th rowSpan={1} colSpan={1}>Email</th><th rowSpan={1} colSpan={1} className style={{}}>Date</th><th rowSpan={1} colSpan={1}>Salary</th><th rowSpan={1} colSpan={1} className="dtr-hidden" style={{ display: 'none' }}>Status</th><th rowSpan={1} colSpan={1} className="dtr-hidden" style={{ display: 'none' }}>Action</th></tr>
                                            </tfoot>
                                        </table><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_info" id="DataTables_Table_1_info" role="status" aria-live="polite">Showing 1 to 7 of 100 entries</div></div><div className="col-sm-12 col-md-6"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_1_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_1_previous"><a aria-controls="DataTables_Table_1" aria-disabled="true" role="link" data-dt-idx="previous" tabIndex={-1} className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_1" role="link" aria-current="page" data-dt-idx={0} tabIndex={0} className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" role="link" data-dt-idx={1} tabIndex={0} className="page-link">2</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" role="link" data-dt-idx={2} tabIndex={0} className="page-link">3</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" role="link" data-dt-idx={3} tabIndex={0} className="page-link">4</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" role="link" data-dt-idx={4} tabIndex={0} className="page-link">5</a></li><li className="paginate_button page-item disabled" id="DataTables_Table_1_ellipsis"><a aria-controls="DataTables_Table_1" aria-disabled="true" role="link" data-dt-idx="ellipsis" tabIndex={-1} className="page-link">…</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" role="link" data-dt-idx={14} tabIndex={0} className="page-link">15</a></li><li className="paginate_button page-item next" id="DataTables_Table_1_next"><a href="#" aria-controls="DataTables_Table_1" role="link" data-dt-idx="next" tabIndex={0} className="page-link">Next</a></li></ul></div></div></div><div style={{ width: '1%' }} /></div>
                                    </div>
                                </div> */}


                            </div>


                        </div>

                    </Content>
                </div>
            </Layout >
        </Layout >

    )
}

export default Dashboard