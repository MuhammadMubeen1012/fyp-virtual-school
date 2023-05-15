import React, {useEffect, useState} from 'react';
import LayoutStudent from "../../../components/Dashboard/Layout/LayoutStudent";
import Link from "next/link";
import {Button, Card, Nav} from "react-bootstrap";
import LayoutTeacher from "../../../components/Dashboard/Layout/LayoutTeacher";
import {AnnouncementModal, ReceiveTab, SentTab} from "../../dashboard-teacher/announcements";
import {getAnnouncements} from "../controllers/announcementController";

const Courses = () => {

    const [announcements, setAnnouncements] = useState();

    useEffect(() => {
        getAnnouncements().then(res => setAnnouncements(res.announcements));
    }, []);


    return (
        <LayoutStudent>

            {/*=============== Start of main ================= */}
            <main>
                <h1>Announcements</h1>

                <br/><br/>
                <Announcements
                    announcements={announcements}
                />



            </main>
            {/*=============== End Of Main  ==================*/}

        </LayoutStudent>
    );
};

export default Courses;


export function Announcements({announcements}){

    return(
        <>
            {
                announcements?.map(announcement => (
                    <>
                        <Card>
                            <Card.Header>{announcement.subject}</Card.Header>
                            <Card.Body>
                                <Card.Text>{announcement.description}</Card.Text>
                                <Button href={announcement.attachment}>Open</Button>
                            </Card.Body>
                        </Card><br/>
                    </>
                ))
            }

        </>
    )
}
