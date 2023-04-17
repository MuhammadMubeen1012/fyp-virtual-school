import React from 'react';
import LayoutAdmin from "../../components/Dashboard/Layout/LayoutAdmin";

const DashboardAdmin = () => {
    return (
        <LayoutAdmin>

            {/*=============== Start of main ================= */}
            <main >
                <h1>Overview</h1>

                {/* ============ Start of insights ============== */}

                <div className="insights">

                    {/*course completed*/}
                    <div className="course-completed">
                        <span className="material-icons-sharp">person_outline</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Students</h3>
                                <h1>81</h1>
                            </div>

                            {/*<div className="progress">*/}
                            {/*    <svg>*/}
                            {/*        <circle cx={"38"} cy={"38"} r={"36"}></circle>*/}
                            {/*    </svg>*/}

                            {/*    <div className="number">*/}
                            {/*        <p>81%</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                    </div>

                    {/*course progress*/}
                    <div className="course-progress">
                        <span className="material-icons-sharp">analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Teachers</h3>
                                <h1>3</h1>
                            </div>

                            {/*<div className="progress">*/}
                            {/*    <svg>*/}
                            {/*        <circle cx={"38"} cy={"38"} r={"36"}></circle>*/}
                            {/*    </svg>*/}

                            {/*    <div className="number">*/}
                            {/*        <p>68%</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                    </div>

                    {/*Certification*/}
                    <div className="certification">
                        <span className="material-icons-sharp">analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Faculty</h3>
                                <h1>8</h1>
                            </div>

                            {/*<div className="progress">*/}
                            {/*    <svg>*/}
                            {/*        <circle cx={"38"} cy={"38"} r={"36"}></circle>*/}
                            {/*    </svg>*/}

                            {/*    <div className="number">*/}
                            {/*        <p>62%</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                    </div>

                </div>

                {/*============ END of insights =================== */}



            </main>
            {/*=============== End Of Main  ==================*/}



        </LayoutAdmin>
    );
};

export default DashboardAdmin;
