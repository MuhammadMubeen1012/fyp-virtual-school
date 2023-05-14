import React from 'react';

const RightSideTeacher = () => {
    return (
        <>


            {/* ============== start of Right side ======================== */}
            <div className="right">
                <div className="profile">
                    <div className="info">
                        <p>
                            Hey, <b>Teacher</b>
                        </p>
                    </div>

                    <div className="profile-photo"></div>
                </div>

                {/*====================== Start of Recent Updates ==================== */}

                {/*start of recent Updates*/}
                {/*<div className="recent-updates">*/}
                {/*    <h2>Upcoming Activities</h2>*/}
                {/*    <div className="updates">*/}


                {/*        <div className="update">*/}
                {/*            <div className="profile-photo">*/}
                {/*                <h3>- UX</h3>*/}
                {/*            </div>*/}

                {/*            <div className="message">*/}
                {/*                <p>*/}
                {/*                    Assignment due 20 March*/}
                {/*                </p>*/}
                {/*                <small className="text-muted">2 Minutes Ago</small>*/}
                {/*            </div>*/}
                {/*        </div>*/}


                {/*        <div className="update">*/}
                {/*            <div className="profile-photo">*/}
                {/*                <h3>- SEO</h3>*/}
                {/*            </div>*/}

                {/*            <div className="message">*/}
                {/*                <p>*/}
                {/*                    Assignment due 21 March*/}
                {/*                </p>*/}
                {/*                <small className="text-muted">2 Minutes Ago</small>*/}
                {/*            </div>*/}
                {/*        </div>*/}


                {/*        <div className="update">*/}
                {/*            <div className="profile-photo">*/}
                {/*                <h3>- SE</h3>*/}
                {/*            </div>*/}

                {/*            <div className="message">*/}
                {/*                <p>*/}
                {/*                    Assignment due 25 March*/}
                {/*                </p>*/}
                {/*                <small className="text-muted">2 Minutes Ago</small>*/}
                {/*            </div>*/}
                {/*        </div>*/}


                {/*    </div>*/}
                {/*</div>*/}
                {/*end of recent updates*/}


                <div className="recent-updates">
                    <h2>Notice Board</h2>
                    <div className="updates">
                        <div className="update">
                            <div className="profile-photo">
                                <h3>- UX</h3>
                            </div>

                            <div className="message">
                                <p>Assignment due 20 March</p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>

                        <div className="update">
                            <div className="profile-photo">
                                <h3>- SEO</h3>
                            </div>

                            <div className="message">
                                <p>Assignment due 21 March</p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>

                        <div className="update">
                            <div className="profile-photo">
                                <h3>- SE</h3>
                            </div>

                            <div className="message">
                                <p>Assignment due 25 March</p>
                                <small className="text-muted">2 Minutes Ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================== End of Recent Updates ====================== */}
            </div>
            {/*============= End of Right Side ============================= */}


        </>
    );
};

export default RightSideTeacher;
