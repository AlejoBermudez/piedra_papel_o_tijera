type Move = "piedra" | "papel" | "tijeras"
type Game = {
    CPUMove: Move,
    myMove:Move
}
const state = {
    data:{
        currentGame:{
            CPUMove:"",
            myMove:"",
        },
        history:[],
        listeners:[],
    },
    getState(){
        return this.data
    },
    setMove(move:Move){
        const currentState = this.getState();
        currentState.currentGame.myMove
    },
    pushToHistory(play:Game){
        const currentState = this.getState();
        currentState.history(play)
    },
    winner(myMove:Move, CPUMove:Move){
        const winR = myMove == "piedra" && CPUMove == "tijeras"
        const winP = myMove == "papel" && CPUMove == "piedra"
        const winS = myMove == "tijeras" && CPUMove == "papel"
        const lossR = myMove == "piedra" && CPUMove == "papel"
        const lossP = myMove == "papel" && CPUMove == "tijeras"
        const lossS = myMove == "tijeras" && CPUMove == "piedra"
        const playerWin = [winR,winP,winS].includes(true);
        const playerLoses = [lossR,lossP,lossS].includes(true);
        const tie = myMove == CPUMove
        if(playerWin){
            return playerWin;
        }if(playerLoses){
            return playerLoses
        }else{
            return tie
        }
    },
    setState(newState){
        this.data = newState;
        for (const cb of this.listeners) {
            cb(newState);
        }
    },
    suscribe(callback:(any)=>any){
        this.listeners.push(callback)
    }
}

export { state }