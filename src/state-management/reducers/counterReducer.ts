interface Action {
    type: "INCREMENT" | "RESET";
}

const counterReducer = (state: number, action: Action): number => {
    if (action.type === "INCREMENT") return state + 1;
    if (action.type === "RESET") return 0;
    return state; // Or throw new Error("Action is not supported");
}

export default counterReducer;
