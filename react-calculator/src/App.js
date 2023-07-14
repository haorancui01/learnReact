import { useReducer } from 'react';
import { DigitButton } from './DigitButton';
import { OperationButton } from './OperationButton';
import './App.css';
import './style.css';

// Types of actions that can be dispatched
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete digit',
  EVALUATE: 'evaluate',
}

// Reducer function to handle state updates based on dispatched actions
const reducer = (state, { type, payload }) => {
  switch (type) {
    // Action: Add a digit to the current operand
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state; // Return current state if adding "0" to "0"
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state; // Return current state if trying to add a decimal point when it already exists
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }

    // Action: Choose an operation
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state; // Return current state if there are no operands
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }

    // Action: Clear the calculator (AC)
    case ACTIONS.CLEAR:
      return {};

    // Action: Evaluate the expression
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state; // Return current state if there is missing data to perform evaluation
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }

    // Action: Delete a digit from the current operand
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null
        }
      }
      if (state.currentOperand == null) return state; // Return current state if there is no current operand
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null
        }
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }
  };
};

// Function to evaluate the expression based on the current operand, previous operand, and operation
const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return "" // Return an empty string if operands are not valid numbers
  }
  let computation = ""
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "/":
      computation = prev / current
      break
  }
  return computation.toString()
};

// Number formatter for formatting the operand display
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

// Function to format the operand for display
const formatOperand = (operand) => {
  if (operand == null) return;
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
};

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  // Sample dispatch: dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 }})

  return (
    <div className="calculator-grid">
      <div className='output'>
        <div className='previous-operand'>{formatOperand(previousOperand)} {operation}</div>
        <div className='current-operand'>{formatOperand(currentOperand)}</div>
      </div>
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
      <DigitButton digit="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className='span-two' onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
    </div>
  );
}

export default App;
