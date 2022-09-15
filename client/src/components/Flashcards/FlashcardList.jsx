
import Flashcard from "./Flashcard";

export default function FlashcardList({quitRound}) {
  const flashcards = {
    1:{
      id: 1,
      character: "你好",
      pinyin: "Nǐ hǎo",
      english: "hello",
      img: ""
    },
    2:{
      id: 2,
      character: "爱",
      pinyin: "ài",
      english: "to love, affection, to be fond of, to like",
      img: ""
    },
    3:{
      id: 3,
      character: "八",
      pinyin: "ài",
      english: "eight",
      img: ""
    },
    4:{
      id: 4,
      character: "爸爸",
      pinyin: "bàba",
      english: "father (informal); CL:个[ge4] ,位[wei4]",
      img: ""
    },
    5:{
      id: 5,
      character: "杯子",
      pinyin: "bēi zi",
      english: "cup; glass; CL:个[ge4] ,支[zhi1]",
      img: ""
    },
  }
  return (
    <>
      <Flashcard flashcard={flashcards[1]} quitRound={quitRound}/>
    </>
  )
}