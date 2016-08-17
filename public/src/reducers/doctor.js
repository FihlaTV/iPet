const doctor = (state = [], action)=> {
  switch (action.type) {
    case 'DOCTOR_LOADED':
      return action.data;
  }
  return state;
};

export default doctor;