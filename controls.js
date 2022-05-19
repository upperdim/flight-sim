const PITCH_UP_KEY   = 'ArrowUp';
const PITCH_DOWN_KEY = 'ArrowDown';
const FORWARD_KEY    = 'w';
const REVERSE_KEY    = 's';
const ROLL_RIGHT_KEY = 'd';
const ROLL_LEFT_KEY  = 'a';
const TURN_RIGHT_KEY = 'e';
const TURN_LEFT_KEY  = 'q';
const STRAFE_RIGHT_KEY = 'l';
const STRAFE_LEFT_KEY = 'j';
const STRAFE_UP_KEY = 'i';
const STRAFE_DOWN_KEY = 'k';

class Controls {
    constructor() {
        this.forward = false;
        this.reverse = false;
        this.rollRight = false;
        this.rollLeft = false;
        this.pitchUp = false;
        this.pitchDown = false;
        this.turnRight = false;
        this.turnLeft = false;
        this.strafeRight = false;
        this.strafeLeft = false;
        this.strafeUp = false;
        this.strafeDown = false;
    
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
        // Arrow function handler for the `onkeydown`event listener
        document.onkeydown = (event) => {
            switch (event.key) {
                case ROLL_LEFT_KEY:
                    // If we were to write a normal function,
                    // below `this` would refer to the function itself
                    // instead of the instance of the class.
                    // Therefore it matters.
                    this.rollLeft = true;
                    break;
                case ROLL_RIGHT_KEY:
                    this.rollRight = true;
                    break;
                case FORWARD_KEY:
                    this.forward = true;
                    break;
                case REVERSE_KEY:
                    this.reverse = true;
                    break;
                case PITCH_UP_KEY:
                    this.pitchUp = true;
                    break;
                case PITCH_DOWN_KEY:
                    this.pitchDown = true;
                    break;
                case TURN_RIGHT_KEY:
                    this.turnRight = true;
                    break;
                case TURN_LEFT_KEY:
                    this.turnLeft = true;
                    break;
                case STRAFE_RIGHT_KEY:
                    this.strafeRight = true;
                    break;
                case STRAFE_LEFT_KEY:
                    this.strafeLeft = true;
                    break;      
                case STRAFE_UP_KEY:
                    this.strafeUp = true;
                    break;  
                case STRAFE_DOWN_KEY:
                    this.strafeDown = true;
                    break;               
            }
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case ROLL_LEFT_KEY:
                    this.rollLeft = false;
                    break;
                case ROLL_RIGHT_KEY:
                    this.rollRight = false;
                    break;
                case FORWARD_KEY:
                    this.forward = false;
                    break;
                case REVERSE_KEY:
                    this.reverse = false;
                    break;
                case PITCH_UP_KEY:
                    this.pitchUp = false;
                    break;
                case PITCH_DOWN_KEY:
                    this.pitchDown = false;
                    break;
                case TURN_RIGHT_KEY:
                    this.turnRight = false;
                    break;
                case TURN_LEFT_KEY:
                    this.turnLeft = false;
                    break;
                case STRAFE_RIGHT_KEY:
                    this.strafeRight = false;
                    break;
                case STRAFE_LEFT_KEY:
                    this.strafeLeft = false;
                    break;      
                case STRAFE_UP_KEY:
                    this.strafeUp = false;
                    break;  
                case STRAFE_DOWN_KEY:
                    this.strafeDown = false;
                    break; 
            }
        }
    }
}
