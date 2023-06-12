import React, { useState } from 'react'


function Card() {


    const [isCardVisible, setIsCardVisible] = useState(false);
    const [StrengthCard, setStrengthCard] = useState(false);
    const [BalanceCard, setBalanceCard] = useState(false);
    const [FlexibilityCard, setFlexibilityCard] = useState(false);
    const [DancingCard, setDancingCard] = useState(false);
    const [BikingCard, setBikingCard] = useState(false);
    const [SwimmingCard, setSwimmingCard] = useState(false);
    const [ClimbingCard, setClimbingCard] = useState(false);
    const [TaiChi, setTaiChi] = useState(false);
    const [Position, setPosition] = useState(false);
    const [BalanceWalk, setBalancewalk] = useState(false);
    const [StandFoot, setStandFoot] = useState(false);
    const [BackStretch, setBackStretch] = useState(false);
    const [innerStretch, setInnerStretch] = useState(false);
    const [AnkleStretch, setAnkleStretch] = useState(false);
    const [LegStretch, setLegStretch] = useState(false);
    const [Lifting, setLifting] = useState(false);
    const [Gripping, setGripping] = useState(false);
    const [Carrying, setCarrying] = useState(false);
    const [ArmCurls, setArmCurls] = useState(false);

    const headleLifing = () => {
        setLifting(!Lifting);
    }
    const headleGripping = () => {
        setGripping(!Gripping);
    }
    const headleCarring = () => {
        setCarrying(!Carrying);
    }
    const headleArmCurls = () => {
        setArmCurls(!ArmCurls);
    }

    const headleButton = () => {
        setIsCardVisible(!isCardVisible);
    }
    const headleStrengthCard = () => {
        setStrengthCard(!StrengthCard);
    }
    const headleBalanceCard = () => {
        setBalanceCard(!BalanceCard);
    }
    const headleFlexibilityCard = () => {
        setFlexibilityCard(!FlexibilityCard);
    }
    const headleDancing = () => {
        setDancingCard(!DancingCard);
    }
    const headleBiking = () => {
        setBikingCard(!BikingCard);
    }
    const headleSwimming = () => {
        setSwimmingCard(!SwimmingCard);
    }
    const headleClimbing = () => {
        setClimbingCard(!ClimbingCard);
    }
    const headleTaiChi = () => {
        setTaiChi(!TaiChi);
    }
    const headlePosition = () => {
        setPosition(!Position);
    }
    const headleBalance = () => {
        setBalancewalk(!BalanceWalk);
    }
    const headleStandfoot = () => {
        setStandFoot(!StandFoot);
    }
    const headleBackStretch = () => {
        setBackStretch(!BackStretch);
    }
    const headleInnerStretch = () => {
        setInnerStretch(!innerStretch);
    }
    const headleAnkleStretch = () => {
        setAnkleStretch(!AnkleStretch);
    }
    const headleLegStretch = () => {
        setLegStretch(!LegStretch);
    }

    return (
        <>
            <div className='card-body'>
                <div className='card-container'>
                    <h3 className='card-title'>Endurance</h3>
                    <p className='card-describe'>Endurance exercises improve the health of your heart, lungs, and circulatory system. These activities help keep you healthy, improve your fitness, and help you perform the tasks you need to do every day. </p>
                    <button className='card-btn' onClick={headleButton}>Click</button>

                    {isCardVisible && (
                        <div className='Endurance-card'>
                            <div className='Endurance-card1'><h5>Dancing</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleDancing}>Click</button>
                                {DancingCard && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GrkjmqqoJYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Biking</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleBiking}>Click</button>
                                {BikingCard && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Vs-WcyLQgBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Swimming</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleSwimming}>Click</button>
                                {SwimmingCard && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/msEXQqjSIHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Climbing</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleClimbing}>Click</button>
                                {ClimbingCard && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VbKXUNWmMqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>

                        </div>
                    )}


                </div>
                <div className='card-container'>
                    <h3 className='card-title'>Strength</h3>
                    <p className='card-describe'>Your muscular strength can make a big difference. Strong muscles help you stay independent and make everyday activities feel easier, like getting up from a chair, climbing stairs, and carrying groceries. </p>
                    <button className='card-btn' onClick={headleStrengthCard}>Click</button>

                    {StrengthCard && (
                        <div className='Endurance-card'>
                            <div className='Endurance-card1'><h5>Lifting weight</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleLifing} >Click</button>
                                {Lifting && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/j_8Ej4rqVzA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Gripping</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleGripping} >Click</button>
                                {Gripping && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BYLq4CJmuPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Carrying</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleCarring}>Click</button>
                                {Carrying && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FCI9q9hYUz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Arm curls</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleArmCurls}>Click</button>
                                {ArmCurls && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EVxC8ryDAZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>

                        </div>
                    )}

                </div>

            </div>
            <div className='card-body'>
                <div className='card-container'>
                    <h3 className='card-title'>Balance</h3>
                    <p className='card-describe'>Balance exercises help prevent falls, a common problem in older adults that can have serious consequences. Many lower-body strength exercises also will improve your balance.</p>
                    <button className='card-btn' onClick={headleBalanceCard}>Click</button>

                    {BalanceCard && (
                        <div className='Endurance-card'>
                            <div className='Endurance-card1'><h5>Tai Chi</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleTaiChi}>Click</button>
                                {TaiChi && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/q9FmaoiV3rk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Seated</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headlePosition} >Click</button>
                                {Position && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/8BcPHWGQO44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Balance walk</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleBalance}>Click</button>
                                {BalanceWalk && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/z_GKdFf3qv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Stand 1 foot</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleStandfoot} >Click</button>
                                {StandFoot && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QT5d4tTXW6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>

                        </div>
                    )}
                </div>
                <div className='card-container'>
                    <h3 className='card-title'>Flexibility</h3>
                    <p className='card-describe'>Stretching can improve your flexibility. Moving more freely will make it easier for you to reach down to tie your shoes or look over your shoulder when you back your car out of the driveway. </p>
                    <button className='card-btn' onClick={headleFlexibilityCard}>Click</button>

                    {FlexibilityCard && (
                        <div className='Endurance-card'>
                            <div className='Endurance-card1'><h5>Back Stretch</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleBackStretch}>Click</button>
                                {BackStretch && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FpIfMyfpCk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Thigh Stretch</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleInnerStretch}>Click</button>
                                {innerStretch && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/WsIs87By-a8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Ankle Stretch</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleAnkleStretch}>Click</button>
                                {AnkleStretch && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/87BeiyTFZyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>
                            <div className='Endurance-card1'><h5>Leg Stretch</h5>
                                <p>Plz click below button </p>
                                <button className='card-btn' onClick={headleLegStretch}>Click</button>
                                {LegStretch && (
                                    <div>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/guOj99WPZnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )}
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Card