import React from 'react';

const RightSideStudent = () => {
    return (
        <>
            {/*============= start of Right side*/}
            <div className="right">

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Momin </b></p>
                    </div>

                    <div className="profile-photo">

                    </div>
                </div>


                {/*start of recent Updates*/}
                <div className="recent-updates">
                    <h2>Upcoming Activities</h2>
                    <div className="updates">


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- UX</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Assignment due 20 March
                                </p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- SEO</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Assignment due 21 March
                                </p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>



                        <div className="update">
                            <div className="profile-photo">
                                <h3>- SE</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Assignment due 25 March
                                </p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>



                    </div>
                </div>
                {/*end of recent updates*/}


                {/*============= start of Upcoming Events*/}
                <div className="upcoming-events">
                    <h2>Upcoming Events</h2>
                    <div className="item online">
                        <div className="icon">
                            <span className="material-icons-sharp">receipt_long</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>Topic: Gestalt Design</h3>
                                <small className="text-muted">Last 24 Hours</small>
                            </div>

                        </div>
                    </div>



                    <div className="item offline">
                        <div className="icon">
                            <span className="material-icons-sharp">local_mall</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>Topic: Digital Marketing</h3>
                                <small className="text-muted">Last 24 Hours</small>
                            </div>


                        </div>
                    </div>

                </div>
                {/*============= end of Upcoming Events*/}


            </div>
            {/*============= End of left Side*/}

        </>
    );
};

export default RightSideStudent;
