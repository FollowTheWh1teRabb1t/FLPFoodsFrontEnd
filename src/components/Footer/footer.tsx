import { Container } from './styles';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

export default function Footer() {
    return (
        <Container>
            <section>
                <div className='boxInfo'>
                    <div>
                        <p>Address</p>
                        <p>Number 3891, Ranchview, Palmeira PR <FaMapMarkerAlt color='yellow' /></p>
                    </div>
                </div>
                <div className='boxReservation'>
                    <div>
                        <p>Reservation</p>
                        <p>(99)-9811-9999 <FaPhoneAlt color='yellow' /></p>
                    </div>
                </div>
                <div className='boxAvailability'>
                
                    <div>
                        <p>Opening</p>
                        <p>Everyday - 10AM - 09PM <FaClock color='yellow' /></p>
                    </div>
                </div>
            </section>
            <h3>FLP FOODS © ALL RIGHTS RESERVED</h3>
        </Container>
    );
}
