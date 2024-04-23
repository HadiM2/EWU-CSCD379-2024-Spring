import { WordList } from "./wordList";
import { Game } from '~/scripts/game';
import { Letter, LetterState } from '~/scripts/letter';
import { Word } from '~/scripts/word';

export class WordEngine {
    public letters: LetterHelper[];
    public partialWord: Array<string | undefined> = new Array(5);
    public wordList: Array<string>;
    public count: number;
    constructor(wordList: Array<string> = WordList) {
      this.count = 0;
      this.wordList = wordList;
      this.partialWord = Array.from({ length: 5 }, (v, k) => undefined);
      this.letters = Array.from({ length: 26 }, (v, k) => {
        let character = String.fromCharCode(65 + k);
        return new LetterHelper(character);
      });
    }
  
    validWords(game: Game): Array<string> {
      this.setup(game);
      return WordList.filter(wordListWord => this.filterWordList(wordListWord));
    }
  
    filterWordList(wordListWord: string): boolean {
      let characters = wordListWord.toUpperCase().split('');
      for (let index = 0; index < characters.length; index++) {
        let character = characters[index];
        let lettersIndex = character.charCodeAt(0) - 65;
        let letterHelper = this.letters[lettersIndex];
        if (!letterHelper.isValidForIndex[index]) {
          return false;
        }
      }
      return true;
    }
  
    setup(game: Game) {
      game.guesses.forEach(guess => {
        if (!guess.isFilled) {
          return;
        }
        let lettersArray = guess.letters;
        for (let index = 0; index < lettersArray.length; index++) {
          if (lettersArray[index].state === LetterState.Correct) {
            this.partialWord[index] = lettersArray[index].char;
          } else if (lettersArray[index].state === LetterState.Misplaced) {
            let lettersIndex = lettersArray[index].char.charCodeAt(0) - 65;
            this.letters[lettersIndex].isValidForIndex[index] = false;
          } else if (lettersArray[index].state === LetterState.Wrong) {
            let lettersIndex = lettersArray[index].char.charCodeAt(0) - 65;
            this.letters[lettersIndex].isValidForIndex = [
              false,
              false,
              false,
              false,
              false,
            ];
          }
        }
      });
    }
  }
  
  class LetterHelper {
    public isValidForIndex: boolean[];
    public character: string;
  
    constructor(character: string) {
      this.isValidForIndex = [true, true, true, true, true];
      this.character = character;
    }
  }