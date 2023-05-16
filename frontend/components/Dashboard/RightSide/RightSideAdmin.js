import React from 'react';

const RideSideAdmin = () => {
    return (
        <>
            {/*============= start of Right side*/}
            <div className="right">

                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Admin </b></p>
                    </div>

                    <div className="profile-photo">

                    </div>
                </div>


                {/*start of recent Updates*/}
                <div className="recent-updates">
                    <h2>Results</h2>
                    <div className="updates">


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- A</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Admission Result
                                </p>
                            </div>
                        </div>


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- C</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Classroom results
                                </p>
                            </div>
                        </div>


                        <div className="update">
                            <div className="profile-photo">
                                <h3>- E</h3>
                            </div>

                            <div className="message">
                                <p>
                                    Exam Results
                                </p>

                            </div>
                        </div>


                    </div>
                </div>
                {/*end of recent updates*/}


                {/*============= start of Upcoming Events ==================*/}
                <div className="upcoming-events">
                    <h2>Notice Board</h2>
                    <div className="item online">
                        <div className="icon">
                            <span className="material-icons-sharp">receipt_long</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>Notice 01</h3>
                                <small className="text-muted">24 Hours ago</small>
                            </div>

                        </div>
                    </div>


                    <div className="item offline">
                        <div className="icon">
                            <span className="material-icons-sharp">local_mall</span>
                        </div>
                        <div className="right">
                            <div className="info">
                                <h3>Notice 02</h3>
                                <small className="text-muted">24 Hours ago</small>
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

export default RideSideAdmin;
