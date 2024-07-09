import React, {useState} from 'react';
import FavTitle from '../../components/FavoritesComponents/FavTitle';
import FavProduct from '../../components/FavoritesComponents/FavProduct';

const FavoritesContainer = () => {
    const products = [
        {points: 25, url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png", title: "Customize your drink", description: "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup." },
        {points: 100, url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png", title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more", description: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more." },
        {points: 200, url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png", title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast", description: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us." },
        {points: 300, url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png", title: "Sandwich, protein box or at-home coffee", description: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®." },
        {points: 400, url: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png", title: "Select Starbucks® merchandise", description: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20." },
    ];
    const [selectedButton, setSelectedButton] = useState(products[0].points);
    let selectedProduct = products.find((product)=>product.points === selectedButton)
    return (
        <div className='mb-[72px] md:mb-[128px] z-[-1]'>
            <div className='text-center bg-light-green-op px-0 pt-[4.8rem]'>
                <div className='px-[1.6rem]'>
                    <FavTitle />
                </div>
                <div className='relative z-0'>
                    <div className='buttons flex justify-around mx-auto relative w-full md:max-w-[540px]'>
                        {products.map((product) => (
                            <button key={product.points} className={`bg-transparent items-center grow pt-[0.8rem] pb-[1.6rem] px-[0.8rem] relative w-full ${selectedButton === product.points ? 'border-b-4 border-green' : ''}`} role={"tab"} tabIndex="-1" onClick={() => setSelectedButton(product.points)}>
                                <span className='grow text-[1.9rem] md:text-[2.4rem] font-semibold'>
                                    {product.points}
                                    <span className='text-star'>★</span>
                                    <span className='border-0 h-[1px] overflow-hidden p-0 absolute w-[1px]'>Stars</span>
                                </span>
                            </button>
                        ))}
                        
                    </div>
                    <div className='options bg-light-green pb-[4.8rem] md:pb-0'>
                        <div>
                            <FavProduct link={selectedProduct.url} title={selectedProduct.title} description={selectedProduct.description}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoritesContainer