type SumMethodType = (a: number, b: number) => number

export const sum: SumMethodType = (a, b) => {
    return a + b;
}

// sum('1', 2) // wrong a: type

// Объявление пользовательского типа данных
interface UserData {
    id: number;
    name: string;
    email: string;
}

// Объявление типа для состояния
type State<T> = {
    data: T | null;
    isLoading: boolean;
    error: string | null;
};

// Объявление класса StateManager
// Объявление класса StateManager
class StateManager<T> {
    private _state: State<T>;

    constructor(initialData: T) {
        this._state = {
            data: initialData,
            isLoading: false,
            error: null
        };
    }

    // Геттер для получения текущего состояния
    get state(): State<T> {
        return this._state;
    }

    // Сеттер для установки нового состояния
    set state(newState: State<T>) {
        this._state = newState;
    }
}

// Пример использования
const initialState: UserData = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};

const userManager = new StateManager<UserData>(initialState);

// Получение текущего состояния
const currentState = userManager.state;
console.log(currentState);

// Изменение состояния (например, при загрузке данных)
userManager.state = { ...currentState, isLoading: true };

// Получение обновленного состояния
const updatedState = userManager.state;
console.log(updatedState);
