import React from 'react';
import "./rightbar.css"
import {SlOptions} from 'react-icons/sl'
import {BiSearchAlt} from 'react-icons/bi'

const Rightbar = () => {
    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <div className="rightBarTop">
                        <h3>Sponsored</h3>
                    <div className="rightBarSponsorItem">
                        <img className='rightBarImg' src="assets/sponsor1.jpg" alt="sponsor1" />
                        <span className='sponsorSpan'>Delivery & takeout from the best local restaurants <br /><span className="weblink">doordash.com</span></span>
                        
                    </div>
                    <div className="rightBarSponsorItem">
                        <img className='rightBarImg' src="assets/sponsor2.jpg" alt="sponsor2" />
                        <span className='sponsorSpan'>Great Deals for Flights, Hotels & More <br /><span className="weblink">expedia.com</span></span>
                    </div>
                </div>
                <hr className="rightBarHr" />
                <div className="rightBarCenter">
                    <h4>Birthdays</h4>
                    <div className="rightBarCenterItem">
                        <img className='giftImg' src="assets/gift.jpg" alt="gift" />
                        <span className="birthdaySpan"><strong>Sharon Vanessa</strong> and <strong>3 others have birthdays today.</strong></span>
                    </div>
                </div>
                <hr className="rightBarHr" />
                <div className="rightBarBottom">
                    <div className="rightBarBottomTop">
                        <div className="rightBarBottomTopLeft">
                            <h3>Contacts</h3>
                        </div>
                        <div className="rightBarBottomTopRight">
                        <BiSearchAlt className='rightBarSearch' color='grey' size="20px"/>
                        <SlOptions color='grey' size="20px" />
                        </div>
                    </div>
                    <div className="rightBarFriends">
                        <div className="rightBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='rightBarFriendsImg' src="assets/profile/profile2.jpg" alt="" />
                                <span className="friendsGreen"></span>
                            </div>
                            <span className="friendsUserName">Jade Picon</span>
                        </div>
                        <div className="rightBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='rightBarFriendsImg' src="assets/profile/profile3.jpg" alt="" />
                                <span className="friendsGreen"></span>
                            </div>
                            <span className="friendsUserName">Alex Gomes</span>
                        </div>
                        <div className="rightBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='rightBarFriendsImg' src="assets/profile/profile4.jpg" alt="" />
                                <span className="friendsGreen"></span>
                            </div>
                            <span className="friendsUserName">John Carter</span>
                        </div>
                        <div className="rightBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='rightBarFriendsImg' src="assets/profile/profile5.jpg" alt="" />
                                <span className="friendsGreen"></span>
                            </div>
                            <span className="friendsUserName">Logan Paul</span>
                        </div>
                        <div className="rightBarFriendsItem">
                            <div className="friendsOnline">
                                <img className='rightBarFriendsImg' src="assets/profile/profile1.jpg" alt="" />
                                <span className="friendsGreen"></span>
                            </div>
                            <span className="friendsUserName">Joao Carlos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Rightbar;