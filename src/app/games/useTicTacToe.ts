import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
type Player = 'X' | 'O';
type CellValue = Player | null;
type GameStatus = 'playing' | 'won' | 'draw';
type Board = CellValue[];

const INITIAL_BOARD: Board = Array<CellValue>(9).fill(null);

function checkWinner(board: Board): Player | null {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const [a, b, c] of winningLines) {
      const value = board[a];
      if (value && value === board[b] && value === board[c]) {
        return value;
      }
    }
  
    return null;
  }

export const useTicTacToe = () => {
    const router = useRouter();

  const [board, setBoard] = useState<Board>(INITIAL_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [status, setStatus] = useState<GameStatus>('playing');
  const [winner, setWinner] = useState<Player | null>(null);

  const isBoardFull = useMemo(() => board.every((cell) => cell !== null), [board]);

    const handleCellPress = (index: number) => {
        if (status !== 'playing') return;
        if (board[index] !== null) return;
    
        const nextBoard = board.slice();
        nextBoard[index] = currentPlayer;
    
        const nextWinner = checkWinner(nextBoard);
        const nextIsBoardFull = nextBoard.every((cell) => cell !== null);
    
        if (nextWinner) {
          setBoard(nextBoard);
          setWinner(nextWinner);
          setStatus('won');
          return;
        }
    
        if (nextIsBoardFull) {
          setBoard(nextBoard);
          setStatus('draw');
          return;
        }
    
        setBoard(nextBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    const handleReset = () => {
        setBoard(INITIAL_BOARD);
        setCurrentPlayer('X');
        setStatus('playing');
        setWinner(null);
      };
    
      const handleBackToGames = () => {
        router.navigate('/');
      };
    
      let statusLabel: string;
      if (status === 'playing') {
        statusLabel = `Player ${currentPlayer}'s turn`;
      } else if (status === 'won' && winner) {
        statusLabel = `Player ${winner} wins!`;
      } else {
        statusLabel = "It's a draw.";
      }

  return {
    board,
    currentPlayer,
    status,
    winner,
    isBoardFull,
    handleCellPress,
    handleReset,
    handleBackToGames,
    statusLabel,
  };
};