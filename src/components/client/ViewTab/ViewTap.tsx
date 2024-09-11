'use client'
import { useState } from 'react'; // Import useState hook

import Styles from './ViewTap.module.scss';
import Image from "next/image"
import { Icon } from '@iconify/react';

import EMimg from '@/assets/cover-clinic/proto.png'
import PCimg from '@/assets/cover-clinic/proto.png'
import CCimg from '@/assets/cover-clinic/proto.png'
import RECCimg from '@/assets/cover-clinic/proto.png'
import Link from 'next/link';

interface ViewTapProps {
    nav: {
        EM: string;
        PC: string;
        CC: string;
        RECC: string;
    }
    lang: string;
}

const ViewTap: React.FC<ViewTapProps> = ({ nav, lang }) => {

    const [activeContent, setActiveContent] = useState(`EM-${lang}`); // State for active content

    const handleItemClick = (content: string) => {
        setActiveContent(content); // Update active content when an item is clicked
    };

    return (
        <section className={Styles.sec_service_container}>
            <ul className={Styles.nav_button}>
                <li onClick={() => handleItemClick(`EM-${lang}`)} className={activeContent === `EM-${lang}` ? Styles.active : ''}>
                    <Icon icon='uil:ambulance' className={Styles.icon} />
                    {nav.EM}
                </li>
                <li onClick={() => handleItemClick(`PC-${lang}`)} className={activeContent === `PC-${lang}` ? Styles.active : ''}>
                    <Icon icon='uil:clinic-medical' className={Styles.icon} />
                    {nav.PC}
                </li>
                <li onClick={() => handleItemClick(`CC-${lang}`)} className={activeContent === `CC-${lang}` ? Styles.active : ''}>
                    <Icon icon='carbon:reminder-medical' className={Styles.icon} />
                    {nav.CC}
                </li>
                <li onClick={() => handleItemClick(`RECC-${lang}`)} className={activeContent === `RECC-${lang}` ? Styles.active : ''}>
                    <Icon icon='tabler:dental' className={Styles.icon} />
                    {nav.RECC}
                </li>
            </ul>
            <div className={Styles.content_container}>

                {(() => {
                    switch (activeContent) {
                        case 'EM-TH':
                            return <Emergency />;
                        case 'PC-TH':
                            return <Pediatrics />;
                        case 'CC-TH':
                            return <CheckUpCenter />;
                        case 'RECC-TH':
                            return <RECC />;
                        case 'EM-EN':
                            return <Emergency_EN />;
                        case 'PC-EN':
                            return <Pediatrics_EN />;
                        case 'CC-EN':
                            return <CheckUpCenter_EN />;
                        case 'RECC-EN':
                            return <RECC_EN />;
                        default:
                            return <></>;
                        // error handle
                    }
                })()}

            </div>
        </section>
    )
}

export default ViewTap;

