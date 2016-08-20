import checked from  '../../public/src/components/index_components/checked';
describe('checkUserName test', ()=> {
  fit('should return a true', ()=> {
    let input = 'h123124141';
    let result = checked.checkUserName(input);
    expect(result).toEqual(true);
  })
  fit('should return a false', ()=> {
    let input = '@@@@@';
    let result = checked.checkUserName(input);
    expect(result).toEqual(false);
  })
  fit('should return a false', ()=> {
    let input = '21';
    let result = checked.checkUserName(input);
    expect(result).toEqual(false);
  })
});

describe('checkUserPsd test', ()=> {
  fit('should return a true', ()=> {
    let input = '1221312';
    let result = checked.checkUserPsd(input);
    expect(result).toEqual(true);
  })
  fit('should return a false', ()=> {
    let input = '1111111111111111111111';
    let result = checked.checkUserPsd(input);
    expect(result).toEqual(false);
  })
});

describe('isEmpty test', ()=> {
  fit('should return a true', ()=> {
    let input = '';
    let result = checked.isEmpty(input);
    expect(result).toEqual(true);
  })
  fit('should return a false', ()=> {
    let input = '111111111111111111111';
    let result = checked.isEmpty(input);
    expect(result).toEqual(false);
  })
});

