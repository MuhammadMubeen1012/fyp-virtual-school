import React from 'react';
import {Button} from "react-bootstrap";
import LayoutAdmin from "../../../components/Dashboard/Layout/LayoutAdmin";

const Teachers = () => {
    return (
        <LayoutAdmin>

            <main>
                <div className="courses-table">

                    <h2>All Teachers</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Name</th>
                            <th>Father Name</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ali</td>
                            <td>Ahmed</td>

                        </tr>

                        </tbody><br/>
                    </table>

                </div>
            </main>



        </LayoutAdmin>
    );
};

export default Teachers;