const Pediatrics = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={PCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>ศูนย์กุมารเวช</h2>
                <p>
                    ศูนย์กุมารเวชของโรงพยาบาลโนวา เฮลธ์ อินโนเวชั่น เป็นศูนย์เฉพาะทางที่ให้บริการดูแลและรักษาเด็กทุกวัย
                    ตั้งแต่ทารกแรกเกิดจนถึงวัยรุ่น ทีมแพทย์กุมารเวชที่มีความเชี่ยวชาญของเราพร้อมให้บริการด้วยความรู้ ความสามารถ
                    และความห่วงใยในการดูแลสุขภาพของเด็กอย่างครบวงจร
                </p>
                <Link href='/service/pediatric' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const Emergency = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={EMimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>ศูนย์อุบัติเหตุ-ฉุกเฉิน</h2>
                <p>
                    ศูนย์ฉุกเฉินของโรงพยาบาลโนวา เฮลธ์ อินโนเวชั่น พร้อมให้บริการตลอด 24 ชั่วโมงทุกวัน
                    โดยมีทีมแพทย์และพยาบาลที่มีความเชี่ยวชาญสูงและพร้อมรับมือกับเหตุการณ์ฉุกเฉินทุกประเภท
                    ตั้งแต่การรักษาเบื้องต้นไปจนถึงการผ่าตัดฉุกเฉิน
                    ด้วยการใช้เทคโนโลยีทันสมัยและการประสานงานที่มีประสิทธิภาพเพื่อให้ผู้ป่วยได้รับการดูแลอย่างรวดเร็วและปลอดภัย
                </p>
                <Link href='/service/emergency' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const CheckUpCenter = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={CCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>ศูนย์ตรวจสุขภาพ  </h2>
                <p>
                    ศูนย์ตรวจสุขภาพของโรงพยาบาลโนวา เฮลธ์ อินโนเวชั่น มุ่งเน้นการให้บริการตรวจสุขภาพที่ครอบคลุมและทันสมัย
                    เพื่อตรวจสอบและประเมินสุขภาพของผู้รับบริการอย่างละเอียด ด้วยการใช้อุปกรณ์และเทคโนโลยีที่ทันสมัย
                    เรามีโปรแกรมตรวจสุขภาพที่หลากหลายเพื่อตอบสนองความต้องการของผู้รับบริการทุกวัย ตั้งแต่การตรวจสุขภาพประจำปีไปจนถึงการตรวจเฉพาะทาง
                </p>
                <Link href='/service/check-up' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const RECC = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={RECCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>ศูนย์ทันตกรรม</h2>
                <p>
                    คลินิกทันตกรรมของโรงพยาบาลโนวา เฮลธ์ อินโนเวชั่น เป็นศูนย์เฉพาะทางที่ให้บริการด้านทันตกรรมครบวงจร โดยทีมทันตแพทย์ที่มีความเชี่ยวชาญและประสบการณ์สูง
                    เรามุ่งมั่นที่จะดูแลสุขภาพช่องปากและฟันของผู้ป่วยทุกเพศทุกวัย ด้วยมาตรฐานการรักษาที่เป็นเลิศและเทคโนโลยีทันสมัย
                </p>
                <Link href='/service/dental' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const Pediatrics_EN = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={PCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>Pediatrics Center</h2>
                <p>
                    The Pediatrics Center at Nova Health Innovation Hospital is a
                    specialized facility dedicated to the care and treatment of children of all ages,
                    from newborns to adolescents. Our team of expert pediatricians is committed to providing comprehensive care with knowledge,
                    skill, and compassion to ensure the health and well-being of every child.
                </p>
                <Link href='/service/pediatric' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const Emergency_EN = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={EMimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>24-Hour Emergency Center</h2>
                <p>
                    Nova Health Innovation Hospital’s Emergency Center is open 24/7,
                    staffed with highly skilled doctors and nurses ready to handle any emergency situation. From initial treatment to emergency surgery,
                    our team utilizes state-of-the-art technology and efficient coordination to ensure patients receive rapid and safe care.
                </p>
                <Link href='/service/emergency' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const CheckUpCenter_EN = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={CCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>Health Check-Up Center</h2>
                <p>
                    The Health Check-up Center at Nova Health Innovation Hospital
                    is dedicated to providing comprehensive and modern health screening services to
                    thoroughly assess and evaluate the health of our clients. Utilizing state-of-the-art equipment
                    and technology, we offer a variety of health check-up programs tailored to meet the needs of all age groups,
                    from annual check-ups to specialized screenings.
                </p>
                <Link href='/service/check-up' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}

const RECC_EN = () => {
    return (
        <>
            <div className={Styles['content-l']}>
                <Image src={RECCimg} alt="" width={1000} height={1000} />
            </div>
            <div className={Styles['content-r']}>
                <h2>Dental Clinic</h2>
                <p>
                    The Dental Clinic at Nova Health Innovation Hospital is a specialized center offering
                    comprehensive dental services by a team of highly skilled and experienced dentists.
                    We are committed to maintaining the oral health of patients of all ages,
                    providing excellent care with the latest technology and treatment standards.
                </p>
                <Link href='/service/dental' className={Styles['link']}>
                    ข้อมูลเพิ่มเติม
                </Link>
            </div>
        </>
    )
}