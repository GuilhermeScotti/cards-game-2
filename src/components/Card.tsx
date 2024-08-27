import { useState } from "react";

interface CardProps {
    front: string;
    back: string;
    difficulty: string;
    imgUrl: string;
    id: string;
}

const Card = () => {

    const [currentCard, setCurrentCard] = useState<CardProps>({
        front: "Start!",
        back: "Press the button",
        difficulty: "",
        imgUrl: "",
        id: "0"
    });

    const [flipState, setFlipState] = useState('flipped');

    const toggleFlip = () => {
        setFlipState(prevState => (prevState === 'flipped' ? '' : 'flipped'));
    };

    return(
    <div>
    <div className="flip-container" onClick={toggleFlip}>
        <div className={`flipper ${currentCard.difficulty} ${flipState}`}>
            <div className="front">
                <h2>{currentCard.front}</h2>
            </div>
            <div className="back">
                <h2>{currentCard.back}</h2>
                <img className="cardImage" src={currentCard.imgUrl} />
            </div>
        </div>
    </div>

        <button onClick={() => {

            if (flipState === 'flipped'){
                toggleFlip();
            }

            let randomNumber = Math.floor(Math.random() * 3) + 1;

            if (randomNumber === 1) {
                setCurrentCard({
                    front: "Front 1 easy",
                    back: "Back 1",
                    difficulty: "easy",
                    imgUrl: "",
                    id: "1"
                });

                return;
            }

            if (randomNumber === 2) {
                setCurrentCard({
                    front: "Front 2 med",
                    back: "Back 2 with image",
                    difficulty: "medium",
                    imgUrl: "https://fastly.picsum.photos/id/321/536/354.jpg?hmac=rMro5KiNhbam7A-6Ur5Wi_mB7beay8HM1UpMQaLeAcs",
                    id: "2"
                });

                return;
            }

            if (randomNumber === 3) {
                setCurrentCard({
                    front: "Front 3 hard",
                    back: "Back 3",
                    difficulty: "hard",
                    imgUrl: "",
                    id: "3"
                });

                return;
            }
            }}> 
            → </button>
    
    </div>);
};

export default Card;