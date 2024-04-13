import React from "react";
import '../Home/Timeline.css'




const DetailTour = () => {
    return (
        <div>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate mb-5 pb-5 text-center text-md-left" data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Discover <br />A new Place</h1>
                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Find great places to stay, eat, shop, or visit from local experts</p>
                        </div>
                    </div>
                </div>
            </div>
            <section class="ftco-section">
                <div class="container">
                    <div className="row d-flex">
                        <div className="col-md-8 ftco-animate">
                            <span><i className="icon-map-o" /> NDSGN1371-002-130424VU-H</span>
                            <div className="row justify-content mb-5 pb-3">
                                <div className="col-md-7 heading-section text-center ftco-animate">
                                    <h4 className="mb-1">Hà Nội - Vịnh Hạ Long - KDL Tràng An - Tuyệt Tịnh Cốc - Chùa Tam Chúc - Hà Nam - Hà Nội</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 ftco-animate">
                            <div className="two">
                                <span className="price per-price">7.450.000 đ<small>/tour</small></span>
                            </div>
                        </div>
                        <div className="col-md-2 ftco-animate">
                            <div className="form-group">
                                <input type="submit" defaultValue="Search" className="btn btn-primary py-3 px-5" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="ftco-about d-md-flex">

                <div className="one-half img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                <div className="one-half ftco-animate">
                    <div className="row">
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: 'url(images/destination-1.jpg)' }}>

                            </a>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: 'url(images/destination-2-1.jpg)' }}>

                            </a>
                        </div>
                        <div className="col-md-4 ftco-animate">
                            <a href="#" className="destination-entry img" style={{ backgroundImage: 'url(images/destination-3.jpg)' }}>

                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section services-section bg-light">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                            <div className="one-half ftco-animate">
                                <div className="heading-section ftco-animate ">
                                    <h2 className="mb-4">Lịch trình</h2>
                                </div>
                                <div>
                                    <p>Khởi hành 13/03/2024 - Giờ đi: 18:04</p>
                                    <p>Tập trung 16:04 ngày 13/04/2024</p>
                                    <p>Thời gian 5 ngày</p>
                                    <p>Nơi khởi hành TP. Hồ Chí Minh</p>
                                    <p>Số chỗ còn nhận 4</p>
                                    <div className="col-md-2 ftco-animate">
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                value="Tìm Ngày Khác"
                                                className="btn btn-outline-primary py-3 px-5"
                                                style={{ backgroundColor: 'transparent', border: '1px solid #007bff', color: '#007bff' }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-md d-flex align-self-stretch ftco-animate">
                            <div className="row d-flex">
                                <div className="col-md d-flex align-self-stretch ftco-animate">

                                    <div className="col-md-2 d-flex align-self-stretch ftco-animate">
                                        <div className="media block-6 services d-block">
                                            <div className="icon"><span className="flaticon-yatch" /></div>
                                            <div className="media-body">
                                                <h3 className="heading mb-3">Thời gian</h3>
                                                <p>5 ngày 4 đêm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex align-self-stretch ftco-animate">
                                        <div className="media block-6 services d-block">
                                            <div className="icon"><span className="flaticon-around" /></div>
                                            <div className="media-body">
                                                <h3 className="heading mb-3">Phương tiện di chuyển</h3>
                                                <p>Máy bay, Xe du lịch</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex align-self-stretch ftco-animate">
                                        <div className="media block-6 services d-block">
                                            <div className="icon"><span className="flaticon-compass" /></div>
                                            <div className="media-body">
                                                <h3 className="heading mb-3">Điểm tham quan</h3>
                                                <p>Bangkok, Pattaya, Thai Lan, Bảo tàng Lighting Art, Khao Che Chan, Wat Benchamabophit, Safari World</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex align-self-stretch ftco-animate">
                                        <div className="media block-6 services d-block">
                                            <div className="icon"><span className="flaticon-compass" /></div>
                                            <div className="media-body">
                                                <h3 className="heading mb-3">Ẩm thực
                                                </h3>
                                                <p>Buffet sáng, Theo thực đơn, Đặc sản địa phương</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex align-self-stretch ftco-animate">
                                    <div className="col-md-2 d-flex align-self-stretch ftco-animate">
                                        <div className="media block-6 services d-block">
                                            <div className="icon"><span className="flaticon-compass" /></div>
                                            <div className="media-body">
                                                <h3 className="heading mb-3">Ẩm thực
                                                </h3>
                                                <p>Buffet sáng, Theo thực đơn, Đặc sản địa phương</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex align-self-stretch ftco-animate">
                                        <div className="media block-6 services d-block">
                                            <div className="icon"><span className="flaticon-compass" /></div>
                                            <div className="media-body">
                                                <h3 className="heading mb-3">Ẩm thực
                                                </h3>
                                                <p>Buffet sáng, Theo thực đơn, Đặc sản địa phương</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex align-self-stretch ftco-animate">
                                        <div className="media block-6 services d-block">
                                            <div className="icon"><span className="flaticon-compass" /></div>
                                            <div className="media-body">
                                                <h3 className="heading mb-3">Ẩm thực
                                                </h3>
                                                <p>Buffet sáng, Theo thực đơn, Đặc sản địa phương</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 d-flex align-self-stretch ftco-animate">
                                        <div className="media block-6 services d-block">
                                            <div className="icon"><span className="flaticon-compass" /></div>
                                            <div className="media-body">
                                                <h3 className="heading mb-3">Ẩm thực
                                                </h3>
                                                <p>Buffet sáng, Theo thực đơn, Đặc sản địa phương</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="section-07-map mb-5">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block col-12 left">
                        <div class="container">
                            <main class="row">
                                <section class="col">
                                    <header class="title">
                                        <h2>Lịch Trình</h2>
                                    </header>
                                    <div class="contents">
                                        <div class="box">
                                            <h4>Ngày 1</h4>
                                            <h3>16/04/2024</h3>
                                            <p>TP.HCM - BANGKOK – BẢO TÀNG LIGHTING ART – PATTAYA(Ăn trưa, tối)</p>
                                        </div>
                                        <div class="box">
                                            <h4>Ngày 2</h4>
                                            <h3>17/04/2024</h3>
                                            <p>ĐỀN CHÂN LÝ – CAFÉ & BÁNH PHỦ VÀNG(Ăn sáng, trưa, tối)</p>
                                        </div>
                                        <div class="box">
                                            <h4>Ngày 3</h4>
                                            <h3>18/04/2024</h3>
                                            <p>ĐỀN CHÂN LÝ – CAFÉ & BÁNH PHỦ VÀNG(Ăn sáng, trưa, tối)</p>
                                        </div>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block col-12 left">
                        <div><h3 id="day-00">Ngày 1 - TP.HCM - BANGKOK – BẢO TÀNG LIGHTING ART – PATTAYA	                (Ăn trưa, tối)</h3>

                            <div className="excerpt"><span className="line" /><div>
                                <title />
                                <div style={{ textAlign: 'justify' }}>
                                    <div>
                                        <p>Trưởng đoàn Vietravel đón Quý khách tại Ga đi quốc tế sân bay Tân Sơn Nhất, đáp chuyến bay đi <strong>Bangkok, Thái Lan. </strong>Đến sân bay, đoàn làm thủ tục nhập cảnh và lấy hành lý.&nbsp;<br />
                                            <br />
                                            Xe đón Quý khách khởi hành đi thành phố biển sôi động<strong> Pattaya</strong> - tỉnh Chonburi, cách Bangkok 165km về hướng Đông Nam. Trên đường đi đoàn tham quan:<br />
                                            <br />
                                            <strong>- Bảo tàng Lighting Art và Vườn Khinh khí cầu </strong>– một khu phức hợp mới với những sự sáng tạo; kết hợp giữa sự cổ điển và công nghệ hiện đại. Đến đây, quý khách sẽ được chiêm ngưỡng những cảnh quan đặc sắc của Thái Lan như: lễ hội, đền đài, văn hoá... Tất cả đều được dựng lại bằng ánh đèn lung linh, kết hợp với thiết kế 3D hiện đại, độc đáo. Quý khách còn được ngắm nhìn và chụp những bức hình lưu niệm tuyệt vời với những chiếc khinh khí cầu đầy màu sắc và những chiếc xe hơi cổ xưa tại vườn Khinh khí cầu.&nbsp;<br />
                                            <br />
                                            <strong>- Trân Bảo Phật Sơn (Khao Chee Chan)</strong> là một ngọn núi với hình tượng Đức Phật được khắc bằng tia laser cao 109 mét, bề ngang 70 mét; phần khắc laser được dát lên 999kg vàng 24 kara với tổng trị giá lên tới 5,2 triệu đô. Rất nhiều du khách đến đây để chiêm ngưỡng và tìm thấy bình an trước hình ảnh Đức Phật.<br />
                                            <br />
                                            Quý khách dùng bữa tối tại nhà hàng địa phương, sau đó nhận phòng khách sạn nghỉ ngơi hoặc tự do khám phá thành phố Pattaya về đêm.</p>
                                        <p><br />
                                            <strong>Nghỉ đêm tại Pattaya.&nbsp;</strong></p>
                                    </div>
                                </div>
                                <grammarly-desktop-integration data-grammarly-shadow-root="true" />
                            </div></div></div><div><h3 id="day-01">Ngày 2 - ĐỀN CHÂN LÝ – CAFÉ &amp; BÁNH PHỦ VÀNG	                                                   (Ăn sáng, trưa, tối)</h3><div className="excerpt"><span className="line" /><div>
                                <title />
                                <p style={{ textAlign: 'justify' }}>Quý khách dùng bữa sáng tại khách sạn, sau đó khởi hành tham quan thành phố biển Pattaya.<br />
                                    <br />
                                    <strong>- Đền Chân Lý Pattaya</strong> được xây dựng bằng gỗ, với tổng diện tích toàn bộ khu đền là 12,8 ha bao gồm đền, rừng cây, hồ nước và các công trình phụ trợ. Ngôi đền không những là một tác phẩm nghệ thuật kiến trúc độc đáo, mà còn là một minh chứng cho sự sáng tạo không ngừng nghỉ của nền nghệ thuật hiện đại Thái Lan.&nbsp;<br />
                                    <br />
                                    Sau khi dùng bữa trưa, đoàn tiếp tục chương trình tham quan, mua sắm:<br />
                                    <br />
                                    <strong>- Trung tâm triễn lãm Gems Gallery</strong> – nơi trưng bày các tác phẩm nghệ thuật bằng vàng và đá quý có 1 không 2, được bán đấu giá với giá trị rất cao và được tìm hiểu về công nghệ khai thác, chế tác vàng bạc, đá quý của các nghệ nhân.&nbsp;<br />
                                    <br />
                                    <strong>- Latex Pillow &amp; Mattress (Nhà máy sản xuất cao su thiên nhiên) </strong>tìm hiểu mô hình sản xuất, cũng như trải nghiệm sự êm ái, mềm mại của các sản phẩm được sản xuất từ cao su thiên nhiên. Tại đây, Quý khách có thể mua những sản phẩm được làm từ cao su thiên nhiên của đất nước Thái Lan&nbsp;<br />
                                    <br />
                                    - Quý khách thưởng thức <strong>Café &amp; bánh phủ vàng Vietravel&nbsp;</strong><br />
                                    <br />
                                    Đoàn dùng bữa tối tại nhà hàng địa phương, tự do tham quan và khám phá Pattaya về đêm.&nbsp;</p>
                                <p style={{ textAlign: 'justify' }}><br />
                                    <strong>Nghỉ đêm tại Pattaya.&nbsp;</strong><br />
                                    &nbsp;</p>
                            </div></div></div><div><h3 id="day-02">Ngày 3 - PATTAYA – BANGKOK – BAIYOKE SKY - ICON SIAM 	                          (Ăn sáng, trưa, tối)</h3><div className="excerpt"><span className="line" /><div>
                                <title />
                                <div style={{ textAlign: 'justify' }}>Sau khi dùng bữa sáng và làm thủ tục trả phòng khách sạn, xe đưa đoàn về lại <strong>Bangkok</strong>. Trên đường đi, đoàn dừng chân tham quan, mua sắm:<br />
                                    <br />
                                    <strong>- Viện nghiện cứu thảo dược và huyết thanh chiết xuất từ nọc rắn của Thái Lan</strong><br />
                                    <br />
                                    <strong>- Cửa hàng bánh kẹo địa phương.</strong><br />
                                    <br />
                                    Quý khách dùng bữa trưa buffet tại toà nhà <strong>Baiyoke Sky –</strong> nhà hàng với hàng trăm món buffet tự chọn. Đoàn còn có thể ngắm toàn cảnh thành phố Bangkok từ trên cao.<br />
                                    <br />
                                    Buổi chiều, đoàn tham quan:&nbsp;<br />
                                    <br />
                                    <strong>- Chùa Cẩm Thạch (Wat Benchamabophit)</strong> – Ngôi chùa được xây dựng theo ý nguyện của quốc vương Chulalongkom vào năm 1899 và sau 10 năm thì được hoàn thành, nằm nổi bật tại quận Dusit của Bangkok. Nơi đây có sự pha trộn của kiến trúc giáo hội châu Âu với những cửa sổ lắp kính màu. Mặc dù không phải là công trình đồ sộ nhưng điểm nhấn khiến người ta ấn tượng với Chùa Cẩm Thạch chính là kết cấu và chất liệu.<br />
                                    <br />
                                    - Quý khách <strong>tự do shopping</strong> tại trung tâm <strong>Icon Siam </strong>- khu phức hợp shopping và trưng bày của các thương hiệu nổi tiếng trên thế giới, các cửa hàng được thiết kế đặc trưng riêng của từng khu vực, nhiều hoạt động.&nbsp;<br />
                                    Đoàn dùng bữa tối tại nhà hàng địa phương, sau đó đến khách sạn nhận phòng nghỉ ngơi. Tự do tham quan và khám phá Bangkok về đêm.<br />
                                    &nbsp;<br />
                                    <strong>Nghỉ đêm tại Bangkok.</strong><br />
                                    &nbsp;</div>
                            </div></div></div>
                            </div>
                            </div>
                            </section>


            <section className="section-08 mb-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 left">
                        <h2 className="mb-4">Chi tiết tour</h2>
                        <div className="tour"><div className="detail-tour">
                            <h3 className="tt">Thông tin chuyến bay</h3>
                            <div className="detail-tour-inner">
                                <div className="date"><span>Ngày đi - </span><b>16/04/2024</b></div>
                                <div className="time"><h4>11:35</h4><span>Bay thẳng</span><h4>13:10</h4></div>
                                <div className="from d-flex justify-content-between align-items-center col-12">
                                    <span className="col-md-4 small text-center">TP. HỒ CHÍ MINH</span>
                                    <div className="row col-md-4"><img src="https://media.travel.com.vn/ImageAirlines/logo_VietNamAir.jpg" className="flight-logo" alt="prop" /></div>
                                    <span className="col-md-4 small text-center">SÂN BAY QUỐC TẾ SUVARNABHUMI, BANGKOK, THÁI LAN</span></div>
                                <div className="from d-flex justify-content-between align-items-center col-12"><div className="col-md-4 small text-center">SGN</div>
                                    <div className="row col-md-4" /><div className="col-md-4 small text-center">BKK</div></div><div className="p-line">
                                    <span><img src="/images/icons/go.png" alt="prop" /></span>
                                    <span><img src="/images/icons/airport.png" alt="prop" /></span>
                                    <span><img src="/images/icons/to.png" alt="prop" /></span></div>
                                <div className="cb">Ký hiệu chuyến bay<p> VN605</p></div></div>
                            <div className="detail-tour-inner comeback ">
                                <div className="date"><span>Ngày về - </span><b>20/04/2024</b></div>
                                <div className="time"><h4>14:25</h4><span>Bay thẳng</span><h4>16:10</h4></div>
                                <div className="from d-flex justify-content-between align-items-center col-12">
                                    <span className="col-md-4 small text-center">SÂN BAY QUỐC TẾ SUVARNABHUMI, BANGKOK, THÁI LAN</span>
                                    <div className="row col-md-4"><img src="https://media.travel.com.vn/ImageAirlines/logo_VietNamAir.jpg" className="flight-logo" alt="prop" /></div>
                                    <span className="col-md-4 small text-center">TP. HỒ CHÍ MINH</span></div>
                                <div className="from d-flex justify-content-between align-items-center col-12">
                                    <div className="col-md-4 small text-center">BKK</div><div className="row col-md-4" />
                                    <div className="col-md-4 small text-center">SGN</div></div><div className="p-line">
                                    <span><img src="/images/icons/go.png" alt="prop" /></span><span><img src="/images/icons/airport.png" alt="prop" /></span>
                                    <span><img src="/images/icons/to.png" alt="prop" /></span></div><div className="cb">Ký hiệu chuyến bay<p> VN604</p></div></div></div>
                            <div className="more-info more-info-1 mt-5"><h3 className="tt">Thông tin tập trung</h3>
                                <div className="block"><span>Ngày giờ tập trung</span>
                                    <div className="info">08:35<p>16/04/2024</p>
                                    </div>
                                </div>
                                <div className="block"><span>Nơi tập trung</span>
                                    <div className="info">Sân bay</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 right">
                        <h2>Giá tour &amp; phụ thu phòng đơn</h2>
                        <div className="table-price"><table>
                            <tbody>
                                <tr><th className="l1">Loại khách</th><th className="l2">Giá tour</th><th className="l3">Land tour</th></tr><tr><td>Người lớn (Từ 12 tuổi trở lên)</td><td className="t-price">8.490.000&nbsp;₫</td><td className="l-price">5.990.000&nbsp;₫</td></tr><tr><td>Trẻ em (Từ 2 tuổi đến dưới 12 tuổi)</td><td className="t-price">7.492.500&nbsp;₫</td><td className="l-price">4.493.000&nbsp;₫</td></tr><tr><td>Em bé (Dưới 2 tuổi)</td><td className="t-price">2.997.000&nbsp;₫</td><td className="l-price">1.797.000&nbsp;₫</td></tr><tr className="total"><td>Phụ thu phòng đơn</td><td className="t-price">3.500.000&nbsp;₫</td><td className="l-price">3.500.000&nbsp;₫</td></tr>
                            </tbody></table></div>
                        <h2 className="tt mt-3">Thông tin hướng dẫn viên</h2>
                        <div className="table-price"><div className="more-info more-info-2">
                            <div className="block"><span>HDV dẫn đoàn</span><div className="info">
                                <h3>TRẦN DŨNG CẢM</h3><p>190 Pasteur, Phường Võ Thị Sáu, Quận 3, TP.HCM, Viet Nam</p>
                            </div>
                            </div>
                            <div className="block"><span>HDV tiễn</span><div>Đang cập nhật</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}
export default DetailTour;