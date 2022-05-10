export const UserDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: [...action.payload.questions],
        title: action.payload.title,
      };

    case "CLICK_OPERATION":
      const option_marked = action.payload;
      let curr_score = state.score;
      if (state.questions[state.index].answer === Number(option_marked)) {
        curr_score += 5;
      } else {
        curr_score -= 1;
      }
      let index = state.index;
      if (index !== state.questions.length - 1) {
        index += 1;
      }
      return {
        ...state,
        questions: state.questions.map((ele, idx) =>
          idx === state.index
            ? { ...ele, option_marked: option_marked }
            : { ...ele }
        ),
        score: curr_score,
        index: index,
      };
    case "RESET":
      return {
        score: 0,
        questions: [],
        index: 0,
      };
    default:
      return state;
  }
};
