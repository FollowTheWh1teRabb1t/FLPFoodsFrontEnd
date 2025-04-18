import { Container } from './styles';
import { useState } from 'react';
import Header from '@/components/Header/header'
import Card from '@/components/Card/card'
import Footer from '@/components/Footer/footer'
import ScrollToTopButton from '@/components/ScrollTopButton/ScrollTopButton'
import leavesTwo from '@/assets/leavesTwo.png'
import lambPresentation from '@/assets/lambPresentation.png'
import powderEffect from '@/assets/powderEffect.png'
import cornerLeaves from '@/assets/cornerLeaves.png'
import cornerLeavesTwo from '@/assets/cornerLeavesTwo.png'
import explosionEffect from '@/assets/explosionEffect.png'
import flyingLeaves from '@/assets/flyingLeaves.png'
import goldenFlower from '@/assets/goldenFlower.png'
import cornerLeavesThree from '@/assets/cornerLeavesThree.png'
import whiteFlowers from '@/assets/whiteFlowers.png'
import rosePetal from '@/assets/rosePetal.png'
import { menuData } from '@/data/menuData'
import { reviews } from '@/data/reviewsData';



export default function HomePage() {
        const [currentIndex, setCurrentIndex] = useState(0);


        const handleNext = () => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length)
        }

        const handlePrev = () => {
            setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
        }

        const currentReview = reviews[currentIndex];
    
    return (
        <Container>
            <Header />
            <div className='boxPresentation'>
                <img className='twoLeaves' src={leavesTwo} alt="Palmtree leaves" />
                <h1>Fresh and Healthy <br /> Food Specialties</h1>
                <img  className='cornerLeavesThree' src={cornerLeavesThree} alt="" />
                <img className='powderImg' src={powderEffect} alt="" />
            </div>
            
            <div className='boxDishPresentation'>
                <img className='cornerLeaves' src={cornerLeaves} alt="" />
                <img className='lambImg' src={lambPresentation} alt="lamb meat" />
                <h2>Try Our New Food Menu</h2>
                <p>We create food with new characteristics with extraordinary taste!</p>
                <img className='cornerLeavesTwo' src={cornerLeavesTwo} alt="" />
            </div>
            <div id="menu" className='boxMenu'>
                <h2>Choose in Our Menu</h2>
                <div className='dishesArea'>
                   {menuData.dishes.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                   ))}
                </div>
                <div className='beverageArea'>
                   {menuData.drinks.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price} 
                    />
                   ))}
                   <img className='explosionImg' src={explosionEffect} alt="" />
                   <img className='flyingLeaves' src={flyingLeaves} alt="" />
                </div>
            </div>
            <div id="services" className='servicesBox'>
                <h2>We have a service <br /> that can satisfy you</h2>
                <p>
                    Our restaurant has good service to make our customers more comfortable to come <br />
                    back again. Our goal is create some healthy and fresh for you to enjoy. <br />
                    We are looking forward to having you visit our restaurant
                </p>
                <img className='goldenFlower' src={goldenFlower} alt="" />
                <div className='boxSquares'>
                    <p>Online Order</p>
                    <p>24/7 Service</p>
                    <p>Super Chef</p>
                    <p>Free Food Box</p>
                </div>
            </div>
            <div id="review" className='boxReviews'>
                   <img className='rosePetal' src={rosePetal} alt="" />
                   <h2>What Our Customers Say</h2>
                   <div className='cardReview'>
                        <button onClick={handlePrev} className='arrowBtn'>←</button>
                        <div className='textArea'>
                            <p>"{currentReview.text}"</p>
                            <p className='nameClient'>- {currentReview.name}, {currentReview.profession}</p>
                        </div>
                        <div className='imageArea'>
                            <img src={currentReview.image} alt={currentReview.name} />
                        </div>
                        <button onClick={handleNext} className='arrowBtn'>→</button>
                    </div>
                    <img className='whiteFlowers' src={whiteFlowers} alt="" />
            </div>
            <ScrollToTopButton />
            <Footer />
        </Container>
    )
}