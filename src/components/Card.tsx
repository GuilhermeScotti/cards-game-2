import { useRef, useState } from "react";
import GuessInput from "./GuessInput";

interface CardProps {
  front: string;
  back: string;
  difficulty: string;
  imgUrl: string;
  id: number;
}

const shuffleArray = (array: CardProps[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

const dummyCard: CardProps =
{
  front: "Start!",
  back: "Press the button",
  difficulty: "",
  imgUrl: "",
  id: -1
};

const cards: CardProps[] = [
  {
    front: "Front 1 easy",
    back: "Back 1",
    difficulty: "easy",
    imgUrl: "",
    id: 1
  },
  {
    front: "Front 2 med",
    back: "Back 2 with image",
    difficulty: "medium",
    imgUrl: "https://fastly.picsum.photos/id/321/536/354.jpg?hmac=rMro5KiNhbam7A-6Ur5Wi_mB7beay8HM1UpMQaLeAcs",
    id: 2
  },
  {
    front: "Front 3 hard",
    back: "Back 3",
    difficulty: "hard",
    imgUrl: "",
    id: 3
  }
];

const Card = () => {

  const [currentCard, setCurrentCard] = useState<CardProps>(dummyCard);

  const [flipState, setFlipState] = useState('');

  const [cardsArray, setCardsArray] = useState(cards);

  const [answerState, setAnswerState] = useState("");

  const [streak, setStreak] = useState(0);

  const inputValue = useRef<string>("");

  const toggleFlip = () => {
    setFlipState(prevState => (prevState === 'flipped' ? '' : 'flipped'));
  };

  return (
    <div>

      <div className="section">
        <h2>Current Streak: {streak}</h2>
      </div>


      <div className="container">
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
      </div>

      <GuessInput
        onSubmit={() => {

          if (inputValue.current.toLowerCase() === currentCard.back.toLowerCase()) {
            setAnswerState("right");
            setStreak(streak + 1);
          } else {
            setAnswerState("wrong");
            setStreak(0);
          }
        }}
        onInputChange={(e) => {
          inputValue.current = e.target.value;
        }}

        buttonState={answerState} />

      <div className="section">

        <button onClick={() => {

          if (flipState === 'flipped') {
            toggleFlip();
          }

          let index = currentCard.id === -1
            ? 0
            : cardsArray.findIndex(card => card.id === currentCard.id) - 1;

          if (index >= cardsArray.length) {
            index = 0;
          }

          let card = cardsArray[index];

          if (card) {
            setCurrentCard(card);
          }
        }}>
          ← </button>

        <button onClick={() => {

          if (flipState === 'flipped') {
            toggleFlip();
          }

          let index = currentCard.id === -1
            ? 0
            : cardsArray.findIndex(card => card.id === currentCard.id) + 1;

          if (index >= cardsArray.length) {
            index = cardsArray.length - 1;
          }

          let card = cardsArray[index];

          if (card) {
            setCurrentCard(card);
          }
        }}>
          → </button>

        <button onClick={() => {
          const newArray = shuffleArray(cardsArray);
          setCardsArray(newArray);
          setCurrentCard(dummyCard);
        }}>
          Shuffle
        </button>

      </div>

      <div className="section">
        <button onClick={() => {
          const newArray = cardsArray.filter(card => card.id !== currentCard.id);
          setCardsArray(newArray);
          setCurrentCard(dummyCard);
        }}>
          Remove from deck
        </button>
      </div>

      <button onClick={() => {
          setCardsArray(cards);
          setCurrentCard(dummyCard);
        }}>
          Reset deck
        </button>

    </div>
  );
};

export default Card;